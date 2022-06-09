import "./SortModal.css";
import { useSelector } from "react-redux";
const SortModal = () => {
  const activeSort = useSelector((state) => state.post.activeSort);
  const activeSortStyle = {
    color: "blue",
  };

  return (
    <div className="absolute sort-options-modal-container">
      <div className="flex-col">
        <div
          style={activeSort === "Trending" ? activeSortStyle : null}
          className="flex-row align-center-flex gap-z-5 sort-modal-small-fonts curs-point sort-single-option"
        >
          <i className="fa-solid fa-arrow-trend-up"></i>
          <span>Trending</span>
        </div>
        <div
          style={activeSort === "Latest" ? activeSortStyle : null}
          className="flex-row align-center-flex gap-z-5 sort-modal-small-fonts curs-point sort-single-option"
        >
          <i className="fa-solid fa-arrow-up"></i>
          <span>Latest</span>
        </div>
        <div
          style={activeSort === "Oldest" ? activeSortStyle : null}
          className="flex-row align-center-flex gap-z-5 sort-modal-small-fonts curs-point sort-single-option"
        >
          <i className="fa-solid fa-arrow-down"></i>
          <span>Oldest</span>
        </div>
      </div>
    </div>
  );
};

export { SortModal };
