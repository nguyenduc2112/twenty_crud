import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./containers/Main";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  console.log("Go to App!");
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
