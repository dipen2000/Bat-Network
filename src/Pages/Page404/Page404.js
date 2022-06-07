import "./Page404.css";
import { BatNetworkContainer } from "../../Components/Wrapper/BatNetworkContainer";
const Page404 = () => {
  return (
    <BatNetworkContainer>
      <div className="page404-container flex-col align-center-flex justify-center-flex">
        <h2>Whoops! something went wrong, page not found</h2>
        <h3>Status : 404</h3>
        <h1>🙄</h1>
      </div>
    </BatNetworkContainer>
  );
};

export { Page404 };
