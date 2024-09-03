import MainBackgroundImage from "./components/layout/MainBackgroundImage";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Logo from "./components/header/Logo";
import logo from "./assets/img/logo.png";
import profileImg from "./assets/img/avatar-7.png";
import HeaderTabs from "./components/header/HeaderTabs";
import { TABSDATA } from "./utils/constant";
import Profile from "./components/header/profile";
import Sidebar from "./components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const RootApp = () => {
  return (
    <>
      <MainBackgroundImage
        children={
          <Layout
            header={
              <Header
                logo={<Logo src={logo} />}
                tabs={<HeaderTabs tabsData={TABSDATA} />}
                profile={<Profile src={profileImg} />}
              />
            }
            navbar={<Sidebar />}
            main={<Outlet/>}
          />
        }
      />
    </>
  );
};

export default RootApp;
