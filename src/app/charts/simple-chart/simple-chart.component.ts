import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../service/charts.service';
@Component({
  selector: 'app-simple-chart',
  templateUrl: './simple-chart.component.html',
  styleUrls: ['./simple-chart.component.css']
})
export class SimpleChartComponent implements OnInit {
  dataCovid: any[] = [];
  constructor(private ChartsService:ChartsService) { }

  ngOnInit(): void {
    this.getDtata();
  }
    
  getDtata() {
    this.ChartsService.getCovidData().subscribe( data => {
      let array = [];
      data['features'].forEach(element => {
        array.push([ element['properties']
        .Cas_confirmés, element['properties'].Cas_Jour,
        element['properties']
          .Negative_tests, element['properties']
          .tests_jour,element['properties']
          .Retablis,element['properties']
          .Rtabalis_jour,element['properties']
          .Décédés,
          element['properties']
          .Deces_jour])
      });
      for (let i = 0; i < array.length - 1; i++) {
        this.dataCovid.push(array[i]);
      }
      console.log(this.dataCovid);
    })
  
  }
  
}
