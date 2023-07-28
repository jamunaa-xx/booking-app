import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Pop = () => {
  return (
    <div>
      <Popup trigger={<button> Trigger</button>} position="right center">
        {close => (
          <div>
            Cannot Delete!!
            <a className="close" onClick={close}>
              &times;
            </a>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default Pop;