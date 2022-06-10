import { ButtonPrimary } from "../../../Components/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../userSlice";
import { useState } from "react";
import "../styles.css";
const UserProfileEditModal = ({ setUserProfileModal }) => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const users = useSelector((state) => state.user.users);

  const currentUser = users?.find(
    (dbUser) => dbUser.username === user.username
  );

  const [editInput, setEditInput] = useState(currentUser);

  const editChangeHandler = (e) => {
    const { name, value } = e.target;
    setEditInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const editProfileModalFormHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProfile({ editInput: { ...currentUser, ...editInput }, token })
    );
    setUserProfileModal(false);
  };

  return (
    <div className="modal-section-overlay flex-col align-center-flex justify-center-flex">
      <div className="modal-padding flex-col edit-user-modal-container bord-3-green gap-1">
        <div className="flex-row align-center-flex justify-space-between-flex">
          <h2>Edit profile</h2>
          <i
            className="fa-solid fa-xmark modal-cancel-icon curs-point"
            onClick={() => setUserProfileModal(false)}
          ></i>
        </div>
        <form onSubmit={editProfileModalFormHandler}>
          <div className="flex-col gap-1">
            <div className="flex-row align-center-flex justify-center-flex">
              <div className="edit-user-modal-img-container">
                <img
                  className="img-resp avatar-img"
                  src="https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg?itok=u4BHrDeE"
                  alt="the batman"
                />
              </div>
            </div>
            <div className="flex-col gap-z-5">
              <div className="edit-profile-modal-input-container flex-col">
                <span>Name</span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full-name"
                  onChange={editChangeHandler}
                  value={editInput.fullName}
                />
              </div>
              <div className="edit-profile-modal-input-container flex-col">
                <span>Bio</span>
                <input
                  type="text"
                  name="bio"
                  placeholder="Enter your bio"
                  onChange={editChangeHandler}
                  value={editInput.bio}
                />
              </div>
              <div className="edit-profile-modal-input-container flex-col">
                <span>Website</span>
                <input
                  type="text"
                  name="website"
                  placeholder="Enter your url"
                  onChange={editChangeHandler}
                  value={editInput.website}
                />
              </div>
              <div className="flex-row justify-center-flex">
                <ButtonPrimary disabled={!Boolean(editInput.fullName)}>
                  Save
                </ButtonPrimary>
              </div>
              {!Boolean(editInput.fullName) && (
                <div>The full-name field can't be left empty</div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export { UserProfileEditModal };
