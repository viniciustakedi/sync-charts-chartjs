import { Provider } from "jotai";
import Chart1 from "./components/charts/chart1";
import Chart2 from "./components/charts/chart2";
import "./App.css";

function App() {
  return (
    <Provider>
      <div>
        <Chart1 />
        <Chart2 />
      </div>
    </Provider>
  );
}

export default App;
