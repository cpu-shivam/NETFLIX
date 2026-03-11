import { Provider } from "react-redux";
import { appRouter } from "./components/Body";
import { RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
