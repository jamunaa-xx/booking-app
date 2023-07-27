import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const NewRoom = ({inputs, title}) => {

  const [file,setFile] = useState("");
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
              src={
                file
                  ? URL.createObjectURL(file) 
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
                  <input 
                    type="file" 
                    onChange={(e) => setFile(e.target.files[0])} 
                    id="file"
                  />
                </label>
              </div>
              

                {inputs.map(input=>(
                  <div className="formInput" key={input.id} >
                    <label>{input.label} </label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ))}
              
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewRoom;
