import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { MapChartComponent } from './map-chart/map-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ServiceModule } from './service/service.module'
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { SimpleChartComponent } from './simple-chart/simple-chart.component';
import { MonthlyChartComponent } from './monthly-chart/monthly-chart.component';


@NgModule({
  declarations: [LineChartComponent, MapChartComponent, PieChartComponent, SimpleChartComponent, MonthlyChartComponent],
  imports: [
    CommonModule,
    ServiceModule,
    HttpClientModule
    
  ],
  exports: [LineChartComponent, PieChartComponent,MapChartComponent,MonthlyChartComponent,SimpleChartComponent],
  providers : []
})
export class ChartsModule { }
