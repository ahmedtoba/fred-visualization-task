import { Card } from "antd";
import { useFredSeries } from "../../Hooks/useFredSeries.query";
import Chart from "../../Components/Chart/Chart";
import { DataPoint } from "../../Models/data-point.model";

export default function LineAreaChart() {  
  const seriesId = "T10Y2Y";

// Now use these formatted dates in your API request
const { data, isLoading } = useFredSeries(seriesId);

  const chartData : DataPoint[] = data?.observations.map((observation) => {
    return {
      name: observation.date,
      value: parseInt(observation.value),
    };
  }) || [];

  const maxY = Math.max(...chartData.map((data) => data.value));

  return (
    <Card
      bodyStyle={{ height: 800, width: "100%" }}
      title="Line Area Chart"
      loading={isLoading}
    >
     <Chart chartData={chartData} maxY={maxY} chartType="line" title="Observation" areaStyle={true}/> 
    </Card>
  );
}
