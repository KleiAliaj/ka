import React from "react";
import { table } from "@/lib/Airtable";
import axios from "axios";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function AI({ aiImages }) {
  console.log(aiImages);
  let temp = [
    {
      name: "Futuristic city, dystopic",
      image: {
        id: "attnpp4NP1WF7l5QO",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/adbfb39e7a9d713d00584defa19bed19/e0396bc3/Ty_futuristic_city_0_c51c75af-af71-44c6-93d0-293ea0be93b0.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=33d1f49d35466dee",
        filename:
          "Ty_futuristic_city_0_c51c75af-af71-44c6-93d0-293ea0be93b0.png",
        size: 1384460,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/ccba6e039f05063c82cee12a02aec7c5/868fbefb?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=5528725a8dcd9254",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/15223fda502ee6f3391d343f94952e32/bdd489dd?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=81dddf6708e673ac",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/dc32da03ea3823e6fe055319b8033cce/f771a836?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=a99e3837964ba7da",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "Colorful 3d logo, octane render, 4k",
      image: {
        id: "attYVd4iodtuTb0T9",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/f8c4cb6e8d80b07531377842089cb579/5b9e761a/Ty_colorful_beautiful_vibrant_3D_logo_3d_render_octane_render_0_8077abee-591f-41e4-9fae-d03536a6b4e3.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=4d01b425cf631757",
        filename:
          "Ty_colorful_beautiful_vibrant_3D_logo_3d_render_octane_render_0_8077abee-591f-41e4-9fae-d03536a6b4e3.png",
        size: 1147629,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/88cebe44be21f663e9995f28af5ccbaa/dadc306d?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=faaea9e83c6e936b",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/06f94b509df6b7454d2c4927fb3e95c5/baf4b7d7?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=20b18ec9e034cec8",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/8ff054cd69626d291e26b59bcc2ac34d/9a0a965c?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=acc07ff2c9b61f10",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "jungle volcano landscape, epic, intense, lush, dramatic --vibe",
      image: {
        id: "attbeIzYfNm616ZQc",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/01b410a195dc3fcd9439df5036db0679/e8a3b371/Ty_jungle_volcano_landscape_epic_intense_lush_dramatic_0_0e178e90-e558-4b90-9128-d5e3a2109c61.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=5faadc19c45cc73d",
        filename:
          "Ty_jungle_volcano_landscape_epic_intense_lush_dramatic_0_0e178e90-e558-4b90-9128-d5e3a2109c61.png",
        size: 1517464,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/6e29b99e0bebb6c4810265b48a288753/576c094a?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=b88e2cbf9478f535",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/180915447ce0c558e006942c46fc9cf7/188e1ae3?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=9257c978bdb48162",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/a7d48d49a46e73e3c76565d294c9a6c6/b8233180?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=e91918c4b588d6f7",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "1970s art, abstract style",
      image: {
        id: "attGSkOGqcstthr0r",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/c0465a3af910ba24fc3e05465a9067e0/1a93489e/Ty_1970s_art_d4c50f21-6372-4128-97e9-86e700f135ed.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=9db347b8c3a9871d",
        filename: "Ty_1970s_art_d4c50f21-6372-4128-97e9-86e700f135ed.png",
        size: 2051350,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/a1704bc81a0a9b9781b40205b27c0725/7f6d76c9?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=f76c83d93d18ee15",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/6c590caa8a17a4b81528b515a100a39a/4e9f9103?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=6a6a4e55e46e98b0",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/95767a9ed72cdab8ec289e5a3417770b/26f1e993?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=27211306043ecd51",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "Modern home, octane render, 8k, overlooking city, infinity pool --hd",
      image: {
        id: "att2bNvK9tZubEFKm",
        width: 256,
        height: 256,
        url: "https://dl.airtable.com/.attachments/581516275ee2240ba6d73c2e5d53140d/be23f11c/modern.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=80c29ec24d38dd16",
        filename: "modern.png",
        size: 19407,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/303449e3bb2f47cb1cf214ae3006074f/2b6f55f4?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=16b0e8493e0505ea",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/a3390406b3e871b9d18daffa2fbe0013/4241f3e8?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=87f67db30c8cbfb6",
            width: 256,
            height: 256,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/3dd1103fac63f6047754a476f49c5c89/d5e7c2c5?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=673a668ba40fa4f7",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "bubbles underwater in a pool, abstract, hyperrealistic, octane render",
      image: {
        id: "att5wGLhflGCtd0EZ",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/0a59c5f9c54ce394c8af8796ecc034bd/2a9d901f/Ty_bubbles_underwater_in_a_pool_abstract_hyperrealistic_octane__3746851e-e2e6-45b4-b754-abbbfcc83037.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=23002eaec9ee6040",
        filename:
          "Ty_bubbles_underwater_in_a_pool_abstract_hyperrealistic_octane__3746851e-e2e6-45b4-b754-abbbfcc83037.png",
        size: 1168067,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/0c90d50082a0faf781d840c15e07252c/6dbdaf12?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=93d83fa63567d99c",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/17a691d4c098da5b256f13402cdf428d/e755b2f6?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=e0ebffc1f458ed23",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/7cdf4a0a76a3cb907531f53c7946a683/ed59079c?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=aaf1cd34306f5bb3",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "sushi roll , Vincent van Gogh style, in Tokyo, 1940's time period",
      image: {
        id: "attIY2CtKWCgqCRWL",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/1fab8fff338205b72f5852a6d85223a1/c05c60b3/Ty_sushi_roll__Vincent_van_Gogh_style_in_Tokyo_1940s_time_perio_2fbc0c9d-4dc1-4303-b08d-34d6ebb2cd44.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=62b78bc7674ea2ff",
        filename:
          "Ty_sushi_roll__Vincent_van_Gogh_style_in_Tokyo_1940s_time_perio_2fbc0c9d-4dc1-4303-b08d-34d6ebb2cd44.png",
        size: 1569305,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/b4f210f72bcbe215d6e6f7c3c6f8cebf/90611f57?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=e671834d4b828cf0",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/9c78c252d33c512644874301bf88df3a/3dc4e472?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=a9ec2408d6ea63ae",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/9cc944c70528f828959cd48915987aaa/b9e8264e?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=56c0eb98501452ad",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "Find something new, follow your interests. Take note of the gaps, anomalies and the things you genuinely believe the world needs. Keep working on your creator skills, on your builder skills. Being a great engineer, being a great product manager, becoming a better leader, becoming more consistent, more conscientious, and a better communicator. You will create something amazing.",
      image: {
        id: "attGaNRC2EGM3fwWS",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/b563af2b0500b956285e0c3d639f79bd/238fc1f9/Ty_Find_something_new_follow_your_interests._Take_note_of_the_g_4ee43893-d019-4297-b5e1-7a4c87c39cc8.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=c8c2001bffcb1224",
        filename:
          "Ty_Find_something_new_follow_your_interests._Take_note_of_the_g_4ee43893-d019-4297-b5e1-7a4c87c39cc8.png",
        size: 1820438,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/c0b89228dad5ce9e651aee81d4e28409/1d80db4b?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=d531f6a4c841840a",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/496957e2c7bba0510c5a5959cd12388d/fbf53bd0?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=4daef0616466a4f7",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/72982356381df9906eb225f9f201af4e/49c2e35a?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=1d11b23c11f4bb21",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "Lynnwood Washington",
      image: {
        id: "attIzwnHrsASBT9Ir",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/28813fe0742d0a0e8a23a53e1a376d46/bee780d8/Ty_lynnwood_Washington_0d0bc15d-a56a-45c2-8b05-15d02a427826.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=f3a598195dae59f6",
        filename:
          "Ty_lynnwood_Washington_0d0bc15d-a56a-45c2-8b05-15d02a427826.png",
        size: 1138301,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/28a7974b17080e1d4478bf71ce224e7a/f70d7ab5?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=915ee87b5d1b0196",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/7b1a8ba1d10b4c8ebac7aee3045bf6b4/4439f90c?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=eea92df75d10797b",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/bc2ddd95c4d7660ac79ebb44f3b7abad/94ca6a84?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=2e28f432d8a40fbc",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "firework show in space, nebula, galaxy, fourth of july, abstract, 8k",
      image: {
        id: "attjt0kMAHoONb4Jq",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/b0080da5341267fe749e4e4519d3801d/ba7410e7/Ty_firework_show_in_space_nebula_galaxy_fourth_of_july_abstract_5fd10f80-b9d6-43a2-ab4e-5e3b5d0d10cd.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=888f8e48abaff88d",
        filename:
          "Ty_firework_show_in_space_nebula_galaxy_fourth_of_july_abstract_5fd10f80-b9d6-43a2-ab4e-5e3b5d0d10cd.png",
        size: 1178617,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/5277b03bfeeb86c54547b96f429b8e25/6de40a54?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=c62dfb6fb497c587",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/9cd1860a4af17bce3cd3f4c6480d04c8/a2d06595?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=aa65a4625e2ea4fa",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/5fac1436f3ebb3cf7fe1d57939e9d1a9/c1a4fdd1?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=f04585e33415461a",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "Chromatic Aberation cube, tree",
      image: {
        id: "attAVc8lIDthLaXsf",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/be7450fb12e63790f36851846fe63566/477ded25/Ty_Chromatic_Aberation_cube_tree_05ac5155-65af-4717-8a6e-3d536986c242.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=6921ba565cd5b32c",
        filename:
          "Ty_Chromatic_Aberation_cube_tree_05ac5155-65af-4717-8a6e-3d536986c242.png",
        size: 1583759,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/bcef1be84e9447f82c49c85109e8d03f/22f8cd3c?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=a9ac02a0de005505",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/df4db8e9b8a6e7db6a25c3725e722add/f87c13ea?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=f9bac3089564d2b4",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/f4f08740c9d5c7624439aa3a8cc8522f/da19fec5?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=04e9ab292f96a0af",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "the mist of delight",
      image: {
        id: "attupPx7b5C3wSTPl",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/32c55e0e249b623028c1b298439600fe/65dea89f/Ty_the_mist_of_delight_6e70c79f-ca42-467b-a449-fe456d435fb3.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=f3c469987da8f2fe",
        filename:
          "Ty_the_mist_of_delight_6e70c79f-ca42-467b-a449-fe456d435fb3.png",
        size: 1244079,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/21b08e7e7bccc29da55fb9ae1601515c/95c4e749?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=44955df4fb4fa05b",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/d6e5197226d6c28a91eb4fd262261a95/adacb26a?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=263c6f53a667f482",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/0f3f7440b7373e546c2b9b7dc16d3055/ded1ff75?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=c3b909a9eb195704",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "A beach themed lofi beats album cover light tones piano wave",
      image: {
        id: "attjfDun23Lf0MZDr",
        width: 1664,
        height: 1664,
        url: "https://dl.airtable.com/.attachments/0cb0ec638eaf90ed31b5557872b3cfd6/2acc3d02/Ty_A_beach_themed_lofi_beats_album_cover_light_tones_piano_wave_15f759a8-186e-448f-b6c8-18e8efba6638.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=884105fbe53c2f58",
        filename:
          "Ty_A_beach_themed_lofi_beats_album_cover_light_tones_piano_wave_15f759a8-186e-448f-b6c8-18e8efba6638.png",
        size: 3153335,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/26c6dedafb945f38eaf0da98a12ebfad/a167273d?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=a4ed64c5594f7e0b",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/5ee2815ed673d3970901820e6751a42c/327264eb?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=0924686744a1c8bb",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/271d4445a59a683e8714e6e9bb102533/c01a28a4?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=1e40914a17bcb1b8",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "90's style abstract art",
      image: {
        id: "att75MvJoUYPDG3Sx",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/531945dff764979dbfafbd23eb04f509/599fac41/Ty_1990s_art_0_0072929f-50ba-4f04-b070-f62b76c2ea5e.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=23a7e31167583a18",
        filename: "Ty_1990s_art_0_0072929f-50ba-4f04-b070-f62b76c2ea5e.png",
        size: 2111018,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/4684f901e244f665cd307714ca3b363f/4f856813?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=9df40be2a245f279",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/0d2bb3d26184fc43e6f4c844e337a372/4df26f70?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=95878b250d6a39ed",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/6749e8a2915f1a72f8f9c29fa2145455/7a5d2651?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=015b2a1f40b54652",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "Lush palms on beach, 8k",
      image: {
        id: "att4gYxZ12hMVknJy",
        width: 1664,
        height: 1664,
        url: "https://dl.airtable.com/.attachments/9addfcf721c888906d1c7547b4a37cf9/e5aa365c/Fusion_Private_beach_island_palm_tree_crystal_clear_water_rainf_ffbee41a-49af-4aab-bfdc-dfa0a7e58867.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=3328904bdcd7e732",
        filename:
          "Fusion_Private_beach_island_palm_tree_crystal_clear_water_rainf_ffbee41a-49af-4aab-bfdc-dfa0a7e58867.png",
        size: 2290866,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/2cde9e3f7aa3776443d525e7d358710c/cc827b36?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=2206d3534227f21c",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/8617d85dc91230c27e1c7ed32b41a677/8f38b102?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=669b8aa6270494bd",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/7b3365b365814351b3b086ea7bac3409/376637e7?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=685d1c7dc5456321",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "flying bear balloon, dramatic, hyperrealistic, 8k",
      image: {
        id: "att27GFJmiV387ga7",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/0c491d39f6f26111697d9f5b20b1d055/e6777aae/Ty_flying_bear_0_4df77e27-ed73-4f63-ba24-b340465e8bd6.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=a29f8fd64b202cc5",
        filename: "Ty_flying_bear_0_4df77e27-ed73-4f63-ba24-b340465e8bd6.png",
        size: 989100,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/2ce996fa0ab1a651e6c61095493bbead/f73c647c?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=0f3a1094c10f6000",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/c5bd0c8f940b2c4883d16df0d1226774/de8291c6?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=7760f6984dd531b1",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/8e41a653d1271d6579812c1493d7a36f/17106ff7?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=2e24867822e0dc02",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "hubble space telescope, galaxy, hyperrealistic, art, space scene",
      image: {
        id: "atteobsDh2cdHNCzW",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/00e70c0b056a8e941d5df186765de436/3a42ef00/Ty_hubble_space_telescope_galaxy_hyperrealistic_art_space_scene_ab3a1881-428e-4164-9fcd-4f319551f5c4.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=f7e42fb8b65ff6e8",
        filename:
          "Ty_hubble_space_telescope_galaxy_hyperrealistic_art_space_scene_ab3a1881-428e-4164-9fcd-4f319551f5c4.png",
        size: 1272052,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/49f23f21a2d5853ac45f3e8e30bbe7fb/9ae19720?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=ab43c50f535fe48c",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/e81100ee14bf4dd43704ef3521482523/24923d74?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=9bf1eae6e6778f02",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/36f1d9db875c66b92b3268cf94eda160/4864b48a?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=4551a3896aa31141",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "seattle skyline at sunset --hd",
      image: {
        id: "atthdoYnvCXnMz3pf",
        width: 1118,
        height: 1118,
        url: "https://dl.airtable.com/.attachments/225866992c0c2dce0bd75492e755a097/87fb1f72/430ce08f-405e-47ed-a23e-cacb009dbf8a_progress_image_90.webpwidth1118height1118?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=8821faff1b8394af",
        filename:
          "430ce08f-405e-47ed-a23e-cacb009dbf8a_progress_image_90.webp?width=1118&height=1118",
        size: 67590,
        type: "image/webp",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/351717736f60c0c68d92d3297f64f82d/378f0ab7.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=82853f3e981626aa",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/f7314a32e890bd1b6c3e8c4d4426f41c/c8f9db84.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=7990594301a0eeb3",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/aa4d32d37f3f31576b7b11e93a2d5cac/e31fcfeb.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=723f4816ad716e8b",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "lone palm tree on beautiful beach, 8k",
      image: {
        id: "attHujTho6xWVMkgx",
        width: 1664,
        height: 1664,
        url: "https://dl.airtable.com/.attachments/ddafdbf5a5214a22ad5a67bfa40e95ba/d4e86c48/Fusion_Private_beach_island_palm_tree_crystal_clear_water_rainf_bddb28e5-e663-477b-b4a4-a578fcae4eb1.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=adc8ace537fec1e9",
        filename:
          "Fusion_Private_beach_island_palm_tree_crystal_clear_water_rainf_bddb28e5-e663-477b-b4a4-a578fcae4eb1.png",
        size: 2050179,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/4d58b05f7fb3587b7bf238831fec8ba6/4f9fb9d6?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=61aff714c94370ec",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/8f904504e156b5a93741101d55ef7912/6d3b6180?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=2d6c37a11d8fbdf4",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/ffde545a78269584908ab1b5e427037c/a5fb235b?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=e6abadbec5e4e47b",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "abstract ocean scene with fish, hyperrealistic, carribean, bahamas",
      image: {
        id: "attlbIm9mIFhYf9l1",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/2f2342d54332c795a081bce3a304c90b/59f7427a/Ty_abstract_ocean_scene_with_fish_hyperrealistic_carribean_baha_e83de1a7-a1dc-42cf-a6af-ce646590a4a2.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=7956984e2e39234c",
        filename:
          "Ty_abstract_ocean_scene_with_fish_hyperrealistic_carribean_baha_e83de1a7-a1dc-42cf-a6af-ce646590a4a2.png",
        size: 1684009,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/14dd7809032a1dc5c71c0880912238c8/90368113?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=755c7d602b6d2ccb",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/e719197bf31378a2f85095e7c342265c/0728f880?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=2c0bdd4c2b86b711",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/419f98374d0c15f741522d848022a691/c215ca78?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=247f7a7b56670799",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: " lily pads on a calm lake, fog, mysterious, beautiful, hyperrealistic, octane render",
      image: {
        id: "attY9bjAmiEvFx4pC",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/f9603f68d385b7f40859dc6045a97ac2/0e502dad/Ty_lily_pads_on_a_calm_lake_fog_mysterious_beautiful_hyperreali_ad7f7a82-68bd-4f9b-9cda-e2ba4f32c38a.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=1f8a1a2f61edf581",
        filename:
          "Ty_lily_pads_on_a_calm_lake_fog_mysterious_beautiful_hyperreali_ad7f7a82-68bd-4f9b-9cda-e2ba4f32c38a.png",
        size: 1076510,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/8d33d5123e15344cddafb6f13b529e56/e1e4d84b?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=f491384cb055dff4",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/8105dea27747c44188e8d91c9730dd82/0b1bf723?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=5a93b0d1cb477419",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/8622562ff6b705b99f3703f36b7d9bde/f5753256?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=53258a2e715082be",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "toyota 4 runner covered in lush plants, post-apocalyptic, jungle hyperrealistic, 8k, octane render ",
      image: {
        id: "attCDCnklJwl7q7Zb",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/43dd7a1fa3fd60d36dd814ebdb847cd7/a90d3885/Ty_toyota_4_runner_covered_in_lush_plants_post-apocalyptic_jung_1de414b4-f375-403e-9603-bbb773c48deb.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=38dac710215027b7",
        filename:
          "Ty_toyota_4_runner_covered_in_lush_plants_post-apocalyptic_jung_1de414b4-f375-403e-9603-bbb773c48deb.png",
        size: 1174232,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/df86ff5761480f6cac99f9591a209165/f906c45c?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=7e678641519302ce",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/134740584d100739984f1bf242d3a26b/02e1e748?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=ae10dc625b85b414",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/a691c6eab657f8211e56668a0f43edad/eff04730?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=d1460818c00cb16d",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "Lofi beach album cover, soft, abstract, pink, blue --hd",
      image: {
        id: "attBOxAZghchVjSRg",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/02fd1336cfc8c095cdc6baa1648fee48/97806eb6/Ty_A_beach_themed_lofi_beats_album_cover_light_tones_piano_wave_762c9aaf-3eae-4d8d-abd2-f96456178fc9.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=eae16ddcea4324f6",
        filename:
          "Ty_A_beach_themed_lofi_beats_album_cover_light_tones_piano_wave_762c9aaf-3eae-4d8d-abd2-f96456178fc9.png",
        size: 1202889,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/b66f60c1df9af82535849fa1d88bbc09/8bdf709b?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=d8d0ac6232405e59",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/7129fb6a8dd4774989c1151bc091d653/a270b029?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=ba168faa09d6f4a7",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/99a4e70fdf829a294f79e26b84ade9fa/e66d6a0f?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=e7276705496211fe",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "Chromatic Aberration snake",
      image: {
        id: "attEGy6BuulPigIVO",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/e101339ef930f01e51d1f6773fde0814/d84e56e5/Ty_Chromatic_Aberration_snake_0_ce031094-a174-47f2-af1b-c1f4dbc019af.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=e3def748ddb86708",
        filename:
          "Ty_Chromatic_Aberration_snake_0_ce031094-a174-47f2-af1b-c1f4dbc019af.png",
        size: 1076644,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/28b407e077ed89d0ee1c9be0c443b3ac/df7e8e9d?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=6cfe5a82e41bd46c",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/06465d436c2dfb6c90f08032ee087979/7f294368?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=89a04104b3fa8079",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/382c2fccb597c2949ab2e30ced034f91/7554219d?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=4d44c78263fceaad",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "chillwave cube on water",
      image: {
        id: "attu1h7zPydWdWjHH",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/0ac9b40cda72945e3191f25958279e4f/c442ea6d/Ty_chillwave_cube_on_water_0_f6295db3-5ec2-45b6-84f3-015a9fb3c09c.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=4f38134c11c68d3c",
        filename:
          "Ty_chillwave_cube_on_water_0_f6295db3-5ec2-45b6-84f3-015a9fb3c09c.png",
        size: 1193575,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/1f51e4a236c07feceef795ae146ce280/4f07aeb7?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=d53080f327e766fb",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/a478359a87a970202b5b00ab2136e0e5/e5a707f6?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=43da86e57b3d46ba",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/84c45b64a94d1768ea43bc8e19bd2ca5/0f7c7607?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=e5b309ec9bef77e6",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "donut shaped earth in space, hyperrealistic, 8k, octane render",
      image: {
        id: "attUzk2fKhsbh6bkn",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/db08723a8abd7275391e74132a738fb6/60b37e0c/Ty_donut_shaped_earth_in_space_hyperrealistic_8k_octane_render__b0c03846-836b-43fd-ba44-41b548f66ae8.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=4f1787e32dc8e7bf",
        filename:
          "Ty_donut_shaped_earth_in_space_hyperrealistic_8k_octane_render__b0c03846-836b-43fd-ba44-41b548f66ae8.png",
        size: 831657,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/6f6498d16ce0cd956dc07b108c8441c5/9caa632d?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=81c50733d2ef957c",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/6ca5ed2243f90e6961698619ac5160d5/a027b18a?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=558635c79c43440e",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/55c06be0f9a9a0e9104f64c6eed438e9/bd8750b8?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=1579d87fed68eea4",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
    {
      name: "tropical island, sunset, lightbulb, palm, ideas ",
      image: {
        id: "attfSX57hrSlitRmd",
        width: 1024,
        height: 1024,
        url: "https://dl.airtable.com/.attachments/7fe0d049de654791790936ef063d958c/f392d965/Ty_a_tropical_island_idea_light_bulbs_photoreal_8k_octane_cycle_c5b38b0c-40c5-431a-a8d6-83d452d0e608.png?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=e4c47bd5299cc9a5",
        filename:
          "Ty_a_tropical_island_idea_light_bulbs_photoreal_8k_octane_cycle_c5b38b0c-40c5-431a-a8d6-83d452d0e608.png",
        size: 870320,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/8a8216e0ae759223333bdef80301571d/ff6825a6?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=c6a97f31135bd447",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/3168cede8de220d7fbf3762c914c1215/837e7d55?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=05a83a9d72f0ccae",
            width: 512,
            height: 512,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/814d15f82dba9037e2ffe178c1e7e8eb/9d2d1e2c?ts=1657908663&userId=usr6ubQm0q8lJCXhD&cs=8c73a2fe7e522224",
            width: 3000,
            height: 3000,
          },
        },
      },
    },
  ];
  const [pics, setPics] = React.useState(temp);
  return (
    <div className="page-container">
      <h2 className="text-left heading-lg ">AI Experiments</h2>
      <p>
        AI has always fascinated me, the idea that a computer can make an
        informed decision based on information it has learned is game changing.
        The first time I used GPT3 back in 2020, it was massively inspiring. It
        felt like magic, almost anything I'd ask it, it would send back a reply
        that made sense, both contextually and grammatically. I spent hours
        having conversations about philosophy, politics, and technology with a
        non-sentient computer. It will always be something I'm fascinated with.{" "}
      </p>
      <p>
        GPT3 experiments: (Maybe I can write up 3 to 5 gpt3 text experiments to
        showcase my AI credibility)
      </p>
      <p>
        MidJourney/DALLE-2 experiments: (Maybe I can write up 3 to 5 image AI
        experiments to showcase my AI credibility)
      </p>
      <p>
        When the DALLE-2 was first released to the media, I knew right then how
        big AI image generation would be. Input one sentence and get a
        customized beatiful image back? Seemed too good to be true. I still have
        yet to get access to DALLE-2, but I've been having a ton of fun playing
        with <a>Midjourney</a>, which some label as the "artsy" DALLE. Its
        really impressive what it makes, and I've been enjoying the discord
        first approach more than I though I would. Here is a collection of some
        of my favorite AI artwork that I've made.
      </p>

      <div className="flex flex-wrap justify-center w-full gap-3 my-5">
        {pics.map((pic, index) => {
          //   console.log(pic);
          const [imageLoading, setImageLoading] = React.useState(false);
          let textSize = pic.name.length > 200 ? "  !text-xs" : " !text-base";
          React.useEffect(() => {
            setImageLoading(true);
          }, []);
          return (
            <div
              key={index}
              className={
                "group relative shadow-xl rounded-xl shadow-sky-600/30 md:h-[250px] md:w-[250px] sm:h-[300px] hover:scale-105 transition "
              }
            >
              {imageLoading ? (
                <div className="z-0 w-full h-full scale-[101%]">
                  <Skeleton
                    width={"100%"}
                    height={"100%"}
                    className=" w-full h-full object-cover !leading-loose !rounded-xl  !p-0 fade-effect-quick z-100"
                    baseColor="#DBF2FD"
                    highlightColor="#A2DEF9
                    "
                  />
                </div>
              ) : (
                <div className="absolute top-0 z-50 w-full h-full bg-slate-800/70 rounded-xl  opacity-0 group-hover:!opacity-100 transition duration-300 flex justify-center items-center p-2">
                  <p
                    className={
                      " text-white  opacity-0 group-hover:!opacity-100 duration-200 " +
                      textSize
                    }
                  >
                    {pic.name}
                  </p>
                </div>
              )}
              {/* <p>{pic.name.length}</p> */}
              <Image
                src={pic.image.url}
                alt={pic.name}
                layout="fill"
                className={
                  " rounded-xl z-0 cursor-pointer " +
                  +(imageLoading ? " !hidden" : "")
                }
                onLoadingComplete={() => {
                  // console.log("IMG LOADED");

                  setImageLoading(false);
                }}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open(pic.image.url, "_blank");
                  }
                }}
              />

              {/* <p>{pic}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// export async function getStaticProps(context) {
//   let aiImages = [];
//   const axiosStats = await axios({
//     method: "GET",
//     url: "http://tyfiero.com/api/airtable",
//     //url: "http://localhost:3000/api/airtable",
//   })
//     .then((response) => {
//       let images = response.data;
//       //   console.log(response.data);
//       let sorted = images.sort(function (a, b) {
//         return b.rank - a.rank;
//       });
//       aiImages = sorted;
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   return {
//     props: { aiImages },
//     revalidate: 21600,
//   };
// }
