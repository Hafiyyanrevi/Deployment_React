import CreateProduct from "../../pages/CreateProduct.pages";
import Landing from "../../pages/Landing.pages";
import CreateAccount from "../../pages/CreateAccount.pages";

const router = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/Create Product",
    element: <CreateProduct />,
  },
  {
    path: "/Create Account",
    element: <CreateAccount />,
  },
];

export default router;
