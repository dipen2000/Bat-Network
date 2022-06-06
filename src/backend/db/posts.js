import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "the_dark_knight",
    fullName: "BATMAN",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "first_robin",
    fullName: "Nightwing",
    createdAt: "2021-05-10",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment:
          "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis ",
        fullName: "BATMAN",
        username: "the_dark_knight",
        profileAvatar:
          "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg?itok=u4BHrDeE",
        createdAt: "2021-05-10",
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          fullName: "Alfred",
          username: "wayne_family_butler",
          profileAvatar:
            "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_AlfredPennyworth_5c40ddc7b0e412.20200112.jpg?itok=tVwKTrvd",
        },
        {
          _id: uuid(),
          fullName: "BATMAN",
          username: "the_dark_knight",
          profileAvatar:
            "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg?itok=u4BHrDeE",
        },
      ],
      dislikedBy: [],
    },
    username: "the_cat",
    fullName: "Catwoman",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "wayne_family_butler",
    fullName: "Alfred",
    createdAt: "2021-05-03",
    updatedAt: formatDate(),
    comments: [],
  },
  // {
  //   _id: uuid(),
  //   content:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
  //   likes: {
  //     likeCount: 2,
  //     likedBy: [
  //       {
  //         _id: uuid(),
  //         fullName: "Alfred",
  //         username: "wayne_family_butler",
  //         profileAvatar:
  //           "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_AlfredPennyworth_5c40ddc7b0e412.20200112.jpg?itok=tVwKTrvd",
  //       },
  //       {
  //         _id: uuid(),
  //         fullName: "Nightwing",
  //         username: "first_robin",
  //         profileAvatar:
  //           "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Nightwing_2_5c50fa38094336.37015575.jpg?itok=elLGTA2E",
  //       },
  //     ],
  //     dislikedBy: [],
  //   },
  //   username: "the_dark_knight",
  //   fullName: "BATMAN",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  //   comments: [
  //     {
  //       _id: uuid(),
  //       comment:
  //         "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
  //       fullName: "Nightwing",
  //       username: "first_robin",
  //       profileAvatar:
  //         "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Nightwing_2_5c50fa38094336.37015575.jpg?itok=elLGTA2E",
  //       createdAt: formatDate(),
  //       updatedAt: formatDate(),
  //       votes: {
  //         upvotedBy: [],
  //         downvotedBy: [],
  //       },
  //     },
  //   ],
  // },
  // {
  //   _id: uuid(),
  //   content:
  //     "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  //   likes: {
  //     likeCount: 1,
  //     likedBy: [
  //       {
  //         _id: uuid(),
  //         fullName: "BATMAN",
  //         username: "the_dark_knight",
  //         profileAvatar:
  //           "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg?itok=u4BHrDeE",
  //       },
  //     ],
  //     dislikedBy: [],
  //   },
  //   username: "first_robin",
  //   fullName: "Nightwing",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  //   comments: [
  //     {
  //       _id: uuid(),
  //       comment:
  //         "eveniet ut et voluptates repudiandae sint et molestiae non recusandae. ",
  //       username: "the_cat",
  //       fullName: "Catwoman",
  //       profileAvatar:
  //         "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Catwoman_5c47c984ed1d66.81377433.jpg?itok=yHAKRa64",
  //       createdAt: formatDate(),
  //       updatedAt: formatDate(),
  //       votes: {
  //         upvotedBy: [],
  //         downvotedBy: [],
  //       },
  //     },
  //   ],
  // },
  // {
  //   _id: uuid(),
  //   content:
  //     "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint ",
  //   likes: {
  //     likeCount: 3,
  //     likedBy: [
  //       {
  //         _id: uuid(),
  //         fullName: "BATMAN",
  //         username: "the_dark_knight",
  //         profileAvatar:
  //           "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg?itok=u4BHrDeE",
  //       },
  //       {
  //         _id: uuid(),
  //         fullName: "Nightwing",
  //         username: "first_robin",
  //         profileAvatar:
  //           "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Nightwing_2_5c50fa38094336.37015575.jpg?itok=elLGTA2E",
  //       },
  //       {
  //         _id: uuid(),
  //         fullName: "Catwoman",
  //         username: "the_cat",
  //         profileAvatar:
  //           "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Catwoman_5c47c984ed1d66.81377433.jpg?itok=yHAKRa64",
  //       },
  //     ],
  //     dislikedBy: [],
  //   },
  //   username: "wayne_family_butler",
  //   fullName: "Alfred",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  //   comments: [],
  // },
  // {
  //   _id: uuid(),
  //   content:
  //     "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   username: "the_cat",
  //   fullName: "Catwoman",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  //   comments: [
  //     {
  //       _id: uuid(),
  //       comment:
  //         "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint ",
  //       username: "the_dark_knight",
  //       fullName: "BATMAN",
  //       profileAvatar:
  //         "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg?itok=u4BHrDeE",
  //       createdAt: formatDate(),
  //       updatedAt: formatDate(),
  //       votes: {
  //         upvotedBy: [],
  //         downvotedBy: [],
  //       },
  //     },
  //     {
  //       _id: uuid(),
  //       comment:
  //         "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  //       fullName: "Alfred",
  //       username: "wayne_family_butler",
  //       profileAvatar:
  //         "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_AlfredPennyworth_5c40ddc7b0e412.20200112.jpg?itok=tVwKTrvd",
  //       createdAt: formatDate(),
  //       updatedAt: formatDate(),
  //       votes: {
  //         upvotedBy: [],
  //         downvotedBy: [],
  //       },
  //     },
  //   ],
  // },
];
