const sortPostsByFilter = (posts, sortBy) => {
  switch (sortBy) {
    case "Oldest":
      return [...posts].sort(
        (a, b) => new Date(b?.createdAt) - new Date(a?.createdAt)
      );
    case "Latest":
      return [...posts].sort(
        (a, b) => new Date(a?.createdAt) - new Date(b?.createdAt)
      );
    case "Trending":
      return [...posts].sort((a, b) => a?.likes.likeCount - b?.likes.likeCount);
    default:
      return posts;
  }
};

export { sortPostsByFilter };
