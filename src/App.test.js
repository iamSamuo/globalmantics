
import createRoot  from "react-dom";
import App from "./main-page";
import ReactDOM from "react-dom";
it("renders without crashing", () => {
  const div = document.createElement("div");
  createRoot.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
