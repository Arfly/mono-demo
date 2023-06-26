import { RouteObject } from 'react-router-dom';
import Workspace from '../view/workspace/workspace';

const workspaceRoutes: RouteObject = {
  path: 'workspace',
  element: <Workspace></Workspace>,
};

export default workspaceRoutes;
