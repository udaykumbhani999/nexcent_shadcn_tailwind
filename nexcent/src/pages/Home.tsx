import Hero from "@/components/manual/Hero/Hero";
import Client from "@/components/manual/Client/Client";
import Community from "@/components/manual/Community/Community";
import Unlock from "@/components/manual/Unlock/Unlock";
import Achievement from "@/components/manual/Achievement/Achievement";
import Calender from "@/components/manual/Calender/Calender";
import Customer from "@/components/manual/Customer/Customer";
import Marketing from "@/components/manual/Marketing/Marketing";
import Footerframe from "@/components/manual/Footerframe/Footerframe";

const Home = () => {
  return (
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
      </div>
    </main>
  );
};

export default Home;
