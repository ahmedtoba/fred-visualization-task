import { Card } from "antd";
import { useFredSeries } from "../../Hooks/useFredSeries.query";
import Chart from "../../Components/Chart/Chart";
import { DataPoint } from "../../Models/data-point.model";

export default function LineChart() {  
  const seriesId = "DGS10 minus T10YIE";

  const firstSet = "DGS10";
  const secondSet = "T10YIE";

  const { data: firstDataSet, isLoading: firstSetIsLoading } = useFredSeries(firstSet);
  const { data: secondDataSet, isLoading: secondDataSetIsLoading } = useFredSeries(secondSet);

  const chartData : DataPoint[] = firstDataSet?.observations.map((observation, index) => {
    return {
      name: observation.date,
      value: parseInt(observation.value) - (parseInt(secondDataSet?.observations[index]?.value || "") || 0),
    };
  }) || [];

  const maxY = Math.max(...chartData.map((data) => data.value));

  return (
    <Card
      bodyStyle={{ height: 800, width: "100%" }}
      title="Bar Chart"
      loading={firstSetIsLoading || secondDataSetIsLoading}
    >
     <Chart chartData={chartData} maxY={maxY} chartType="line" title="Observation" /> 
    </Card>
  );
}
