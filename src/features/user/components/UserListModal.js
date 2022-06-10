import "../styles.css";
import { Avatar } from "../../../Components/Avatar/Avatar";
const UserListModal = ({ userModal, setUserModal }) => {
  const { title, list } = userModal;
  const resetUserModalState = {
    show: false,
    title: "",
    list: [],
  };
  return (
    <div className="modal-section-overlay flex-col justify-center-flex align-center-flex">
      <div className="follow-modal-container modal-primary-color flex-col">
        {list.length > 0 ? (
          <div className="flex-col gap-1">
            <div className="flex-row align-center-flex justify-space-between-flex">
              <h2>{title}</h2>
              <i
                className="fa-solid fa-xmark modal-cancel-icon curs-point"
                onClick={() => setUserModal(resetUserModalState)}
              ></i>
            </div>
            <div className="flex-col gap-z-5">
              {list.map((item) => {
                return (
                  <div className="flex-row gap-z-5" key={item?._id}>
                    <div className=" flex-row gap-1 justify-center-flex align-center-flex">
                      <Avatar
                        avatar={item?.profileAvatar}
                        username={item?.username}
                        fullName={item?.fullName}
                      />
                      <div className="flex-col user-handle-detail-section">
                        <strong>{item?.fullName}</strong>
                        <span>@{item?.username}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex-row align-center-flex justify-center-flex empty-modal">
              <i
                className="fa-solid fa-xmark modal-cancel-icon curs-point"
                onClick={() => setUserModal(resetUserModalState)}
              ></i>
            </div>
            <div className="flex-col align-center-flex justify-center-flex">
              no {title} found
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { UserListModal };
