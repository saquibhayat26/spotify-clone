import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const musicApi = createApi({
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "af1c4f849dmsh8925e5c6c0db8f3p161f5bjsn37a408244f86"
      );
      headers.set("X-RapidAPI-Host", "shazam.p.rapidapi.com");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTrackCharts: builder.query({
      query: () => ({
        url: `/charts/track?locale=en-US&pageSize=20&startFrom=0`,
      }),
    }),

    // getTopTracks: builder.query({
    //   query: () => ({
    //     url: `/charts/list`,
    //   }),
    // }),
  }),
});

export const { useGetTrackChartsQuery } = musicApi;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // import * as dotenv from "dotenv";
// // dotenv.config();

// // const REACT_APP_RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
// // console.log(REACT_APP_RAPIDAPI_KEY);

// // import axios from "axios";

// // const options = {
// //   method: "GET",
// //   headers: {
// //     "X-RapidAPI-Key": "ca2b18826cmsh29bee2e0dacf233p15c5d0jsn66df9c4dc854",
// //     "X-RapidAPI-Host": "shazam.p.rapidapi.com",
// //   },
// // };

// // fetch(
// //   "https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0",
// //   options
// // )
// //   .then((response) => response.json())
// //   .then((response) => console.log(response))
// //   .catch((err) => console.error(err));

// const musicApiHeader = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "ca2b18826cmsh29bee2e0dacf233p15c5d0jsn66df9c4dc854",
//     "X-RapidAPI-Host": "shazam.p.rapidapi.com",
//   },
// };

// export const musicApi = createApi({
//   reducerPath: "musicApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://shazam.p.rapidapi.com",

//     // prepareHeaders: (headers) => {
//     //   headers.set({
//     //     "X-RapidAPI-Key": "ca2b18826cmsh29bee2e0dacf233p15c5d0jsn66df9c4dc854",
//     //     "X-RapidAPI-Host": "shazam.p.rapidapi.com",
//     //   });
//     //   return headers;
//     // },
//   }),

//   endpoints: (builder) => ({
//     getMusicChartsTrack: builder.query({
//       query: () =>
//         createRequest("/charts/track?locale=en-US&pageSize=20&startFrom=0"),
//       // query: () => "/charts/track",
//     }),
//   }),
// });

// const createRequest = (url) => ({ url, headers: musicApiHeader });

// export const { useGetMusicChartsTrackQuery } = musicApi;
