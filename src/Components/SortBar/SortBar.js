import "./SortBar.css";
import { useState } from "react";
import { SortModal } from "../SortModal/SortModal";
const SortBar = () => {
  const [sortModal, setSortModal] = useState(false);
  return (
    <div className="bord-3-green sortbar-container flex-row align-center-flex justify-space-between-flex">
      <h3>Trending Posts</h3>
      <div className="relative">
        <div
          className="bord-3-red options-icon-container curs-point"
          onClick={(e) => {
            e.stopPropagation();
            setSortModal((prevState) => !prevState);
          }}
        >
          <i className="fa-solid fa-sliders curs-point"></i>
        </div>
        {sortModal && <SortModal />}
      </div>
    </div>
  );
};

export { SortBar };
