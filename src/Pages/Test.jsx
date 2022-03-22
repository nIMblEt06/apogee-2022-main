import CountdownSlate from "../Components/CountdownSlate/CountdownSlate.js";
import MainHero from "../Components/MainHero/MainHero.jsx";
import NavBar from "../Components/Navbar/Navbar.jsx";
import SocialsHero from "../Components/SocialsHero/SocialsHero.js";
import EventContainer from "../Components/EventContainer/EventContainer.jsx";
import "../stylesheets/final.css";

function Test() {
  return (
    <div className="testWrapper">
      <NavBar />
      <MainHero />
      <SocialsHero />
      <CountdownSlate />
      <div style={{ background: "white", zIndex: "15" }}>
        <div className="background">
          {/* <div className="gridVertical">
                    
                </div> */}
          <EventContainer
            className="kernelEvents"
            heading="KERNEL events"
            type="kernel"
            api="https://bits-apogee.org/registrations/kernel_events/"
          />
        </div>
      </div>
    </div>
  );
}
export default Test;
