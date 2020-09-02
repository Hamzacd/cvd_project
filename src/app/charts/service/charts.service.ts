import { Injectable } from '@angular/core';
import { ServiceModule } from './service.module';
import { HttpClient } from '@angular/common/http';
declare var google: any;
@Injectable({
  providedIn: ServiceModule
})
export class ChartsService {
  private url = 'https://opendata.arcgis.com/datasets/454f46db2cfd49fca37245541810d18b_5.geojson';
  private google: any;
  constructor(private http: HttpClient) {
    this.google = google;
  }

  getGoogle() {
    return this.google;
  }
  getCovidData() {
    return this.http.get(this.url);
  }
}
