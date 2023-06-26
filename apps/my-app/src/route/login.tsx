import { RouteObject } from 'react-router-dom';
import Login from '../view/login/login';

const loginRoutes: RouteObject = {
  path: 'login',
  element: <Login></Login>,
};

export default loginRoutes;
