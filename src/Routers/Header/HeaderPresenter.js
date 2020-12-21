import LogoBlock from "Components/Header/LogoBlock";
import NavBar from "Components/Header/NavBar";
import TopBar from "Components/Header/TopBar";

const HeaderPresenter = ({ fixNav }) => (
  <>
    <TopBar />
    <LogoBlock />
    <NavBar fixNav={fixNav} />
  </>
);

export default HeaderPresenter;
