import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import StarRating from "./utils-folder/star-component/StarRating";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StarRating maxRating={10} />
    <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Good", "Great", "Amazing"]}
      color="red"
      size="30px"
      textColor="blue"
    /> */}
    <App />
  </React.StrictMode>
);
