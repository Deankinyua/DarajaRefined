import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// * Layouts
import RootLayout from "../Layouts/RootLayout";

// * Pages
import About from "../Pages/About";
import CaseStudies from "../Pages/CaseStudies";
import Culture from "../Pages/Culture";
import Home from "../Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/culture" element={<Culture />}></Route>
      <Route path="/caseStudies" element={<CaseStudies />}></Route>
    </Route>
  )
);
const RootComponent = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default RootComponent;
