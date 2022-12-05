import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import "./scss/style.scss";
import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
