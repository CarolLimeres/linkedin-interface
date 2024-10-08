import { MainContainer } from "./styles";
import userImage from "../../../public/profile.jpg";
import image from "../../../public/pokemon.jpg";
import { Image } from "phosphor-react";
import { CalendarPlus } from "phosphor-react";
import { Article } from "phosphor-react";
import { CaretDown } from "phosphor-react";

import { Post } from "../Post";

const arrayLinks = [
  "#pokemoncareers",
  "#catchacareer",
  "#pokemon",
  "#WeChooseYou",
];

export function Main() {
  return (
    <MainContainer>
      <div className="user-container">
        <div className="background-container"></div>

        <img src={userImage} alt="" className="image-media-container" />
        <div className="name-office-container">
          <div className="name-container">
            <a href="">Carolina dos Santos Limeres</a>
          </div>
          <div className="office-container">Front-End Developer</div>
        </div>
      </div>
      <div className="show-more-container">
        <button className="show-more-button">
          <span>Exibir mais</span>
          <CaretDown size={20} weight="bold"></CaretDown>
        </button>
      </div>
      <div className="new-post-container">
        <div className="image-button-container">
          <img src={userImage} alt="" className="image-container" />
          <button className="post-button">Comece uma publicação</button>
        </div>
        <div className="media-event-article-container">
          <a href="" className="media-container">
            <Image size={24} weight="bold" className="media-icon"></Image>
            <span>Mídia</span>
          </a>
          <a href="" className="event-container">
            <CalendarPlus
              size={24}
              weight="bold"
              className="event-icon"
            ></CalendarPlus>
            <span>Evento</span>
          </a>
          <a href="" className="article-container">
            <Article size={24} weight="bold" className="article-icon"></Article>
            <span>Escrever artigo</span>
          </a>
        </div>
      </div>
      <div className="select-most-container">
        <hr className="border" />

        <span className="select-viewing">Selecionar visualização do feed:</span>
        <div className="most-relevant-container">
          <span className="most-relevant">
            Mais relevantes primeiro{" "}
            <CaretDown size={14} weight="fill"></CaretDown>
          </span>
        </div>
      </div>

      <div className="post-container">
        <Post
          userphoto={userImage}
          username="Carolina Limeres"
          position="Front-End Developer"
          time={20}
          text="I'm so beyond excited to announce that I'm starting a new role as an Front-End Developer at The Pokémon Company International this month! "
          links={arrayLinks}
          image={image}
          likes={50}
          comments={10}
          shares={2}
        ></Post>
      </div>
    </MainContainer>
  );
}
