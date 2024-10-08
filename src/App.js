import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Menu } from "./components/Menu";
import { Right } from "./components/Right";
export function App() {
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "header-container", children: _jsx(Header, {}) }), _jsx("div", { className: "flex-container", children: _jsxs("div", { className: "grid-container", children: [_jsx("div", { className: "menu-container", children: _jsx(Menu, {}) }), _jsx("div", { className: "main-container", children: _jsx(Main, {}) }), _jsx("div", { className: "right-container", children: _jsx(Right, {}) })] }) })] }));
}
