/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
import React from 'react';
import CardVideoGame from '../CardVideoGame/CardVideoGame';
import Filters from '../Filters/Filters';
import style from "./VideoGameContainer.module.css"
import Paginated from '../Paginated/Paginated';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { orderByName, orderByRating, getVideoGames } from "../../redux/actions"
import SeachBar from '../SeachBar/SeachBar';



const VideoGameContainer = () => {

    const dispatch = useDispatch();



    //     "id": 3498,
    //     "name": "Grand Theft Auto V",
    //     "released": "2013-09-17",
    //     "rating": 4.47,
    //     "background_image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "PlayStation 5",
    //         "Xbox Series S/X",
    //         "PlayStation 4",
    //         "PC",
    //         "PlayStation 3",
    //         "Xbox 360",
    //         "Xbox One"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 3328,
    //     "name": "The Witcher 3: Wild Hunt",
    //     "released": "2015-05-18",
    //     "rating": 4.66,
    //     "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "Xbox Series S/X",
    //         "PlayStation 4",
    //         "Nintendo Switch",
    //         "PC",
    //         "Xbox One",
    //         "PlayStation 5"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 4200,
    //     "name": "Portal 2",
    //     "released": "2011-04-18",
    //     "rating": 4.62,
    //     "background_image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
    //     "genres": [
    //         "Shooter",
    //         "Puzzle"
    //     ],
    //     "platforms": [
    //         "Xbox 360",
    //         "Linux",
    //         "macOS",
    //         "PlayStation 3",
    //         "PC",
    //         "Xbox One"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 5286,
    //     "name": "Tomb Raider (2013)",
    //     "released": "2013-03-05",
    //     "rating": 4.05,
    //     "background_image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "PlayStation 4",
    //         "macOS",
    //         "PC",
    //         "Xbox One",
    //         "Xbox 360",
    //         "PlayStation 3"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 4291,
    //     "name": "Counter-Strike: Global Offensive",
    //     "released": "2012-08-21",
    //     "rating": 3.57,
    //     "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "Xbox 360",
    //         "PlayStation 3"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 13536,
    //     "name": "Portal",
    //     "released": "2007-10-09",
    //     "rating": 4.51,
    //     "background_image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    //     "genres": [
    //         "Adventure",
    //         "Puzzle"
    //     ],
    //     "platforms": [
    //         "Android",
    //         "PlayStation 3",
    //         "Xbox 360",
    //         "Linux",
    //         "macOS",
    //         "PC",
    //         "Nintendo Switch"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 12020,
    //     "name": "Left 4 Dead 2",
    //     "released": "2009-11-17",
    //     "rating": 4.09,
    //     "background_image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "macOS",
    //         "Linux",
    //         "PC",
    //         "Xbox 360"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 5679,
    //     "name": "The Elder Scrolls V: Skyrim",
    //     "released": "2011-11-11",
    //     "rating": 4.42,
    //     "background_image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    //     "genres": [
    //         "Action",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "Nintendo Switch",
    //         "Xbox 360",
    //         "PlayStation 3"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 4062,
    //     "name": "BioShock Infinite",
    //     "released": "2013-03-26",
    //     "rating": 4.39,
    //     "background_image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "PlayStation 4",
    //         "Xbox 360",
    //         "Nintendo Switch",
    //         "Linux",
    //         "PC",
    //         "PlayStation 3",
    //         "Xbox One"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 802,
    //     "name": "Borderlands 2",
    //     "released": "2012-09-18",
    //     "rating": 4.03,
    //     "background_image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "PlayStation 3",
    //         "macOS",
    //         "PC",
    //         "Android",
    //         "Linux",
    //         "PS Vita",
    //         "Xbox 360"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 3439,
    //     "name": "Life is Strange",
    //     "released": "2015-01-29",
    //     "rating": 4.11,
    //     "background_image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    //     "genres": [
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "Linux",
    //         "PlayStation 3",
    //         "macOS",
    //         "iOS",
    //         "Xbox 360",
    //         "Android",
    //         "PlayStation 4",
    //         "Xbox One"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 28,
    //     "name": "Red Dead Redemption 2",
    //     "released": "2018-10-26",
    //     "rating": 4.59,
    //     "background_image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "PlayStation 4",
    //         "Xbox One"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 13537,
    //     "name": "Half-Life 2",
    //     "released": "2004-11-16",
    //     "rating": 4.5,
    //     "background_image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "Xbox 360",
    //         "Linux",
    //         "Xbox",
    //         "Android",
    //         "macOS"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 4286,
    //     "name": "BioShock",
    //     "released": "2007-08-21",
    //     "rating": 4.37,
    //     "background_image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "PlayStation 3",
    //         "macOS",
    //         "PC",
    //         "Xbox 360"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 1030,
    //     "name": "Limbo",
    //     "released": "2010-07-21",
    //     "rating": 4.16,
    //     "background_image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
    //     "genres": [
    //         "Adventure",
    //         "Indie",
    //         "Puzzle",
    //         "Platformer"
    //     ],
    //     "platforms": [
    //         "Linux",
    //         "PS Vita",
    //         "Android",
    //         "Xbox One",
    //         "Nintendo Switch",
    //         "iOS",
    //         "PC",
    //         "macOS",
    //         "Xbox 360",
    //         "PlayStation 3",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 2454,
    //     "name": "DOOM (2016)",
    //     "released": "2016-05-13",
    //     "rating": 4.38,
    //     "background_image": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "PC",
    //         "Nintendo Switch",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 3070,
    //     "name": "Fallout 4",
    //     "released": "2015-11-09",
    //     "rating": 3.8,
    //     "background_image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    //     "genres": [
    //         "Action",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "PC",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 58175,
    //     "name": "God of War (2018)",
    //     "released": "2018-04-20",
    //     "rating": 4.59,
    //     "background_image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 32,
    //     "name": "Destiny 2",
    //     "released": "2017-09-06",
    //     "rating": 3.56,
    //     "background_image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter",
    //         "Adventure",
    //         "Massively Multiplayer"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "PC",
    //         "PlayStation 4",
    //         "Web",
    //         "Xbox Series S/X",
    //         "PlayStation 5"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 11859,
    //     "name": "Team Fortress 2",
    //     "released": "2007-10-10",
    //     "rating": 3.66,
    //     "background_image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "macOS",
    //         "Linux"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 3939,
    //     "name": "PAYDAY 2",
    //     "released": "2013-08-13",
    //     "rating": 3.51,
    //     "background_image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "Linux",
    //         "PC",
    //         "Xbox One"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 278,
    //     "name": "Horizon Zero Dawn",
    //     "released": "2017-02-28",
    //     "rating": 4.32,
    //     "background_image": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "PlayStation 4",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 4459,
    //     "name": "Grand Theft Auto IV",
    //     "released": "2008-04-29",
    //     "rating": 4.26,
    //     "background_image": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "Xbox 360",
    //         "PlayStation 3",
    //         "Xbox One",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 3272,
    //     "name": "Rocket League",
    //     "released": "2015-07-07",
    //     "rating": 3.96,
    //     "background_image": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
    //     "genres": [
    //         "Sports",
    //         "Racing",
    //         "Indie"
    //     ],
    //     "platforms": [
    //         "Nintendo Switch",
    //         "Linux",
    //         "macOS",
    //         "Xbox One",
    //         "PC",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 10213,
    //     "name": "Dota 2",
    //     "released": "2013-07-09",
    //     "rating": 3.05,
    //     "background_image": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
    //     "genres": [
    //         "Action",
    //         "Massively Multiplayer"
    //     ],
    //     "platforms": [
    //         "Linux",
    //         "macOS",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 422,
    //     "name": "Terraria",
    //     "released": "2011-05-16",
    //     "rating": 4.05,
    //     "background_image": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
    //     "genres": [
    //         "Action",
    //         "Indie",
    //         "Platformer"
    //     ],
    //     "platforms": [
    //         "Xbox 360",
    //         "Wii U",
    //         "Nintendo 3DS",
    //         "Xbox One",
    //         "PlayStation 4",
    //         "iOS",
    //         "PC",
    //         "macOS",
    //         "Linux",
    //         "Nintendo Switch",
    //         "PlayStation 3",
    //         "PS Vita",
    //         "Android"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 41494,
    //     "name": "Cyberpunk 2077",
    //     "released": "2020-12-10",
    //     "rating": 4.09,
    //     "background_image": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "PlayStation 4",
    //         "PC",
    //         "Xbox Series S/X",
    //         "PlayStation 5",
    //         "Xbox One"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 766,
    //     "name": "Warframe",
    //     "released": "2013-03-25",
    //     "rating": 3.42,
    //     "background_image": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter",
    //         "Massively Multiplayer"
    //     ],
    //     "platforms": [
    //         "Xbox Series S/X",
    //         "PlayStation 5",
    //         "PlayStation 4",
    //         "Xbox One",
    //         "Nintendo Switch",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 29028,
    //     "name": "Metro 2033",
    //     "released": "2010-03-16",
    //     "rating": 3.93,
    //     "background_image": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "Xbox 360",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 3192,
    //     "name": "Metal Gear Solid V: The Phantom Pain",
    //     "released": "2015-09-01",
    //     "rating": 4.16,
    //     "background_image": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "PlayStation 3",
    //         "PlayStation 4",
    //         "Xbox 360",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 7689,
    //     "name": "Rise of the Tomb Raider",
    //     "released": "2015-11-10",
    //     "rating": 4.04,
    //     "background_image": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
    //     "genres": [
    //         "Action"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "PC",
    //         "macOS",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 3287,
    //     "name": "Batman: Arkham Knight",
    //     "released": "2015-06-23",
    //     "rating": 4.23,
    //     "background_image": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
    //     "genres": [
    //         "Action"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "Xbox One",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 23027,
    //     "name": "The Walking Dead: Season 1",
    //     "released": "2012-04-23",
    //     "rating": 4.33,
    //     "background_image": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "macOS",
    //         "PC",
    //         "iOS",
    //         "Android",
    //         "PS Vita",
    //         "PlayStation 4",
    //         "PlayStation 3",
    //         "Xbox 360",
    //         "Nintendo Switch",
    //         "Xbox One"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 16944,
    //     "name": "The Witcher 2: Assassins of Kings Enhanced Edition",
    //     "released": "2012-04-16",
    //     "rating": 4.17,
    //     "background_image": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
    //     "genres": [
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "macOS",
    //         "PC",
    //         "Xbox 360"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 19103,
    //     "name": "Half-Life 2: Lost Coast",
    //     "released": "2005-10-27",
    //     "rating": 3.45,
    //     "background_image": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
    //     "genres": [
    //         "Action"
    //     ],
    //     "platforms": [
    //         "macOS",
    //         "Linux",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 11973,
    //     "name": "Middle-earth: Shadow of Mordor",
    //     "released": "2014-09-30",
    //     "rating": 3.89,
    //     "background_image": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
    //     "genres": [
    //         "Action",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "Linux",
    //         "Xbox One",
    //         "Xbox 360",
    //         "PlayStation 3",
    //         "PlayStation 4",
    //         "macOS",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 416,
    //     "name": "Grand Theft Auto: San Andreas",
    //     "released": "2004-10-26",
    //     "rating": 4.51,
    //     "background_image": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "Android",
    //         "Xbox",
    //         "iOS",
    //         "PC",
    //         "macOS",
    //         "Xbox 360",
    //         "PlayStation 2",
    //         "PlayStation 3",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 17822,
    //     "name": "The Witcher: Enhanced Edition Director's Cut",
    //     "released": "2008-09-16",
    //     "rating": 4.07,
    //     "background_image": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
    //     "genres": [
    //         "Action",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "macOS"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 4427,
    //     "name": "BioShock 2",
    //     "released": "2010-02-09",
    //     "rating": 4.07,
    //     "background_image": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "PlayStation 4",
    //         "Xbox One",
    //         "Nintendo Switch",
    //         "PC",
    //         "macOS",
    //         "Xbox 360",
    //         "PlayStation 3"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 19710,
    //     "name": "Half-Life 2: Episode One",
    //     "released": "2006-06-01",
    //     "rating": 4.38,
    //     "background_image": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "Linux",
    //         "PC",
    //         "Xbox 360",
    //         "Android",
    //         "macOS"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 19709,
    //     "name": "Half-Life 2: Episode Two",
    //     "released": "2007-10-09",
    //     "rating": 4.45,
    //     "background_image": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter",
    //         "Puzzle"
    //     ],
    //     "platforms": [
    //         "Xbox 360",
    //         "Android",
    //         "macOS",
    //         "Linux",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 10035,
    //     "name": "Hitman",
    //     "released": "2016-03-11",
    //     "rating": 3.92,
    //     "background_image": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter",
    //         "Simulation"
    //     ],
    //     "platforms": [
    //         "PlayStation 4",
    //         "Linux",
    //         "macOS",
    //         "PC",
    //         "Xbox One"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 290856,
    //     "name": "Apex Legends",
    //     "released": "2019-02-04",
    //     "rating": 3.67,
    //     "background_image": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter",
    //         "Adventure",
    //         "Massively Multiplayer"
    //     ],
    //     "platforms": [
    //         "PlayStation 4",
    //         "Nintendo Switch",
    //         "macOS",
    //         "PC",
    //         "Xbox One"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 9767,
    //     "name": "Hollow Knight",
    //     "released": "2017-02-23",
    //     "rating": 4.41,
    //     "background_image": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
    //     "genres": [
    //         "Action",
    //         "Indie",
    //         "Platformer"
    //     ],
    //     "platforms": [
    //         "Nintendo Switch",
    //         "Xbox One",
    //         "PS Vita",
    //         "PC",
    //         "macOS",
    //         "Linux",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 4252,
    //     "name": "Mirror's Edge",
    //     "released": "2008-11-11",
    //     "rating": 4.07,
    //     "background_image": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
    //     "genres": [
    //         "Action"
    //     ],
    //     "platforms": [
    //         "Xbox 360",
    //         "PlayStation 3",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 3612,
    //     "name": "Hotline Miami",
    //     "released": "2012-10-22",
    //     "rating": 4.37,
    //     "background_image": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter",
    //         "Arcade",
    //         "Indie"
    //     ],
    //     "platforms": [
    //         "Linux",
    //         "Nintendo Switch",
    //         "Xbox One",
    //         "PlayStation 4",
    //         "PS Vita",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 41,
    //     "name": "Little Nightmares",
    //     "released": "2017-04-27",
    //     "rating": 4.05,
    //     "background_image": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
    //     "genres": [
    //         "Action",
    //         "Platformer"
    //     ],
    //     "platforms": [
    //         "PlayStation 4",
    //         "PC",
    //         "Xbox One",
    //         "Nintendo Switch"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 2551,
    //     "name": "Dark Souls III",
    //     "released": "2016-04-11",
    //     "rating": 4.4,
    //     "background_image": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
    //     "genres": [
    //         "Action",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "PlayStation 4",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 1447,
    //     "name": "Deus Ex: Mankind Divided",
    //     "released": "2016-08-22",
    //     "rating": 3.97,
    //     "background_image": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
    //     "genres": [
    //         "Action",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "Linux",
    //         "macOS",
    //         "PlayStation 4",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 3790,
    //     "name": "Outlast",
    //     "released": "2013-09-03",
    //     "rating": 3.71,
    //     "background_image": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure",
    //         "Indie"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "PlayStation 4",
    //         "Nintendo Switch",
    //         "macOS",
    //         "PC",
    //         "Linux"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 4332,
    //     "name": "Spec Ops: The Line",
    //     "released": "2012-06-26",
    //     "rating": 4.09,
    //     "background_image": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "Xbox 360",
    //         "PlayStation 3",
    //         "Xbox One",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 10754,
    //     "name": "BioShock Remastered",
    //     "released": "2016-09-15",
    //     "rating": 4.23,
    //     "background_image": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg",
    //     "genres": [
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "PlayStation 4",
    //         "Nintendo Switch",
    //         "macOS",
    //         "PC",
    //         "Xbox One"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 4161,
    //     "name": "Far Cry 3",
    //     "released": "2012-11-28",
    //     "rating": 4.24,
    //     "background_image": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "Xbox 360",
    //         "PlayStation 3",
    //         "PC",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 58134,
    //     "name": "Marvel's Spider-Man",
    //     "released": "2018-09-07",
    //     "rating": 4.46,
    //     "background_image": "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "PlayStation 5",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 13668,
    //     "name": "Amnesia: The Dark Descent",
    //     "released": "2010-09-08",
    //     "rating": 3.65,
    //     "background_image": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure",
    //         "Indie"
    //     ],
    //     "platforms": [
    //         "Linux",
    //         "macOS",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 19487,
    //     "name": "Alan Wake",
    //     "released": "2010-05-14",
    //     "rating": 4.11,
    //     "background_image": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter",
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "Xbox 360",
    //         "Xbox One",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 11936,
    //     "name": "Half-Life 2: Deathmatch",
    //     "released": "2004-11-01",
    //     "rating": 3.27,
    //     "background_image": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
    //     "genres": [
    //         "Action"
    //     ],
    //     "platforms": [
    //         "Linux",
    //         "macOS",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 4386,
    //     "name": "Saints Row: The Third",
    //     "released": "2011-11-14",
    //     "rating": 3.95,
    //     "background_image": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "Xbox One",
    //         "Xbox 360",
    //         "PlayStation 3",
    //         "Linux"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 18080,
    //     "name": "Half-Life",
    //     "released": "1998-11-19",
    //     "rating": 4.4,
    //     "background_image": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter",
    //         "Puzzle",
    //         "Platformer"
    //     ],
    //     "platforms": [
    //         "PlayStation 2",
    //         "PC",
    //         "macOS",
    //         "Linux",
    //         "Dreamcast"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 4828,
    //     "name": "Borderlands",
    //     "released": "2009-10-20",
    //     "rating": 3.83,
    //     "background_image": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "Xbox 360",
    //         "PlayStation 3",
    //         "Xbox One",
    //         "Nintendo Switch",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 3696,
    //     "name": "Wolfenstein: The New Order",
    //     "released": "2014-05-19",
    //     "rating": 4.19,
    //     "background_image": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "PC",
    //         "Xbox 360",
    //         "PlayStation 3",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 2462,
    //     "name": "Uncharted 4: A Thief’s End",
    //     "released": "2016-05-10",
    //     "rating": 4.51,
    //     "background_image": "https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "PlayStation 4",
    //         "PlayStation 5"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 29177,
    //     "name": "Detroit: Become Human",
    //     "released": "2018-05-25",
    //     "rating": 4.29,
    //     "background_image": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 10533,
    //     "name": "Path of Exile",
    //     "released": "2013-10-23",
    //     "rating": 3.65,
    //     "background_image": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
    //     "genres": [
    //         "Action",
    //         "RPG",
    //         "Massively Multiplayer",
    //         "Indie"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "PlayStation 4",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 4514,
    //     "name": "L.A. Noire",
    //     "released": "2011-05-17",
    //     "rating": 4.16,
    //     "background_image": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "PlayStation 4",
    //         "PlayStation 3",
    //         "Xbox 360",
    //         "PC",
    //         "Xbox One",
    //         "Nintendo Switch"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 39,
    //     "name": "Prey",
    //     "released": "2017-05-05",
    //     "rating": 4.28,
    //     "background_image": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "PC",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 3144,
    //     "name": "Super Meat Boy",
    //     "released": "2010-10-20",
    //     "rating": 3.97,
    //     "background_image": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg",
    //     "genres": [
    //         "Indie",
    //         "Platformer"
    //     ],
    //     "platforms": [
    //         "Linux",
    //         "Nintendo Switch",
    //         "Wii U",
    //         "Xbox 360",
    //         "PlayStation 4",
    //         "PS Vita",
    //         "Android",
    //         "Web",
    //         "PC",
    //         "macOS"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 17540,
    //     "name": "Injustice: Gods Among Us Ultimate Edition",
    //     "released": "2013-11-12",
    //     "rating": 3.52,
    //     "background_image": "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg",
    //     "genres": [
    //         "Action",
    //         "Arcade",
    //         "Fighting"
    //     ],
    //     "platforms": [
    //         "PlayStation 4",
    //         "PS Vita",
    //         "PC",
    //         "Xbox 360",
    //         "PlayStation 3"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 654,
    //     "name": "Stardew Valley",
    //     "released": "2016-02-25",
    //     "rating": 4.41,
    //     "background_image": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
    //     "genres": [
    //         "RPG",
    //         "Simulation",
    //         "Indie"
    //     ],
    //     "platforms": [
    //         "Nintendo Switch",
    //         "Xbox One",
    //         "PC",
    //         "iOS",
    //         "macOS",
    //         "Linux",
    //         "PlayStation 4",
    //         "PS Vita",
    //         "Android"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 4570,
    //     "name": "Dead Space",
    //     "released": "2008-10-13",
    //     "rating": 4.38,
    //     "background_image": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "Xbox 360",
    //         "PC",
    //         "Xbox One",
    //         "PlayStation 3"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 9721,
    //     "name": "Garry's Mod",
    //     "released": "2004-12-24",
    //     "rating": 3.78,
    //     "background_image": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure",
    //         "Simulation",
    //         "Casual",
    //         "Indie"
    //     ],
    //     "platforms": [
    //         "Linux",
    //         "PC",
    //         "macOS"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 13633,
    //     "name": "Sid Meier's Civilization V",
    //     "released": "2010-09-21",
    //     "rating": 4.28,
    //     "background_image": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg",
    //     "genres": [
    //         "Strategy"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "macOS",
    //         "Linux"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 10142,
    //     "name": "PlayerUnknown’s Battlegrounds",
    //     "released": "2017-12-20",
    //     "rating": 3.29,
    //     "background_image": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter",
    //         "Massively Multiplayer"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "Xbox One",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 362,
    //     "name": "For Honor",
    //     "released": "2017-02-13",
    //     "rating": 3.3,
    //     "background_image": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg",
    //     "genres": [
    //         "Action",
    //         "Massively Multiplayer"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "PlayStation 4",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 5563,
    //     "name": "Fallout: New Vegas",
    //     "released": "2010-10-19",
    //     "rating": 4.44,
    //     "background_image": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter",
    //         "Adventure",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "PlayStation 4",
    //         "PlayStation 3",
    //         "PC",
    //         "Xbox 360"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 3841,
    //     "name": "Assassin’s Creed IV: Black Flag",
    //     "released": "2013-10-29",
    //     "rating": 4.13,
    //     "background_image": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
    //     "genres": [
    //         "Action"
    //     ],
    //     "platforms": [
    //         "Xbox 360",
    //         "Xbox One",
    //         "PC",
    //         "Nintendo Switch",
    //         "Wii U",
    //         "PlayStation 3",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 4806,
    //     "name": "Mass Effect 2",
    //     "released": "2010-01-26",
    //     "rating": 4.48,
    //     "background_image": "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
    //     "genres": [
    //         "Action",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "Xbox One",
    //         "PlayStation 3",
    //         "Xbox 360"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 4248,
    //     "name": "Dishonored",
    //     "released": "2012-09-25",
    //     "rating": 4.38,
    //     "background_image": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "PlayStation 4",
    //         "PlayStation 3",
    //         "Xbox 360",
    //         "PC",
    //         "Xbox One"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 10243,
    //     "name": "Company of Heroes 2",
    //     "released": "2013-06-25",
    //     "rating": 3.08,
    //     "background_image": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg",
    //     "genres": [
    //         "Strategy",
    //         "Simulation"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "macOS",
    //         "Linux"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 3636,
    //     "name": "The Last Of Us Remastered",
    //     "released": "2014-07-29",
    //     "rating": 4.69,
    //     "background_image": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 5583,
    //     "name": "Hitman: Absolution",
    //     "released": "2012-11-19",
    //     "rating": 3.73,
    //     "background_image": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "PlayStation 4",
    //         "PC",
    //         "macOS",
    //         "Xbox 360",
    //         "PlayStation 3"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 12536,
    //     "name": "Hellblade: Senua's Sacrifice",
    //     "released": "2017-08-07",
    //     "rating": 4.26,
    //     "background_image": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure",
    //         "Indie"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "Nintendo Switch",
    //         "PlayStation 4",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 864,
    //     "name": "Dishonored 2",
    //     "released": "2016-11-10",
    //     "rating": 4.26,
    //     "background_image": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
    //     "genres": [
    //         "Action",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "PC",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 430,
    //     "name": "Grand Theft Auto: Vice City",
    //     "released": "2002-10-27",
    //     "rating": 4.45,
    //     "background_image": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "macOS",
    //         "PS Vita",
    //         "PC",
    //         "iOS",
    //         "Android",
    //         "PlayStation 2",
    //         "Xbox"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 12447,
    //     "name": "The Elder Scrolls V: Skyrim Special Edition",
    //     "released": "2016-10-27",
    //     "rating": 4.46,
    //     "background_image": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
    //     "genres": [
    //         "Action",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "PlayStation 4",
    //         "PC",
    //         "Xbox One"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 11935,
    //     "name": "Half-Life Deathmatch: Source",
    //     "released": "2006-05-01",
    //     "rating": 3.23,
    //     "background_image": "https://media.rawg.io/media/games/174/174fabfca02d5730531bab2153a7dfcb.jpg",
    //     "genres": [
    //         "Action"
    //     ],
    //     "platforms": [
    //         "macOS",
    //         "Linux",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 58812,
    //     "name": "Control",
    //     "released": "2019-08-27",
    //     "rating": 4.17,
    //     "background_image": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter",
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "Xbox Series S/X",
    //         "PlayStation 5",
    //         "Xbox One",
    //         "PlayStation 4",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 50738,
    //     "name": "Death Stranding",
    //     "released": "2019-11-08",
    //     "rating": 4.34,
    //     "background_image": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
    //     "genres": [
    //         "Action",
    //         "Adventure"
    //     ],
    //     "platforms": [
    //         "PC",
    //         "PlayStation 4"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 3747,
    //     "name": "Metal Gear Solid V: Ground Zeroes",
    //     "released": "2014-03-18",
    //     "rating": 3.9,
    //     "background_image": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
    //     "genres": [
    //         "Action",
    //         "Shooter"
    //     ],
    //     "platforms": [
    //         "PlayStation 3",
    //         "PlayStation 4",
    //         "PC",
    //         "Xbox One",
    //         "Xbox 360"
    //     ],
    //     "created": false,
    //     "favorites": false
    // },
    // {
    //     "id": 4166,
    //     "name": "Mass Effect",
    //     "released": "2007-11-16",
    //     "rating": 4.4,
    //     "background_image": "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg",
    //     "genres": [
    //         "Action",
    //         "RPG"
    //     ],
    //     "platforms": [
    //         "Xbox One",
    //         "Xbox 360",
    //         "PlayStation 3",
    //         "PC"
    //     ],
    //     "created": false,
    //     "favorites": false
    // }]

    // EL objetibo es remplazar ese arreglo que coloqué a mano por
    // el arr que viene de mi store



    // const [currentPage, setCurrentPage] = useState(1);
    // const [gamesPerPage] = useState(15);
    // const indexLastGame = currentPage * gamesPerPage //15
    // const indexFirstGame = indexLastGame - gamesPerPage //0
    // const currentGame = allVideoGames.slice(indexFirstGame, indexLastGame)

    // const pagination = (numberPage) => {
    //     setCurrentPage(numberPage)
    // };

    const totalGames = useSelector(state => state.allVideoGames);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(15);
    const indexLastGame = currentPage * gamesPerPage //15
    const indexFirstGame = indexLastGame - gamesPerPage //0
    const currentGame = totalGames.slice(indexFirstGame, indexLastGame)
    // console.log(totalGames)

    const pagination = (numberPage) => {
        setCurrentPage(numberPage)
    };


    const [order, setOrder] = useState(true);

    const handlerFilterName = (e) => {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        // setOrder(`Ordenado ${e.target.value}`);
        setOrder(!order)
    };

    const handlerFilterRating = (e) => {
        e.preventDefault()
        dispatch(orderByRating(e.target.value))
        setCurrentPage(1);
        // setOrder(`Ordenado ${e.target.value}`);
        setOrder(!order)
    };

    const handlerClick = (e) => {
        dispatch(getVideoGames())
        setCurrentPage(1);
    };

    return (
        <div >



            <SeachBar setCurrentPage={setCurrentPage} />

            <Filters />

            <select onChange={e => handlerFilterName(e)}>
                <option value="asc">A-Z</option>
                <option value="des">Z-A</option>
            </select>

            <select onChange={e => handlerFilterRating(e)}>
                <option value="UpRt">↑ Rating</option>
                <option value="DowRt">↓ Rating</option>
            </select>

            <div>
                <button className={style.btrainbow} onClick={(e) => { handlerClick(e) }}>
                    Back to Home
                </button>
            </div>


            <div>
                <Paginated
                    gamesPerPage={gamesPerPage}
                    totalGames={totalGames.length}
                    pagination={pagination}
                />
            </div>





            <div className={style.containerP}>
                {currentGame?.map((vg) => {
                    return <CardVideoGame
                        key={vg.id}
                        id={vg.id}
                        name={vg.name}
                        genres={vg.genres.map(el => el.name)}
                        img={vg.background_image}
                        rating={vg.rating}

                    />
                })}
            </div>

        </div>
    );
};

export default VideoGameContainer;