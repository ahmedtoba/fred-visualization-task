import { DataPoint } from "../../Models/data-point.model";
import { ChartUtil } from "../../Utilities/chart.util";
import ReactEcharts from "echarts-for-react";

interface Props {
    chartData: DataPoint[],
    maxY: number,
    chartType: any,
    title: string,
    areaStyle?: boolean
}

export default function Chart ({
    chartData,
    maxY,
    chartType = "line",
    title,
    areaStyle = false
}: Props) {
  console.log("Props:", { chartData, maxY, chartType, title, areaStyle });
  const option = {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      top: 50,
      bottom: 160,
      right: 20,
      left: 55,
    },
    animation: false,
    dataZoom: [
      {
        height: 20,
        type: "slider",
        xAxisIndex: 0,
        filterMode: "none",
        top: 10,
      },
      {
        type: "inside",
        xAxisIndex: 0,
        filterMode: "none",
      },
    ],
    xAxis: [
      {
        type: "category",
        axisLabel: {
          show: true,
          interval: 0,
          rotate: 90,
        },
        nameGap: 40,
        nameLocation: "middle",
        data: chartData.map((data) => data.name),
      },
    ],
    yAxis: [
      {
        name: title,
        type: "value",
        nameGap: 40,
        nameLocation: "middle",
        ...ChartUtil.getAxisRange(0, maxY),
        
      },
    ],
    // @ts-ignore
    series: [
      {
        name: title,
        type: chartType,
        data: chartData,
        color: "#1890ff",
        areaStyle: areaStyle ? {} : undefined,
      },
    ],
  };
  
  return (
    <ReactEcharts option={option} style={{ height: "100%", width: "100%" }} />
  )
}