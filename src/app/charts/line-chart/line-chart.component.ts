import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../service/charts.service';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  private gLib: any;
  dataCovid: any[] = [];

  constructor(private chartsService: ChartsService) {
    this.gLib = this.chartsService.getGoogle();
    this.gLib.charts.load('current', { 'packages': ['corechart', 'table'] });
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }
  ngOnInit(): void { }
  private drawChart() {
    this.chartsService.getCovidData()
      .subscribe(data1 => {
        let array = [
          ['mois', 'Cas confirmés ', 'Negative tests', 'Retablis', 'Décédés'],
        ];
        data1['features'].forEach(eliment => {
          array.push([this.convert(eliment['properties'].Date), eliment['properties']
            .Cas_confirmés, eliment['properties'].Negative_tests,
          eliment['properties']
            .Retablis, eliment['properties']
            .Décédés]
          )
        });
        for (let i = 0; i < array.length; i++) {
          this.dataCovid.push(array[i]);
        }
        // console.log(this.dataCovid)
        let data = this.gLib.visualization.arrayToDataTable(
          this.dataCovid
        );
        chart.draw(data);
      });
    let chart = new this.gLib.visualization.LineChart(document.getElementById('divLineChart'));
  }
  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    switch (mnth) {
      case "01": {
        return ["jan", day].join(" ");
        break;
      }
      case "02": {
        return ["Feb", day].join(" ");
        break;
      }
      case "03": {
        return ["mar", day].join(" ");
        break;
      }
      case "04": {
        return ["apr", day].join(" ");
        break;
      }
      case "05": {
        return ["may", day].join(" ");
        break;
      }
      case "06": {
        return ["jun", day].join(" ");
        break;
      }
      case "07": {
        return ["jul", day].join(" ");
        break;
      }
      case "08": {
        return ["aug", day].join(" ");
        break;
      }
      case "09": {
        return ["sep", day].join(" ");
        break;
      }
      case "10": {
        return ["oct", day].join(" ");
        break;
      }
      case "11": {
        return ["nov", day].join(" ");
        break;
      }
      case "12": {
        return ["dec", day].join(" ");
        break;
      }


    }


  }

}
