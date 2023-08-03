
import { 
  createBrowserRouter,
} from "react-router-dom";
import { 
  HomePage,
  ErrorHandler, 
} from "@/pages";
import { AppContainer } from "@/components";


export const Router = createBrowserRouter([
  {
    path: "/",
    Component: AppContainer,
    errorElement:<ErrorHandler/>,
    children: [
      {
        index: true,
        Component: HomePage,
        errorElement:<ErrorHandler/>,
      },
    ],
  },
]);


if (import.meta.hot) {
  import.meta.hot.dispose(() => Router.dispose());
}


