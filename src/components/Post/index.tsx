import { PostContainer } from "./styles";

import { GlobeHemisphereWest } from "phosphor-react";
import { ThumbsUp } from "phosphor-react";
import { Heart } from "phosphor-react";
import { ChatCircleText } from "phosphor-react";
import { Share } from "phosphor-react";
import { PaperPlaneTilt } from "phosphor-react";
import { DotsThree } from "phosphor-react";
import { X } from "phosphor-react";

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
            <img src={`/public/${userphoto}`} alt="" className="userphoto" />
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
        <img src={`/public/${image}`} alt="" className="post-image" />
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
          <span>Gostei</span>
        </button>
        <button className="tocomment-container">
          <ChatCircleText size={24} className="tocomment-icon"></ChatCircleText>
          <span>Comentar</span>
        </button>
        <button className="toshare-container">
          <Share size={24} className="toshare-icon"></Share>
          <span>Compartilhar</span>
        </button>
        <button className="tosend-container">
          <PaperPlaneTilt
            size={24}
            weight="fill"
            className="tosend-icon"
          ></PaperPlaneTilt>
          <span>Enviar</span>
        </button>
      </div>
    </PostContainer>
  );
}
