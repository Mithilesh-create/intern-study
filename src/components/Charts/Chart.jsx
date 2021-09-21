import "./Chart.css";
import ChartBar from "./ChartBar";
import Card from "../UI/Card";
function Chart(props) {
  const valArr=props.dataPoints.map(e=>e.value);
  const TotalMaximum = Math.max(...valArr);
  return (
    <Card className="chart_div">
      {props.dataPoints.map((e) => {
        return (
          <ChartBar
            key={e.label}
            label={e.label}
            maxValue={TotalMaximum}
            value={e.value}
          />
        );
      })}
    </Card>
  );
}

export default Chart;
