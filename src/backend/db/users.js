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
    website: "https://www.dccomics.com/characters/batman",
    profileAvatar:
      "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg?itok=u4BHrDeE",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      { _id: uuid(), fullName: "Nightwing", username: "first_robin" },
      { _id: uuid(), fullName: "Alfred", username: "wayne_family_butler" },
    ],
    followers: [
      { _id: uuid(), fullName: "Catwoman", username: "the_cat" },
      { _id: uuid(), fullName: "Nightwing", username: "first_robin" },
      { _id: uuid(), fullName: "Alfred", username: "wayne_family_butler" },
    ],
  },
  {
    _id: uuid(),
    fullName: "Nightwing",
    username: "first_robin",
    password: "nightwing123",
    bio: "The first Robin and the protector of Bludhaven.",
    website: "https://www.dccomics.com/characters/nightwing",
    profileAvatar:
      "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Nightwing_2_5c50fa38094336.37015575.jpg?itok=elLGTA2E",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      { _id: uuid(), fullName: "BATMAN", username: "the_dark_knight" },
      { _id: uuid(), fullName: "Alfred", username: "wayne_family_butler" },
    ],
    followers: [
      { _id: uuid(), fullName: "BATMAN", username: "the_dark_knight" },
    ],
  },
  {
    _id: uuid(),
    fullName: "Alfred",
    username: "wayne_family_butler",
    password: "alfred123",
    bio: "The Wayne family butler.",
    website: "https://www.dccomics.com/characters/alfred-pennyworth",
    profileAvatar:
      "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_AlfredPennyworth_5c40ddc7b0e412.20200112.jpg?itok=tVwKTrvd",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      { _id: uuid(), fullName: "BATMAN", username: "the_dark_knight" },
      { _id: uuid(), fullName: "Nightwing", username: "first_robin" },
    ],
    followers: [
      { _id: uuid(), fullName: "BATMAN", username: "the_dark_knight" },
    ],
  },
  {
    _id: uuid(),
    fullName: "Catwoman",
    username: "the_cat",
    password: "batAndcat",
    bio: "Cat 💓 Bat",
    website: "https://www.dccomics.com/characters/catwoman",
    profileAvatar:
      "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Catwoman_5c47c984ed1d66.81377433.jpg?itok=yHAKRa64",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      { _id: uuid(), fullName: "BATMAN", username: "the_dark_knight" },
    ],
    followers: [],
  },
];
