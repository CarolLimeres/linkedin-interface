import { MainContainer } from "./styles";
import userImage from "../../../public/profile.jpg";
import { Image } from "phosphor-react";
import { CalendarPlus } from "phosphor-react";
import { Article } from "phosphor-react";

export function Main() {
  return (
    <MainContainer>
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
      <div className="posts-container">TESTE DOS POSTS</div>
    </MainContainer>
  );
}
