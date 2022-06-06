import "./Avatar.css";
const Avatar = ({ avatar, fullName, username }) => {
  return (
    <div className="user-avatar bord-3-yellow">
      <img
        className="img-resp avatar-img"
        src={avatar}
        alt={`${fullName} ${username}`}
      />
    </div>
  );
};

export { Avatar };
