import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Akash from "./App";
import ConditionalRendering from "./conditionalRendering";
import Test from "./test";
// import Hidden from "@mui/material/Hidden";

export default class MyRouter extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/path1">
            <button>
              path 1
            </button>
          </Link>

          <Link
            to={{
              pathname: "/path2",
              title: "homepage",
              state: {
                name: "billionlives"
              }
            }}
          >
            path 2
          </Link>


          <Routes>
            <Route path="/" element={<Akash />} />
            <Route path="/path1" element={<ConditionalRendering />} />
            <Route path="/path2" element={<Test />} />
          </Routes>
          This component is created by me
        </BrowserRouter>

      </div>
    )
  }
}