import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title">Total Sales Made Today</p>
        <p className="amount">Rs. 50000</p>
        <p className="desc">
          Previous transcations processing... Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult neg">
              <KeyboardArrowDownIcon fontSize="small"/>
              14k
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult pos">
              <KeyboardArrowUpIcon fontSize="small"/>
              6k
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult pos">
              <KeyboardArrowUpIcon fontSize="small"/>
              8k
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured;

