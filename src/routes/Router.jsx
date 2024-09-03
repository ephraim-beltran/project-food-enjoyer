import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App.jsx";
import { Home } from "../pages/Home";
import { Maps } from "../pages/Maps";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="maps" element={<Maps />} />
    </Route>,
  ),
);

export function Router() {
  return <RouterProvider router={routes} />;
}
