import "./Banner.css";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { FaTriangleExclamation } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";

const variants = [
  {
    name: "neutral",
    classList: "banner banner--neutral",
    icon: <FaCircleInfo />,
    subClass: "banner--neutral-body",
    innerClass: "banner--inner"
  },
  {
    name: "success",
    classList: "banner banner--success",
    icon: <FaCircleCheck />,
    subClass: "banner--success-body",
    innerClass: "banner--inner"
  },
  {
    name: "error",
    classList: "banner banner--error",
    icon: <FaCircleXmark />,
    subClass: "banner--error-body",
    innerClass: "banner--inner"
  },
  {
    name: "warning",
    classList: "banner banner--warning",
    icon: <FaTriangleExclamation />,
    subClass: "banner--warning-body",
    innerClass: "banner--inner"
  },
];

function Banner({ variant = "neutral", detail, children, onClick = () => {} }) {
  let bannerInfo = variants.find((vari) => vari.name === variant);
  if (!bannerInfo) {
    bannerInfo = variants[0];
  }
  if(!detail) {
    if(bannerInfo.innerClass.search("banner--no-detail")<0) {
      bannerInfo.innerClass += " banner--no-detail"
    }
  }
  return (
    <div onClick={onClick} className={bannerInfo.classList}>
      <div className={bannerInfo.innerClass}>
        {bannerInfo.icon}
        <div className="banner--text">
          <h1>
            {children}
          </h1>
          { detail && 
          <p className={bannerInfo.subClass}>
            {detail}
          </p>
          }
        </div>

      </div>
    </div>
  );
}

export default Banner;
