import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app.js";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavePage from "./components/favePage.js";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="faves" element={<FavePage />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
