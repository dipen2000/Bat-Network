import "./Explore.css";
import { BatNetworkContainer } from "../../Components/Wrapper/BatNetworkContainer";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
const Explore = () => {
  return (
    <BatNetworkContainer>
      <div className="home-grid-container bord-3-purple">
        <Sidebar />
        <div className="bord-3-red">Explore</div>
        <RightSidebar />
      </div>
    </BatNetworkContainer>
  );
};

export { Explore };
