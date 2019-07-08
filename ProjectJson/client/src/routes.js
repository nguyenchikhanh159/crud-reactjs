import React from "react";
import NotFoundPage from "./pages/NotFoundPage";
import ListCategory from "./manageadmin/ListCategory";
import ListForm from "./manageadmin/ListForm";
import Login from './login/Login';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <ListCategory />
  },
  {
    path: "/product-list",
    exact: false,
    main: () => <ListCategory />
  },
  {
    path: "/product/add",
    exact: false,
    main: ({ history,location }) => <ListForm history={history} location={location}  />
  },
  {
    path: "/product/:id/edit",
    exact: false,
    main: ({ match, history }) => <ListForm match={match} history={history} />
  },
  {
    path: "/login",
    exact: false,
    main: ({ location }) => < Login location={location} />
  },
  {
    path: "",
    exact: true,
    main: () => <NotFoundPage />
  }
];
export default routes;
