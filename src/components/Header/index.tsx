import { HeaderContainer } from "./styles";
import { LinkedinLogo } from "phosphor-react";
import { MagnifyingGlass } from "phosphor-react";
import { HouseLine } from "phosphor-react";
import { Users } from "phosphor-react";
import { Bag } from "phosphor-react";
import { ChatCircleDots } from "phosphor-react";
import { Bell } from "phosphor-react";
import { CaretDown } from "phosphor-react";
import { Gradient } from "phosphor-react";
import { DotsThree } from "phosphor-react";
import profileImage from "../../../public/profile.jpg";

export function Header() {
  return (
    <HeaderContainer>
      <div className="logo-search-container">
        <a href="" className="link-logo-container">
          <LinkedinLogo
            size={45}
            weight="fill"
            className="linkedin-logo"
          ></LinkedinLogo>
        </a>
        <div className="search-container">
          <MagnifyingGlass
            size={16}
            weight="bold"
            className="search-icon"
          ></MagnifyingGlass>

          <input type="text" placeholder="Pesquisar" className="input-search" />
        </div>
      </div>

      <div className="options-container">
        <div className="search-media-container">
          <button className="link-container">
            <MagnifyingGlass
              size={24}
              weight="bold"
              className="icon"
            ></MagnifyingGlass>
            <p className="text-container">Pesquisar</p>
          </button>
        </div>
        <div className="icon-text-container">
          <a href="" className="link-container">
            <HouseLine size={24} weight="fill" className="icon"></HouseLine>
            <p className="text-container">Início</p>
          </a>
        </div>
        <div className="icon-text-container">
          <a href="" className="link-container">
            <Users size={24} weight="fill" className="icon"></Users>
            <p className="text-container">Minha rede</p>
          </a>
        </div>
        <div className="icon-text-container">
          <a href="" className="link-container">
            <Bag size={24} weight="fill" className="icon"></Bag>
            <p className="text-container">Vagas</p>
          </a>
        </div>
        <div className="icon-text-container messages-container">
          <a href="" className="link-container">
            <ChatCircleDots
              size={24}
              weight="fill"
              className="icon"
            ></ChatCircleDots>
            <p className="text-container">Mensagens</p>
          </a>
        </div>
        <div className="icon-text-container notifications-container">
          <a href="" className="link-container">
            <Bell size={24} weight="fill" className="icon"></Bell>
            <p className="text-container">Notificações</p>
          </a>
        </div>

        <div className="photo-text-container">
          <img src={profileImage} alt="" className="profile-image" />
          <div className="text-arrow-container">
            <p className="me-text">Eu</p>
            <CaretDown weight="fill"></CaretDown>
          </div>
        </div>
      </div>
      <div className="business-premium-container">
        <div className="button-options-media-container">
          <button>
            <DotsThree size={30} weight="bold" className="icon"></DotsThree>
          </button>
        </div>
        <div className="business-container">
          <Gradient
            size={28}
            weight="fill"
            className="gradient-icon"
          ></Gradient>
          <div className="text-arrow-container">
            <p className="business-text">Para negócios</p>
            <CaretDown weight="fill"></CaretDown>
          </div>
        </div>
        <div className="premium-container">
          Aproveite o Sales Navigator por apenas EUR0
        </div>
      </div>
    </HeaderContainer>
  );
}
