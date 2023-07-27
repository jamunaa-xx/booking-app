import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img 
                src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                alt="" 
                className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">Jim Halpert</h1>
                <div className="itemDetail">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">jimhalpert@gmail.com</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+91 7755632240</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">blah blah</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Transactions last 6 Months"/>
          </div>
        </div>
        <div className="bottom">
          <div className="title">Last Transactionns</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Single;
