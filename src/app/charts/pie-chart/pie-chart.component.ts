import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../service/charts.service';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  private gLib: any;
  dataCovid: any[] = [];
  constructor(private chartsService: ChartsService) {
    this.gLib = this.chartsService.getGoogle();
    this.gLib.charts.load('current', { 'packages': ['corechart', 'table'] });
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit() {

  }

  private drawChart() {

    this.chartsService.getCovidData()
      .subscribe(data1 => {
        data1['features'].forEach(eliment => {
          this.dataCovid = eliment['properties'];
        });

        // console.log(this.dataCovid);
        let chart = new this.gLib.visualization.PieChart(document.getElementById('divPieChart'));
    let data = new this.gLib.visualization.DataTable();
        data.addColumn('string', 'situation covid');
        data.addColumn('number', 'statistiques');
        data.addRows([
          ['Cas confirmés', this.dataCovid['Cas_confirmés']],
          ['Décédés', this.dataCovid['Décédés']],
          ['Retablis', this.dataCovid['Retablis']]
         

    ]);
    // console.log(data);
    chart.draw(data);
      })

    
  }
 


}
