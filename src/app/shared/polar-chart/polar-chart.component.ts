import { ThemesService } from './../../core/services/themes.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from "@angular/core";
import { ShortNumberPipe } from "src/app/pipes/short-number.pipe";
import { LoggerService } from 'src/app/core/Logger/logger-service';


@Component({
  selector: "c-polar-chart",
  templateUrl: "./polar-chart.component.html",
  styleUrls: ["./polar-chart.component.scss"],
  encapsulation:ViewEncapsulation.None
})
export class PolarChartComponent implements OnInit {
  @Input("graphData") graphData111: any;
  graphData?:any|undefined;
  @Input() isLoading: boolean;
  @Output() chartClick = new EventEmitter<any>();
  updateOption: any;
  chartInstance: any;
  chartHeight: number;
  legendFirstClick: boolean;
  options: {};
  initOpts = {
    renderer: "canvas",
  };

  colorTheme: string;
  colorObj: any;
  loadingOpts: any;
  chartLength: number = 1;
 
  constructor(private themeSr: ThemesService,private log: LoggerService) {
    this.legendFirstClick = true;
    let light = {
      general: "#909090",
      spinner: "#000000",
      colors: [
        "#FF6E00",
        "#FF8F00",
        "#F0AF00",
        "#FFEC00",
        "#36B157",
        "#26D7AE",
        "#1AA6C7",
        "#8399EB",
        "#8E6CEF",
        "#C758D0",
      ],
      axisBorder: "#D0D6DE",
      maskColor: "rgba(0, 0, 0, 0.2)",
      axisLabel: "#000000",
    };
    let dark = {
      general: "#bbbbbb",
      spinner: "#bbbbbb",
      colors: [
        "#FF6E00",
        "#FF8F00",
        "#F0AF00",
        "#FFEC00",
        "#36B157",
        "#26D7AE",
        "#1AA6C7",
        "#8399EB",
        "#8E6CEF",
        "#C758D0",
      ],
      axisBorder: "rgb(112,112,112)",
      maskColor: "rgba(0, 0, 0, 0.6)",
      axisLabel: "#ffffff",
    };

    this.themeSr.currentTheme.subscribe((res) => {
      this.colorTheme = res.theme;
      if (res.theme === "dark") {
        this.colorObj = { ...dark };
      } else {
        this.colorObj = { ...light };
      }
      this.initChart(this.colorObj);
    });
    this.graphData = {};
    let res = {
      ASSET_INVENTORY: 10,
      WHOIS: 20,
      WEBSITE: 30,
      DNS: 40,
      SSL: 100,
      DOMAIN_SQUATTING: 60,
      BEACHES: 70,
      THREATS: 20,
    };

    let a = res.ASSET_INVENTORY;
    let b = res.WHOIS;
    let c = res.WEBSITE;
    let d = res.DNS;
    let e = res.SSL;
    let f = res.DOMAIN_SQUATTING;
    let g = res.BEACHES;
    let h = res.THREATS;
    let x = Object.values(res).some((res) => {
      return res === 0;
    });
    let labels = [];
    Object.keys(res).forEach((str) => {
      labels.push(str);
    });
    this.graphData = {
      data: [
        {
          value: x ? res.ASSET_INVENTORY : a,
          itemStyle: {
            color: "red",
          },
        },
        {
          value: x ? res.WHOIS : b,
          itemStyle: {
            color: "green",
          },
        },
        {
          value: x ? res.WEBSITE : c,
          itemStyle: {
            color: "yellow",
          },
        },
        {
          value: x ? res.DNS : d,
          itemStyle: {
            color: "pink",
          },
        },
        {
          value: x ? res.SSL : e,
          itemStyle: {
            color: "pink",
          },
        },
        {
          value: x ? res.DOMAIN_SQUATTING : f,
          itemStyle: {
            color: "orange",
          },
        },
        {
          value: x ? res.BEACHES : g,
          itemStyle: {
            color: "yellow",
          },
        },
        {
          value: x ? res.THREATS : h,
          itemStyle: {
            color: "white",
          },
        },
      ],
      label: labels,
      valueArr: Object.values(res),
    };
    this.log.logInfo(this.graphData);
    
  }
  initChart(colorObj) {
    this.legendFirstClick = true;
    this.loadingOpts = {
      text: "     ",
      color: colorObj.spinner,
      textColor: colorObj.general,
      maskColor: colorObj.maskColor,
      zlevel: 0,
      showSpinner: true,
      // Radius of the "spinner". Available since `v4.8.0`.
      spinnerRadius: 20,
      // Line width of the "spinner". Available since `v4.8.0`.
      lineWidth: 3,
    };
    this.options = {
      angleAxis: {
        type: "category",
        data: [],
        startAngle: 90,
        axisTick: false,
        interval: 0,
        axisLine: {
          lineStyle: {
            color: colorObj.axisBorder,
            type: "dashed",
          },
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: colorObj.axisBorder,
          },
        },
        axisLabel: {
          // formatter: '{value}\nChanged',
          fontSize: 12,
          lineHeight: 14,
          align: "center",
          color: colorObj.axisLabel,
        },
      },
      radiusAxis: {
        axisLabel: {
          show: true,
          lineStyle: {
            color: this.colorObj.axisLabel,
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: this.colorObj.axisLabel,
          },
        },
        splitNumber: 10,
        axisTick: {
          lineStyle: {},
          show: true,
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: colorObj.axisBorder,
          },
        },
      },
      polar: {
        radius: window.innerWidth > 1365 ? "80%" : "65%",
      },
      series: [
        {
          type: "bar",
          data: [],
          barWidth: 100,
          coordinateSystem: "polar",
          name: "Device Changes",
        },
      ],
      legend: {
        show: false,
      },
    };
    // if (this.chartInstance) {
      this.chartInstance.setOption(this.options, true); 
    // }
  }

  ngOnInit(): void {
  
  }
  ngOnChanges() {
    const shortNum = new ShortNumberPipe(); 









  
    this.updateOption = {};
    this.updateOption = {
      angleAxis: {
        data: this.graphData.label,
        axisLabel: {
          formatter: function (value, index) {
            // let snum = shortNum.transform(dataVal[index]);
            let text = ["{b|" + value + "}"];
            return text.join("\n");
          },
          rich: {
            a: {
              color: this.colorObj.axisLabel,
              fontSize: 12,
              lineHeight: 24,
              align: "center",
            },
            b: {
              color: this.colorObj.axisLabel,
              fontSize: 11,
              lineHeight: 14,
              align: "center",
            },
          },
        },
      },
      series: [
        {
          data: this.graphData.data,
        },
      ],
    };
    if (this.chartInstance) {
      this.chartInstance.setOption(this.options, true);
    }

    if (this.graphData["valueArr"] === []) {
      this.chartLength = 0;
    } else {
      this.chartLength = isEmptyTrendline(this.graphData["valueArr"]);
    }
  }

  onChartInit(e: any) {
    this.chartInstance = e;
  }

  onChartClick($event) {
    this.chartClick.emit($event);
  }
}

function isEmptyTrendline(data) {
  let total = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return total;
}
