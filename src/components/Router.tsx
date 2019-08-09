import React from "react";

import { Route, Link, BrowserRouter } from "react-router-dom";
import Home from './Home'
import Browse from './Browse'
import UserInfo from './UserInfo'
import Purchase from './Purchase'
import Checkout from "./Checkout";
import Navbar from "./Navbar";
import { Switch } from "@material-ui/core";
import HotItems from "./HotItems";


const notFoundPage = () => {
  return <div>Not Found</div>
}

function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <div className="App">
          <header className="App-header">
            <nav id="nav">
              <div id="nav-container">
                <Link to="/">Home</Link>
                <Link to="/browse/">Browse</Link>
                <Link to="/purchase/">Purchase</Link>
                <Link to="/userinfo/">UserInfo</Link>
                <Link to="/checkout/">Checkout</Link>
                <p>More navbar stuff</p>
                <Navbar />
              </div>
            </nav>
          </header>
          <div id='content'>
            {/* switch means that routes closer to the top of the list will be matched first*/}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/browse/" component={Browse} />
              <Route path="/userinfo/" component={UserInfo} />
              <Route path="/purchase/" component={Purchase} />
              <Route path="/checkout/" component={Checkout} />
              <Route path="/hot/" component={HotItems} />
              <Route component={notFoundPage} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default AppRouter;