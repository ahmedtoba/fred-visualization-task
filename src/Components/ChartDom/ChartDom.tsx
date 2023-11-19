import * as echarts from 'echarts';
import { useEffect, useRef } from "react";

export default function ChartDom (options: any) {
    const chartDom = useRef<HTMLDivElement>(null);
    useEffect(() => {
        let chart: echarts.ECharts | undefined;
        if (chartDom.current !== null) {
            chart = echarts.init(chartDom.current);
        }   
        if (chartDom.current !== null) {
            const chart = echarts.getInstanceByDom(chartDom.current);
            chart?.setOption(options);
        }
    }, [options]);
    
    return <div ref={chartDom} style={{ height: "100%", width: "100%" }} />;
}