import FooterC from "../components/FooterComp";
import Guests from "../components/Guests";
import HomeEvents from "../components/HomeEvents";
import Landing from "../components/Landing";
import Header from "./Header";
const Home = ({settingmenu}) => {
  return (
    <>
      <Header settingmenu={settingmenu} />
      <Landing />
      <Guests />
      <HomeEvents />
      <FooterC/>
    </>
  );
};

export default Home;
