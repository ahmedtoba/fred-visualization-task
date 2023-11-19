import { Card } from "antd";
import { useFredSeries } from "../../Hooks/useFredSeries.query";
import { DateUtil } from "../../Utilities/date.util";
import Chart from "../../Components/Chart/Chart";
import { DataPoint } from "../../Models/data-point.model";

export default function BarChart() {  
  const seriesId = "GDPCA";

// Start date (20 years ago)
const startDate = new Date();
startDate.setFullYear(startDate.getFullYear() - 20);

const formattedStartDate = DateUtil.formatDate(startDate);

// Now use these formatted dates in your API request
const { data, isLoading } = useFredSeries(seriesId, formattedStartDate);

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
      title="Bar Chart"
      loading={isLoading}
    >
     <Chart chartData={chartData} maxY={maxY} chartType="bar" title="Observation" /> 
    </Card>
  );
}
