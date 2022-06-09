const getLoggedInUserFeed = ({ loggedInUser, posts }) => {
  const loggedInUserFollowingArr = loggedInUser?.following;

  const loggedInUserFeed = [];

  for (let i = 0; i < loggedInUserFollowingArr?.length; i++) {
    for (let j = 0; j < posts.length; j++) {
      console.log();
      if (posts[j]?.username === loggedInUserFollowingArr[i]?.username) {
        loggedInUserFeed.push({ ...posts[j] });
      }
    }
  }

  return loggedInUserFeed;
};

export { getLoggedInUserFeed };
