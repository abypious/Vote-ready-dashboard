import React from "react";
import ReactApexChart from "react-apexcharts";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      options: {
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },
        xaxis: {
          categories: [
            "Lvl 1",
            "Lv1 2",
            "Lvl 3",
            "Lvl 4",
            "Lvl 5",
            "Lvl 6",
            "Lvl 7",
            "Lvl 8",
            "Lvl 9",
            "Lvl 10",
          ],
          position: "top",
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
        title: {
          text: "Levels Completed by presiding officers",
          floating: true,
          offsetY: 330,
          align: "center",
          style: {
            color: "#444",
          },
        },
      },
    };
  }

  componentDidUpdate(prevProps) {
    // Check if the statData prop has changed
    // eslint-disable-next-line react/prop-types
    if (prevProps.statData !== this.props.statData) {
      // Update the series data with new values from props
      // eslint-disable-next-line react/prop-types
      const seriesData = Object.values(this.props.statData);
      this.setState({
        series: [
          {
            name: "Completed",
            data: seriesData,
          },
        ],
      });
    }
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default Graph;
