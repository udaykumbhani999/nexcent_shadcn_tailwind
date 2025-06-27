import "./App.css";
import Header from "./components/manual/header/Header";
import Hero from "./components/manual/Hero/Hero";
import Client from "./components/manual/Client/Client";
import Unlock from "./components/manual/Unlock/Unlock";
import Calender from "./components/manual/Calender/Calender";
import Achievement from "./components/manual/Achievement/Achievement";
import Community from "./components/manual/Community/Community";
import Customer from "./components/manual/Customer/Customer";
import Marketing from "./components/manual/Marketing/Marketing";
import Footerframe from "./components/manual/Footerframe/Footerframe";
import Footer from "./components/manual/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="bg-grey">
          <div className="container">
            <Hero />
          </div>
          <div className="bg-white pb-8 lg:pb-12">
            <div className="container">
              <Client />
              <Community />
              <Unlock />
            </div>
          </div>

          <div className="bg-grey">
            <div className="container">
              <Achievement />
            </div>
          </div>
          <div className="bg-white pb-8 lg:pb-12">
            <div className="container">
              <Calender />
            </div>
          </div>
          <div className="bg-grey">
            <div className="container">
              <Customer />
            </div>
          </div>
          <div className="bg-white">
            <div className="container">
              <Marketing />
            </div>
          </div>
          <div className="bg-grey">
            <div className="container">
              <Footerframe />
            </div>
          </div>
          <div className="bg-light-black">
            <div className="container">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
