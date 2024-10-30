import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import Meetings from "./Meetings";
import Meetings1 from './component1/Meetings1';
import VideoPage from './component1/VideoPage';
import reportWebVitals from './reportWebVitals';

import "./index.css";
import './index1.css';
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// // import forum from "../Forumm";
// import Forumm from './componenets/Forumm';

// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// import './index2.css';
// // import App from './App2';
// // import reportWebVitals from './reportWebVitals';

// import TimeAgo from 'javascript-time-ago'

// import en from 'javascript-time-ago/locale/en'
// // import ru from 'javascript-time-ago/locale/ru'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// TimeAgo.addDefaultLocale(en)
// // TimeAgo.addLocale(en);



const router = createBrowserRouter([
  {
    path: "Meetings1",
    element: <Meetings1 />,
  },
  {
    path:"/room/:id",
    element:<VideoPage/>
  },
  {
    path: "/",
    element:<App />,
  },
  // {
  //   path: "Forumm",
  //   element:<Forumm />
  // },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();