import {CAR_ROUTE, GARAGE_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Garage from "./pages/Garage/Garage";
import CarPage from "./pages/CarPage/CarPage";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";

export const authRoutes = [
   {
      path: GARAGE_ROUTE,
      Component: Garage
   },
   {
      path: CAR_ROUTE,
      Component: CarPage
   },
   {
      path: PROFILE_ROUTE,
      Component: Profile
   }
];

export const publicRoutes = [
   {
      path: LOGIN_ROUTE,
      Component: Auth
   },
   {
      path: REGISTRATION_ROUTE,
      Component: Auth
   }
];