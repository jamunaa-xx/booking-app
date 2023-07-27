import "./emailList.css";

const EmailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll update you with the best deals!</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Enter your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default EmailList;
