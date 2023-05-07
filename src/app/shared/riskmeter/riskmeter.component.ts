import { Component, Input, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
// import { SelfAssesmentService } from "../../../../services/selfAssesment.service";
import { SelfAssesmentService } from "../../modules/vrm/services/selfAssesment.service";

@Component({
  selector: "app-riskmeter",
  templateUrl: "./riskmeter.component.html",
  styleUrls: ["./riskmeter.component.scss"],
})
export class RiskmeterComponent implements OnInit {
  chartData: any = [];
  title: any;
  options: {};
  @Input() domainName: any;
  errorMessage: string;

  constructor(
    public translate: TranslateService,
    private selfservice: SelfAssesmentService
  ) {
    translate.addLangs(["en", "de"]);
    translate.setDefaultLang("en");
  }

  ngOnInit(): void {
    // this.chartData = [];
    // let res = { Domain: "admin.com", Final_Repuatation_score: 740, ag: "Good" };
    // let data = [];
    // if (res) {
    //   data.push(res);
    // } else {
    //   data = [];
    // }
    // this.chartData = data;
    // this.selfservice.Reputation(this.domainName).subscribe((res: any) => {
    //   this.chartData = [];
    //   let data = [];
    //   if (res) {
    //     data.push(res);
    //   } else {
    //     data = [];
    //   }
    //   this.chartData = data;

    //   // this.chartData = [];
    //   // let res = { Domain: "admin.com", Final_Repuatation_score: 740, ag: "Good" };
    //   // let data = [];
    //   // if (res) {
    //   //   data.push(res);
    //   // } else {
    //   //   data = [];
    //   // }
    //   this.chartData = data;
    //   this.initChart(this.chartData);
    // });
  }

  ngOnChanges() {
    if(this.domainName){
      this.selfservice.Reputation(this.domainName).subscribe((res: any) => {
      this.chartData = [];
      let data = [];
      if (res) {
        data.push(res);
      } else {
        data = [];
      }
      this.chartData = data;

      // this.chartData = [];
      // let res = { Domain: "admin.com", Final_Repuatation_score: 740, ag: "Good" };
      // let data = [];
      // if (res) {
      //   data.push(res);
      // } else {
      //   data = [];
      // }
      this.chartData = data;
      this.initChart(this.chartData);
    });
    if (this.chartData.length > 0) {
      this.initChart(this.chartData);
    } else {
      this.errorMessage = "No data found...";
    }
  }
  }

  initChart(data) {
    this.options = {
      series: [
        {
          type: "gauge",
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 1000,
          axisLine: {
            lineStyle: {
              width: 15,
              opacity: 0.5,
              color: [
                [0.649, "#E32D2D"],
                [0.774, "#FFBE33"],
                [1, "#14B350"],
              ],
            },
          },
          pointer: {
            length: "95%",
          },
          // anchor: {
          //   show: true,
          //   showAbove: true,
          //   size: 255,
          //   itemStyle: {
          //     borderWidth: 10
          //   }
          // },
          axisTick: {
            distance: 0,
            length: 0,
            lineStyle: {
              color: "#fff",
              width: 2,
            },
          },
          splitLine: {
            distance: 10,
            length: 0,
            lineStyle: {
              color: "#fff",
              width: 4,
            },
          },
          axisLabel: {
            color: "#d5d5d5",
            fontSize: 18,
            distance: -60,
            padding: [30, -20, 0, -8],
            formatter: function (value) {
              if (value === 300) {
                return "Poor";
              } else if (value === 700) {
                return "Good";
              } else if (value === 900) {
                return "Excellent";
              }
              return "";
            },
          },
          detail: {
            valueAnimation: true,
            formatter: "{value}",
            color: "auto",
            offsetCenter: [0, "-30%"],
          },
          data: [
            {
              value: data[0].Final_Repuatation_score,
              itemStyle: {
                color: "#838488",
              },
            },
          ],
        },
      ],
    };
  }

  onChartInit($event) {}
}
