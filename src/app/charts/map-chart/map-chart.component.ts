import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { ChartsService } from '../service/charts.service';
@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.css']
})
export class MapChartComponent implements OnInit {


  ngOnInit(): void {
    this.mapData();
  }

  private mapData() {
    const map = L.map('frugalmap').setView([29.0,
      -9.0], 5);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(map);

    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });

    this.chartsService.getCovidData()
      .subscribe(data => {
        data['features'].forEach(eliment => {
          // console.log(eliment['properties']);
          L.marker([eliment['geometry'].coordinates[1], eliment['geometry'].coordinates[0]], { icon: myIcon }).bindPopup(eliment['properties'].GlobalID).addTo(map);
        });

      })

  }
  constructor(private chartsService: ChartsService) { }
}
