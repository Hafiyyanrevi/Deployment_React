import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import router from "./components/config/router";
import store from "./components/config/redux/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {router.map((route, index) => {
              return (
                <Route path={route.path} element={route.element} key={index} />
              );
            })}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
