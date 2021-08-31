import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {GARAGE_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
   const {user} = useContext(Context);
   console.log(user);
   return (
       <Switch>
          {user.isAuth && authRoutes.map(({path, Component}) =>
            <Route path={path} component={Component} key={path} exact />
          )}
          {publicRoutes.map(({path, Component}) =>
              <Route path={path} component={Component} key={path} exact />
          )}
          <Redirect to={GARAGE_ROUTE} />
       </Switch>
   );
};

export default AppRouter;