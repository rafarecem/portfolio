import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.png";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Rafael Nunes" />
      <p className="title">Desenvolvedor</p>
      <InformationContainer />
    </aside>
  );
};

export default Sidebar;