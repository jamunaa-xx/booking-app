import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';


const Widget = ({type}) => {
  let data;

  const amount = 100;
  const diff = 20;

  switch(type) {
    case "user":
      data={
        title:"USERS",
        isMoney: false,
        link: "View All Users",
        icon: (
          <PersonOutlineIcon 
            className="icon" 
            style={{color: "rgb(226, 101, 122)", backgroundColor: "rgba(255, 192, 203, 0.5)"}}
          />
        ),
      };
      break;
      case "order":
        data={
          title:"ORDERS",
          isMoney: false,
          link: "View All Orders",
          icon: (
            <ShoppingCartOutlinedIcon 
              className="icon" 
              style={{color:"black", backgroundColor:"rgba(211, 211, 211, 0.653)"}}
            />
          ),
        };
        break;
        case "earning":
          data={
            title:"EARNINGS",
            isMoney: true,
            link: "View Net Earnings",
            icon: (
              <PaymentsOutlinedIcon 
                className="icon" 
                style={{color: "green", backgroundColor: "rgba(116, 189, 116, 0.4)"}}
              />
            ),
          };
          break;
          case "balance":
            data={
              title:"BALANCE",
              isMoney: true,
              link: "View Details",
              icon: (
                <AccountBalanceWalletOutlinedIcon 
                  className="icon" 
                  style={{color: "rgb(128, 34, 34)", backgroundColor: "rgba(165, 42, 42, 0.3)"}}
                />
              ),
            };
            break;
          

    default: break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "Rs."} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage pos">
          <KeyboardArrowUpOutlinedIcon/>
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget;
