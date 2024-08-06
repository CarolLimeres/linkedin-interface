import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Menu } from "./components/Menu";
import { Right } from "./components/Right";

export function App() {
  return (
    <>
      <div className="header-container">
        <Header></Header>
      </div>
      <div className="flex-container">
        <div className="grid-container">
          <div className="menu-container">
            <Menu></Menu>
          </div>
          <div className="main-container">
            <Main></Main>
          </div>
          <div className="right-container">
            <Right></Right>
          </div>
        </div>
      </div>
    </>
  );
}
