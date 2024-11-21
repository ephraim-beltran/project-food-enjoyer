import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home } from "../pages/Home";
import { Discover } from "../pages/Discover";
import { Contact } from "../pages/Contact";
import { AboutUs } from "../pages/About Us";
import App from "../App";

export function AppRouter() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/search" element={<Discover />}>
          <Route path=":category/:searchItem" element={<Discover />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>,
    ),
  );

  return <RouterProvider router={routes} />;
}
