import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileSizePipe } from 'src/app/pipes/file-size.pipe';
import { ShortNumberPipe } from 'src/app/pipes/short-number.pipe';
import { ThemesService } from './../../core/services/themes.service';

@Component({
  selector: 'c-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {
  @Input() areaGraphData: any;
  @Input() activeTitle: string;
  @Input() inActiveTitle: string;
  @Input() showCustomTitle: boolean = false;
  @Input() chartHeight: number;
  @Input() loading: boolean;
  @Output() chartClick = new EventEmitter<any>();
  @Input() xAxisLabel: any;
  @Input() yAxisLabel: any;
  @Input() nameGap: any;
  @Input() grid: any;
  shortNum = new ShortNumberPipe();
  fileSize = new FileSizePipe();
  @Input() postFix: string = '';
  updateOptions: any;
  chartLength: number = 1;

  chartInstance: any;
  options: {};
  initOpts = {
    renderer: 'canvas',
  };
  colorTheme: string;
  colorObj: any;
  loadingOpts: any;
  constructor(private themeSr: ThemesService) {    
    let light = {
      general: '#909090',
      tooltipBg: 'rgba(255,255,255,0.67)',
      labelText: '#5F6367',
      gridColor: '#D0D6DE',
      axisLine: '#EDEFF1',
      color: ['#FFB300'],
      gradientStart: '#FFB300',
      gradientEnd: 'rgba(255, 179, 0, 0)',
      tooltipText: '#5F6367',
      spinner: '#000000',
      maskColor: 'rgba(0, 0, 0, 0.2)',
      nameTextStyle: '#000000',
    };
    let dark = {
      general: '#bbbbbb',
      tooltipBg: 'rgba(37,49,58,0.9)',
      labelText: '#ffffff',
      axisLine: '#383A40',
      gridColor: '#636363',
      color: ['#FFCA28'],
      gradientStart: '#FFCA28',
      gradientEnd: 'rgba(199, 224, 23, 0)',
      tooltipText: '#ffffff',
      spinner: '#bbbbbb',
      maskColor: 'rgba(0, 0, 0, 0.6)',
      nameTextStyle: '#ffffff',
    };

    this.themeSr.currentTheme.subscribe((res) => {
      this.colorTheme = res.theme;
      if (res.theme === 'dark') {
        this.colorObj = { ...dark };
      } else {
        this.colorObj = { ...light };
      }
      this.initChart(this.colorObj);
    });
  }

  ngOnInit() {}

  initChart(colorObj) {
    this.loadingOpts = {
      text: '     ',
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
    let current = this;
    this.options = {
      textStyle: {
        fontFamily: 'rubikregular',
        color: colorObj.general,
        fontSize: 12,
      },
      title: {
        show: false,
      },
      tooltip: {
        trigger: 'axis',
        padding: 5,
        textStyle: {
          color: colorObj.tooltipText,
        },
        backgroundColor: colorObj.tooltipBg,
        extraCssText:
          'backdrop-filter: blur(10px);-webkit-backdrop-filter: blur(10px);border:1px solid var(--panel-border);',
      },
      grid: {
        top: '10px',
        left: '10px',
        right: '10px',
        bottom: '3%',
        containLabel: true,
        height: this.chartHeight,
      },
      legend: {
        show: false,
      },
      color: colorObj.color,
      xAxis: {
        nameLocation: 'middle',
        nameTextStyle: {
          fontWeight: 400,
          color: colorObj.nameTextStyle,
        },
        nameGap: 25,
        type: 'category',
        boundaryGap: false,
        data: [],
        axisTick: false,
        axisLabel: {
          fontSize: 10,
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: colorObj.axisLine,
          },
        },
        axisLine: {
          lineStyle: {
            color: colorObj.gridColor,
          },
        },
      },
      yAxis: {
        type: 'value',
        position: 'left',
        axisTick: false,
        splitNumber: 3,
        splitLine: {
          // SPLITLINE FOR BACKGROUND GRID LINE
          show: false,
          lineStyle: {
            color: colorObj.axisLine,
          },
        },
        axisLabel: {
          fontSize: 10,
          formatter: function (value, index) {
            // Formatted to be month/day; display year only in the first label
            if (current.postFix === 'KB') {
              return current.fileSize.transform(value);
            } else {
              return current.shortNum.transform(value);
            }
          },
        },
        axisLine: {
          lineStyle: {
            color: colorObj.gridColor,
          },
        },
      },
      series: [
        {
          data: [],
          type: 'line',
          symbolSize: 1,
          lineStyle: {
            width: 2,
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: colorObj.gradientStart, // color at 0% position
                },
                {
                  offset: 1,
                  color: colorObj.gradientEnd, // color at 100% position
                },
              ],
              global: false, // false by default
            },
          },
        },
      ],
    };
    if (this.chartInstance) {
      this.ngOnChanges();
    }
  }

  ngOnChanges() {
    this.updateOptions = {
      grid: {
        top: this.grid ? this.grid[0] : '2%',
        right: this.grid ? this.grid[1] : '2%',
        bottom: this.grid ? this.grid[2] : '8%',
        left: this.grid ? this.grid[3] : '4%',
        containLabel: true,
      },
      xAxis: {
        name: this.xAxisLabel,
        type: 'category',
        boundaryGap: false,
        data: this.areaGraphData.date,
        axisTick: false,
        axisLabel: {
          fontSize: 10,
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: this.colorObj.axisLine,
          },
        },
        axisLine: {
          lineStyle: {
            color: this.colorObj.gridColor,
          },
        },
      },
      yAxis: {
        minInterval: 1,
        name: this.yAxisLabel,
        nameLocation: 'middle',
        nameTextStyle: {
          fontWeight: 400,
          color: this.colorObj.nameTextStyle,
        },
        nameGap: this.nameGap ? this.nameGap : 40,
      },
      series: [
        {
          
          data: this.areaGraphData.data,
          type: 'line',
          symbolSize: 1,
          lineStyle: {
            width: 2,
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: this.colorObj.gradientStart, // color at 0% position
                },
                {
                  offset: 1,
                  color: this.colorObj.gradientEnd, // color at 100% position
                },
              ],
              global: false, // false by default
            },
          },
        },
      ],
    };
    if (this.chartInstance) {
      this.chartInstance.setOption(this.options, true);
    }
    // if(this.areaGraphData == []) {
    //   this.chartLength = 0;
    // } else {
    //   this.chartLength = isEmptyTrendline(this.areaGraphData['data']);
    // }
  }

  onChartClick($event) {
    this.chartClick.emit($event);
  }

  onChartInit(e: any) {
    this.chartInstance = e;
  }
}

function isEmptyTrendline(series) {
  let total = series.reduce((accumulator, currentValue) => accumulator + currentValue);
  return total;
}

