import "./newHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { hotelInputs } from "../../formsource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewHotel = () => {

  const [files,setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/rooms");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    let value = Array.from(
      e.target.selectedOptions, 
      (option) => option.value
    );
    setRooms(value);
  };

  console.log(files);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files)?.map(async (file) => { //files is not an araay, but an object, to extract value of files, we use Object.value
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/jamuna123/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newhotel = {
        ...info,
        rooms,
        photos: list,
      };

      await axios.post("/hotels", newhotel);
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add New Hotel</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
              src={
                files
                  ? URL.createObjectURL(files[0]) 
                  : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
              }
              alt="" 
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  <DriveFolderUploadOutlinedIcon className="icon"/>
                </label>
                <input 
                  type="file" 
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)} 
                />
              </div>
              

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id} >
                  <label>{input.label} </label>
                  <input 
                    id={input.id}
                    type={input.type} 
                    placeholder={input.placeholder}
                    onChange={handleChange} 
                  />
                </div>
              ))}
              <div className="formInput" >
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className="selectRooms" >
                <label>Rooms</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading 
                    ? "loading" 
                    : data?.map((room)=>(
                    <option key={room._id} value={room._id}>
                      {room.title}
                    </option>
                    ))
                  }
                </select>
              </div>
              
              <button onClick={handleClick}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
