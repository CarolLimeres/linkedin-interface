import { BackgroundContainer, MenuContainer } from "./styles";
import userImage from "../../../public/profile.jpg";
import background from "../../../public/background.jpg";
import premium from "../../../public/premium.svg";
import { BookmarkSimple } from "phosphor-react";
import { Plus } from "phosphor-react";

export function Menu() {
  return (
    <MenuContainer>
      <div className="user-container">
        {/* <div className="background-container"></div> */}
        <BackgroundContainer image={background}></BackgroundContainer>

        <img src={userImage} alt="" className="image-container" />
        <div className="name-office-container">
          <div className="name-container">
            <a href="">Carolina dos Santos Limeres</a>
          </div>
          <div className="office-container">Front-End Developer</div>
        </div>
        <div className="views-connections-container">
          <a href="" className="views-container">
            <span className="views">Visualizações do perfil</span>
            <span className="number-container">16</span>
          </a>
          <div className="connections-container">
            <div className="connections-network-container">
              <span className="connections">Conexões</span>
              <span className="network">Amplie sua rede</span>
            </div>
            <span className="number-container">49</span>
          </div>
        </div>

        <div className="premium-container">
          <a href="" className="premium-link-container">
            <p className="leads">Encontre leads de mais qualidade</p>
            <div className="text-icon-container">
              <img src={premium} alt="" className="premium-image" />
              <span className="premium-text">
                Experimente o Sales Navigator por EUR0
              </span>
            </div>
          </a>
        </div>
        <a href="" className="saved-container">
          <BookmarkSimple
            size={16}
            weight="fill"
            className="saved-icon"
          ></BookmarkSimple>
          <span className="saved-text">Itens salvos</span>
        </a>
      </div>
      <div className="options-container">
        <div className="list-container">
          <div className="groups-container">
            <a href="">Grupos</a>
          </div>
          <div className="events-container">
            <a href="" className="events">
              Eventos
            </a>
            <a href="" className="plus-icon-container">
              <Plus size={16} weight="bold" className="plus-icon"></Plus>
            </a>
          </div>
          <div className="hashtags-container">
            <a href="">Hashtags seguidas</a>
          </div>
        </div>
        <div className="find-more-container">
          <a>Descubra mais</a>
        </div>
      </div>
    </MenuContainer>
  );
}
