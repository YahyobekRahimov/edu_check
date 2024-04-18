import { LineChart as LineChartBase } from "@mui/x-charts";
import styled from "@emotion/styled";
import { useAppSelector } from "../../../hooks/redux-hooks";

const LineChart = styled(LineChartBase)`
  & .MuiChartsAxis-tick {
    color: white !important;
    background: white !important;
    fill: white !important;
    stroke: white !important;
  }
`;

export default function ChartPayments() {
  const isDark = useAppSelector((state) => state.isDark);
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          color: "#0f9115",
        },
      ]}
      width={1000}
      height={500}
      sx={
        isDark
          ? {
              "& .MuiChartsAxis-tick": {
                stroke: "var(--white-text) !important",
              },
              "& .MuiChartsAxis-tickLabel": {
                fill: "var(--white-text) !important",
              },
              "& .MuiChartsAxis-line": {
                stroke: "var(--white-text) !important",
              },
              "& .MuiChartsAxisHighlight-root": {
                stroke: "var(--white-text) !important",
              },
            }
          : {}
      }
    />
  );
}
