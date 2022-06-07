import "./RightSidebar.css";
import { UserSuggestionSection } from "../UserSuggestionSection/UserSuggestionSection";
const RightSidebar = () => {
  return (
    <div className="right-aside-section bord-3-green">
      <div className="fixed-right-aside-section bord-3-blue">
        <div className="flex-col bord-3-red gap-2">
          <div className="bord-3-yellow">Search bar</div>
          <UserSuggestionSection />
        </div>
      </div>
    </div>
  );
};

export { RightSidebar };
