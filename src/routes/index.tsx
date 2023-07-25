
import AddBookForm from "@/components/AddBook/AddBookForm";
import DetaiilsBook from "@/components/Details/DetaiilsBook";
import RegistrationNew from "@/components/Ragistration/RegistrationNew";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    
    },
    {
        path: "/register",
        element: <RegistrationNew />,
      
      },
      {
        path: `/details/:id`,
        element: <DetaiilsBook />,
      
      },
      {
        path: `/add-book`,
        element:(
          <PrivateRoute>
             <AddBookForm />
          </PrivateRoute>
        )
      
      }

      
  ]);

  export default routes;
