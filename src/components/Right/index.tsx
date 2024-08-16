import { RightContainer } from "./styles";
import { Info } from "phosphor-react";
import { CaretDown } from "phosphor-react";
import { DotsThree } from "phosphor-react";
import { Key } from "phosphor-react";
import queens from "../../../public/queens.svg";
import profileImage from "../../../public/profile.jpg";
import linkedinlogo from "../../../public/linkedinlogo.svg";

export function Right() {
  return (
    <RightContainer>
      <div className="linkedin-news-container">
        <div className="title-icon-container">
          <h2 className="linkedin-news-title">LinkedIn Notícias</h2>
          <button className="info-container">
            <Info size={18} weight="fill"></Info>
          </button>
        </div>
        <h3 className="main-stories">Principais stories</h3>
        <div className="story-container">
          <a href="">
            <span className="story-title">US considers breaking up Google</span>
            <div className="time-readers-container">
              <span className="time">há 45 min</span>
              <span className="ball-icon"> • </span>
              <span className="readers">7.651 leitores</span>
            </div>
          </a>
        </div>
        <div className="story-container">
          <a href="">
            <span className="story-title">Inside Starbucks' CEO shakeup</span>
            <div className="time-readers-container">
              <span className="time">há 30 min</span>
              <span className="ball-icon"> • </span>
              <span className="readers">6.926 leitores</span>
            </div>
          </a>
        </div>
        <div className="story-container">
          <a href="">
            <span className="story-title">
              Annual inflation lowest since '21
            </span>
            <div className="time-readers-container">
              <span className="time">há 46 min</span>
              <span className="ball-icon"> • </span>
              <span className="readers">3.557 leitores</span>
            </div>
          </a>
        </div>
        <div className="story-container">
          <a href="">
            <span className="story-title">
              Mars in $36B deal for Eggo maker
            </span>
            <div className="time-readers-container">
              <span className="time">há 45 min</span>
              <span className="ball-icon"> • </span>
              <span className="readers">3.555 leitores</span>
            </div>
          </a>
        </div>
        <div className="story-container">
          <a href="">
            <span className="story-title">Millenials are finally doing OK</span>
            <div className="time-readers-container">
              <span className="time">há 54 min</span>
              <span className="ball-icon"> • </span>
              <span className="readers">2.424 leitores</span>
            </div>
          </a>
        </div>
        <div className="show-more-container">
          <button className="show-more-button">
            <span>Exibir mais</span>
            <CaretDown size={18} weight="bold"></CaretDown>
          </button>
        </div>
        <div className="games-container">
          <h3 className="games-title">Jogos de hoje</h3>
          <a href="" className="game-link">
            <div className="image-game-container">
              <img src={queens} alt="" className="game-image" />
              <div className="text-number-container">
                <p className="queens">
                  Queens
                  <span className="number"> #108</span>
                </p>
                <div className="crown-container">
                  <span>Coroar cada região</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="announcement-container">
        <a href="">
          <div className="announcement">
            <span className="annoucement-title">Anúncio</span>
            <DotsThree size={20} weight="bold"></DotsThree>
          </div>
          <div className="unlock-container">
            Carolina, unlock your full potential with LinkedIn Premium
          </div>
          <div className="image-key-container">
            <img src={profileImage} alt="" className="profile-image" />
            <Key size={70} weight="duotone" className="key-icon"></Key>
          </div>
          <div className="viewed-container">
            See who's viewed your profile in the last 90 days
          </div>
          <div className="try-container">
            <a href="" className="try-link">
              Try for Free
            </a>
          </div>
        </a>
      </div>
      <div className="footer-container">
        <div className="about-accessibility-help-container">
          <div className="link-footer">
            <a href="">
              <span>Sobre</span>
            </a>
          </div>
          <div className="link-footer">
            <a href="">
              <span>Acessibilidade</span>
            </a>
          </div>
          <div className="link-footer">
            <a href="">
              <span>Central de Ajuda</span>
            </a>
          </div>
        </div>
        <div className="privacy-container">
          <a href="" className="privacy">
            <span>Termos e Privacidade</span>
            <CaretDown size={12} weight="fill"></CaretDown>
          </a>
        </div>
        <div className="preferences-advertising-container">
          <div className="link-footer">
            <a href="">
              <span>Preferências de anúncios</span>
            </a>
          </div>
          <div className="link-footer">
            <a href="">
              <span>Publicidade</span>
            </a>
          </div>
        </div>
        <div className="services-container">
          <a href="" className="services">
            <span>Serviços empresariais</span>
            <CaretDown size={12} weight="fill"></CaretDown>
          </a>
        </div>
        <div className="download-more-container">
          <div className="link-footer">
            <a href="">
              <span>Baixe o aplicativo do LinkedIn</span>
            </a>
          </div>
          <div className="link-footer">
            <a href="">
              <span>Mais</span>
            </a>
          </div>
        </div>
        <div className="linkedin-corporation-container">
          <img src={linkedinlogo} alt="" className="linkedin-logo" />
          <span className="linkedin-corporation">
            LinkedIn Corporation © 2024
          </span>
        </div>
      </div>
    </RightContainer>
  );
}
