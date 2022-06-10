import { useSelector } from "react-redux";
const getSuggestedUsers = () => {
  const users = useSelector((state) => state.user.users);
  const user = useSelector((state) => state.auth.user);
  const loggedInUser = users?.find(
    (dbUser) => dbUser.username === user.username
  );

  const arrWithOutLoggedInUser = users?.filter(
    (userObj) => userObj.username !== loggedInUser.username
  );

  const usersToFollowArr = arrWithOutLoggedInUser?.filter(
    (userObj) =>
      !loggedInUser?.following.find(
        (item) => item.username === userObj.username
      )
  );

  return usersToFollowArr;
};

export { getSuggestedUsers };
