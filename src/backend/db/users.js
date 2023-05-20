import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    fullName: "BATMAN",
    username: "the_dark_knight",
    password: "batman123",
    bio: "The silent guardian , The watchful protector and The Dark Knight of GOTHAM.",
    website: "https://bit.ly/3GWXnco",
    profileAvatar:
      "https://static.dc.com/dc/files/default_images/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Nightwing",
        username: "first_robin",
        profileAvatar:
          "https://static.dc.com/dc/files/default_images/Char_Profile_Nightwing_2_5c50fa38094336.37015575.jpg",
      },
      {
        _id: uuid(),
        fullName: "Alfred",
        username: "pennyworth",
        profileAvatar:
          "https://static.dc.com/dc/files/default_images/Char_Profile_AlfredPennyworth_5c40ddc7b0e412.20200112.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Catwoman",
        username: "the_cat",
        profileAvatar:
          "https://static.dc.com/dc/files/default_images/Char_Profile_Catwoman_5c47c984ed1d66.81377433.jpg",
      },
      {
        _id: uuid(),
        fullName: "Nightwing",
        username: "first_robin",
        profileAvatar:
          "https://static.dc.com/dc/files/default_images/Char_Profile_Nightwing_2_5c50fa38094336.37015575.jpg",
      },
      {
        _id: uuid(),
        fullName: "Alfred",
        username: "pennyworth",
        profileAvatar:
          "https://static.dc.com/dc/files/default_images/Char_Profile_AlfredPennyworth_5c40ddc7b0e412.20200112.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    fullName: "Nightwing",
    username: "first_robin",
    password: "nightwing123",
    bio: "The first Robin and the protector of Bludhaven.",
    website: "https://bit.ly/3NVkGph",
    profileAvatar:
      "https://static.dc.com/dc/files/default_images/Char_Profile_Nightwing_2_5c50fa38094336.37015575.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "BATMAN",
        username: "the_dark_knight",
        profileAvatar:
          "https://static.dc.com/dc/files/default_images/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg",
      },
      {
        _id: uuid(),
        fullName: "Alfred",
        username: "pennyworth",
        profileAvatar:
          "https://static.dc.com/dc/files/default_images/Char_Profile_AlfredPennyworth_5c40ddc7b0e412.20200112.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "BATMAN",
        username: "the_dark_knight",
        profileAvatar:
          "https://static.dc.com/dc/files/default_images/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    fullName: "Alfred",
    username: "pennyworth",
    password: "alfred123",
    bio: "The Wayne family butler.",
    website: "https://bit.ly/3O11eY3",
    profileAvatar:
      "https://static.dc.com/dc/files/default_images/Char_Profile_AlfredPennyworth_5c40ddc7b0e412.20200112.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "BATMAN",
        username: "the_dark_knight",
        profileAvatar:
          "https://static.dc.com/dc/files/default_images/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg",
      },
      {
        _id: uuid(),
        fullName: "Nightwing",
        username: "first_robin",
        profileAvatar:
          "https://static.dc.com/dc/files/default_images/Char_Profile_Nightwing_2_5c50fa38094336.37015575.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "BATMAN",
        username: "the_dark_knight",
        profileAvatar:
          "https://static.dc.com/dc/files/default_images/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    fullName: "Catwoman",
    username: "the_cat",
    password: "batAndcat",
    bio: "Cat 💓 Bat",
    website: "https://bit.ly/3ztf9SG",
    profileAvatar:
      "https://static.dc.com/dc/files/default_images/Char_Profile_Catwoman_5c47c984ed1d66.81377433.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "BATMAN",
        username: "the_dark_knight",
        profileAvatar:
          "https://static.dc.com/dc/files/default_images/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg",
      },
    ],
    followers: [],
  },
];
