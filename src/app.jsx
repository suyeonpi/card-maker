import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";
import Maker from "./components/maker/maker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = ({ FileInput, authService, cardRepository }) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route exact path="/maker">
            <Maker
              FileInput={FileInput}
              authService={authService}
              cardRepository={cardRepository}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
