import "./RightSidebar.css";
import { useState } from "react";
import { UserSuggestionSection } from "../UserSuggestionSection/UserSuggestionSection";
import { SearchModal } from "../SearchModal/SearchModal";
import { useSelector } from "react-redux";
const RightSidebar = () => {
  const [searchInput, setSearchInput] = useState("");
  const users = useSelector((state) => state.user.users);

  const userList = [];

  for (let i = 0; i < users?.length; i++) {
    if (users[i].fullName.toLowerCase().includes(searchInput.toLowerCase())) {
      userList.push({ ...users[i] });
    }
  }

  console.log(userList);

  return (
    <div className="right-aside-section bord-3-green">
      <div className="fixed-right-aside-section bord-3-blue">
        <div className="flex-col bord-3-red gap-2">
          <div className="bord-3-yellow flex-row relative">
            <input
              className="flex-grow-1 search-bar-input"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            {searchInput.trim() !== "" && <SearchModal userList={userList} />}
          </div>
          <UserSuggestionSection />
        </div>
      </div>
    </div>
  );
};

export { RightSidebar };
