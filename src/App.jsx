import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import Watch from "./components/Watch";
import SearchResults from "./components/SearchResults";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainComponent />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
      {
        path: "/search",
        element: <SearchResults />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
