import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { path: "chat", element: <Chat /> }
        ]
      }
    ]
  }
]);
