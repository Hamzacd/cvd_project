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
          ['mois', 'Cas confirmés ', 'Décédés', 'Retablis'],         
        ];
        data1['features'].forEach(eliment => {
          array.push([eliment['properties'].Date, eliment['properties']
            .Retablis, eliment['properties'].Décédés,
            eliment['properties']
              .Cas_confirmés])
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

}
