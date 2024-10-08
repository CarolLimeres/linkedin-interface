import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs(MainContainer, { children: [_jsxs("div", { className: "user-container", children: [_jsx("div", { className: "background-container" }), _jsx("img", { src: userImage, alt: "", className: "image-media-container" }), _jsxs("div", { className: "name-office-container", children: [_jsx("div", { className: "name-container", children: _jsx("a", { href: "", children: "Carolina dos Santos Limeres" }) }), _jsx("div", { className: "office-container", children: "Front-End Developer" })] })] }), _jsx("div", { className: "show-more-container", children: _jsxs("button", { className: "show-more-button", children: [_jsx("span", { children: "Exibir mais" }), _jsx(CaretDown, { size: 20, weight: "bold" })] }) }), _jsxs("div", { className: "new-post-container", children: [_jsxs("div", { className: "image-button-container", children: [_jsx("img", { src: userImage, alt: "", className: "image-container" }), _jsx("button", { className: "post-button", children: "Comece uma publica\u00E7\u00E3o" })] }), _jsxs("div", { className: "media-event-article-container", children: [_jsxs("a", { href: "", className: "media-container", children: [_jsx(Image, { size: 24, weight: "bold", className: "media-icon" }), _jsx("span", { children: "M\u00EDdia" })] }), _jsxs("a", { href: "", className: "event-container", children: [_jsx(CalendarPlus, { size: 24, weight: "bold", className: "event-icon" }), _jsx("span", { children: "Evento" })] }), _jsxs("a", { href: "", className: "article-container", children: [_jsx(Article, { size: 24, weight: "bold", className: "article-icon" }), _jsx("span", { children: "Escrever artigo" })] })] })] }), _jsxs("div", { className: "select-most-container", children: [_jsx("hr", { className: "border" }), _jsx("span", { className: "select-viewing", children: "Selecionar visualiza\u00E7\u00E3o do feed:" }), _jsx("div", { className: "most-relevant-container", children: _jsxs("span", { className: "most-relevant", children: ["Mais relevantes primeiro", " ", _jsx(CaretDown, { size: 14, weight: "fill" })] }) })] }), _jsx("div", { className: "post-container", children: _jsx(Post, { userphoto: userImage, username: "Carolina Limeres", position: "Front-End Developer", time: 20, text: "I'm so beyond excited to announce that I'm starting a new role as an Front-End Developer at The Pok\u00E9mon Company International this month! ", links: arrayLinks, image: image, likes: 50, comments: 10, shares: 2 }) })] }));
}
