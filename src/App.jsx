import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React, { Suspense } from "react"
import PageWrapper from "./components/PageWrapper";

const NoRoute = React.lazy(() => import("./pages/404"))
const Home = React.lazy(() => import("./pages/Home/Home"))
const Contact = React.lazy(() => import("./pages/Contact/Contact"))
const Company = React.lazy(() => import("./pages/Company/Company"))
const Imprint = React.lazy(() => import("./pages/Imprint"))
const Investors = React.lazy(() => import("./pages/Investors/Investors"))
const Products = React.lazy(() => import("./pages/Products/Products"))

//Testing out the new createBrowserRouter with the ScrollRestoration feature
const router = createBrowserRouter([
  {
    path: "*",
    element: <PageWrapper><NoRoute /></ PageWrapper>,
  },
  {
    path: "/",
    element: <PageWrapper><Home /></ PageWrapper>
  },
  {
    path: "/company",
    element: <PageWrapper><Company /></ PageWrapper>,
  },
  {
    path: "/contact",
    element: <PageWrapper><Contact /></ PageWrapper>,
  },
  {
    path: "/investors",
    element: <PageWrapper><Investors /></ PageWrapper>
  },
  {
    path: "/products",
    element: <PageWrapper><Products /></ PageWrapper>,
  },
  {
    path: "/imprint",
    element: <PageWrapper><Imprint /></ PageWrapper>,
  },
]);

function App() {
  return (
    <div className="App" aria-label="example website">
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  )
}

export default App
