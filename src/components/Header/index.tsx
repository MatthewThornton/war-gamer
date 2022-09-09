import React from "react";
import {
  Link
} from "react-router-dom";

import Profile from "./Profile";

export default () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
\
        <Profile />
      </ul>
    </div>
  )
}
