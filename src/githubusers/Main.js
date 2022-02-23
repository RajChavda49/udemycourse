import React from "react";
import "./main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { Auth0Provider } from "@auth0/auth0-react";
// import AuthWrapper from "./pages/AuthWrapper";
import PrivateRoute from "./pages/PrivateRoute";
import { GithubProvider } from "./context/context";
import AuthWrapper from "./pages/AuthWrapper";
function App() {
  return (
    <Auth0Provider
      domain="dev-a90g-mui.us.auth0.com"
      clientId="lbzjuIMRsqGStOoyZ2FbEJqeMnxzgwGM"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <AuthWrapper>
          <Router>
            <Switch>
              <PrivateRoute path="/" exact={true}>
                <Route path="/" component={Dashboard} />
              </PrivateRoute>
              <Route path="/login" component={Login} />
              <Route path="*" component={Error} />
            </Switch>
          </Router>
        </AuthWrapper>
      </GithubProvider>
    </Auth0Provider>
  );
}

export default App;
