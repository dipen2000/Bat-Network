import "./SortBar.css";
const SortBar = () => {
  return (
    <div className="bord-3-green sortbar-container flex-row">
      <div className="bord-3-green curs-point flex-row align-center-flex justify-center-flex sort-category">
        Latest
      </div>
      <div className="bord-3-green curs-point flex-row align-center-flex justify-center-flex sort-category">
        Oldest
      </div>
    </div>
  );
};

export { SortBar };
