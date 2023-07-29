
import AddBookForm from "@/components/AddBook/AddBookForm";
import UpdateBook from "@/components/AddBook/UpdateBook";
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
      
      },
      {
        path: `/update-book/:id`,
        element:(
          <PrivateRoute>
             <UpdateBook />
          </PrivateRoute>
        )
      
      }

      
  ]);

  export default routes;
