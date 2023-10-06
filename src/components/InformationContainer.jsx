import "../styles/components/informationcontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment,AiFillLinkedin,AiFillGithub } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(83)998631763</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>rafarecen1@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Congo / PB</p>
        </div>
        </div>
        <div className="info-card">
        <AiFillLinkedin id="linkedin-icon"/>
        <div>
          <h3>linkedin</h3>
          < a href="https://www.linkedin.com/in/rafael-nunes-a945501aa/">Linkedin</a>
        </div>
        </div>

        <div className="info-card">
        <AiFillGithub id="github-icon"/>
        <div>
          <h3>github</h3>
          < a href="https://github.com/rafarecem">Github</a>
        </div>
        </div>
              
    </section>
  );
};

export default InformationContainer;