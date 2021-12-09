import "./SideBar.css";

const SideBar = ({ show }) => {
  const sideBarClass = ["sidebar"];

  if (show) {
    sideBarClass.push("show");
  }

  return <div className={sideBarClass.join(" ")}></div>;
};

export default SideBar;
