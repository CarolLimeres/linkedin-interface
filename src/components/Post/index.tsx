import { PostContainer } from "./styles";

import { CaretDown, GlobeHemisphereWest } from "phosphor-react";
import { ThumbsUp } from "phosphor-react";
import { Heart } from "phosphor-react";
import { ChatCircleText } from "phosphor-react";
import { Share } from "phosphor-react";
import { PaperPlaneTilt } from "phosphor-react";
import { DotsThree } from "phosphor-react";
import { X } from "phosphor-react";
import { Smiley } from "phosphor-react";
import { Image } from "phosphor-react";
import { Comment } from "../Comment";

import userphotocomment from "../../../public/usercomment.jpg";

interface PostProps {
  userphoto: string;
  username: string;
  position: string;
  time: number;
  text: string;
  links: string[];
  image: string;
  likes: number;
  comments: number;
  shares: number;
}

export function Post({
  userphoto,
  username,
  position,
  time,
  text,
  links,
  image,
  likes,
  comments,
  shares,
}: PostProps) {
  return (
    <PostContainer>
      <div className="user-options-container">
        <div className="userphoto-username-container">
          <a href="/" className="userphoto-link">
            <img src={userphoto} alt="" className="userphoto" />
          </a>
          <div className="username-position-time-container">
            <a href="/" className="username-link">
              <span className="username">{username}</span>
            </a>
            <span className="position">{position}</span>
            <div className="time-globe-container">
              <span className="time">{time} min</span>
              <span className="ball">•</span>
              <GlobeHemisphereWest
                size={16}
                weight="fill"
                className="globe-logo"
              ></GlobeHemisphereWest>
            </div>
          </div>
        </div>
        <div className="options-container">
          <div>
            <button className="dots-container">
              <DotsThree
                size={22}
                weight="bold"
                className="dots-icon"
              ></DotsThree>
            </button>
          </div>
          <div>
            <button className="x-container">
              <X size={18} weight="bold" className="x-icon"></X>
            </button>
          </div>
        </div>
      </div>
      <div className="text-container">
        <p className="text">
          {text}
          <div className="links-container">
            {links.map((link, index) => (
              <a href="/" key={index} className="link">
                {link}
              </a>
            ))}
          </div>
        </p>
        <div className="view-translation-container">
          <button className="view-translation">Visualizar tradução</button>
        </div>
      </div>

      <div className="post-image-container">
        <img src={image} alt="" className="post-image" />
      </div>

      <div className="likes-comments-shares-container">
        <button className="likes-container">
          <div className="icons-container">
            <ThumbsUp
              size={16}
              weight="fill"
              className="thumbsup-icon"
            ></ThumbsUp>
            <Heart size={16} weight="fill" className="heart-icon"></Heart>
          </div>
          <span className="likes">{likes}</span>
        </button>
        <div className="comments-shares-container">
          <button className="comments-container">
            <span>{comments} comentários</span>
          </button>
          <span className="ball">•</span>
          <button className="shares-container">
            <span>{shares} compartilhamentos</span>
          </button>
        </div>
      </div>
      <div className="tolike-tocomment-toshare-container">
        <button className="tolike-container">
          <ThumbsUp size={24} className="tolike-icon"></ThumbsUp>
          <span className="options-post-text">Gostei</span>
        </button>
        <button className="tocomment-container">
          <ChatCircleText size={24} className="tocomment-icon"></ChatCircleText>
          <span className="options-post-text">Comentar</span>
        </button>
        <button className="toshare-container">
          <Share size={24} className="toshare-icon"></Share>
          <span className="options-post-text">Compartilhar</span>
        </button>
        <button className="tosend-container">
          <PaperPlaneTilt
            size={24}
            weight="fill"
            className="tosend-icon"
          ></PaperPlaneTilt>
          <span className="options-post-text">Enviar</span>
        </button>
      </div>
      <div className="add-comment-container">
        <div className="userphoto-container">
          <img src={userphoto} alt="" className="userphoto-addcomment" />
        </div>
        <form action="" className="form-comment">
          <div className="input-comment-container">
            <input
              type="text"
              placeholder="Adicionar comentário"
              className="input-comment"
            />
            <button className="smiley-comment-icon">
              <Smiley size={24}></Smiley>
            </button>
            <button className="media-comment-icon">
              <Image size={24} weight="fill"></Image>
            </button>
          </div>
        </form>
      </div>
      <div className="comments-post-container">
        <div className="more-relevant-container">
          <button className="more-relevant-button">
            <span>Mais relevantes</span>
            <CaretDown size={14} weight="fill"></CaretDown>
          </button>
        </div>
        <Comment
          userphotocomment={userphotocomment}
          usernamecomment="Maurício Mendes Rossi"
          userpositioncomment="Front-End Developer at Critical TechWorks | BMW Group"
          commenttime={2}
          commenttext="Parabéns pela conquista!😊"
          commentlikes={2}
        ></Comment>
      </div>
    </PostContainer>
  );
}
