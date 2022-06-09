import "./SortModal.css";
import { setActiveSort } from "../../features/post";
import { useSelector, useDispatch } from "react-redux";

const SortModal = () => {
  const dispatch = useDispatch();
  const activeSort = useSelector((state) => state.post.activeSort);
  const activeSortStyle = {
    color: "var(--btn-color)",
  };

  return (
    <div className="absolute sort-options-modal-container modal-primary-color">
      <div className="flex-col">
        <div
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setActiveSort("Trending"));
          }}
          style={activeSort === "Trending" ? activeSortStyle : null}
          className="flex-row align-center-flex gap-z-5 sort-modal-small-fonts curs-point sort-single-option"
        >
          <i className="fa-solid fa-arrow-trend-up"></i>
          <span>Trending</span>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setActiveSort("Latest"));
          }}
          style={activeSort === "Latest" ? activeSortStyle : null}
          className="flex-row align-center-flex gap-z-5 sort-modal-small-fonts curs-point sort-single-option"
        >
          <i className="fa-solid fa-arrow-up"></i>
          <span>Latest</span>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setActiveSort("Oldest"));
          }}
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
