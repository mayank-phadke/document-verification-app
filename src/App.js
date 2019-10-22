import React from "react";
import HomePage from "./Pages/Home/HomePage.jsx"
import LoginPage from "./Pages/Login/LoginPage.jsx"
import PrivateRoute from "./Componenets/PrivateRoute.jsx";
import { Switch, Route, BrowserRouter } from "react-router-dom";

let routes = (
    <Switch>
        <Route path="/login" component={ LoginPage } />
        <PrivateRoute path="/" component={ HomePage } />
    </Switch>
)

function App() {
    return (
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    );
}

export default App;
