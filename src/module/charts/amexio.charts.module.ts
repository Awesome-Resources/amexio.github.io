import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonDataService} from "../services/data/common.data.service";


import {ChartLegendComponent} from "./chartlegend/chart.legend.component";
import {ChartTitleComponent} from "./charttitle/chart.title.component";
import {PieChartComponent} from "./piechart/pie.chart.component";
import {AreaChartComponent} from "./areachart/area.chart.component";
import {ChartAreaComponent} from "./chartarea/chart.area.component";
import {ColumnChartComponent} from "./columnchart/column.chart.component";
import {DonutChartComponent} from "./donutchart/donut.chart.component";
import {HistogramChartComponent} from "./histogramchart/histogram.chart.component";
import {LineChartComponent} from "./linechart/line.chart.component";
import {BarChartComponent} from "./barchart/bar.chart.component";
import {TimeLineChartComponent} from "./timelinechart/timeline.chart.component";
import {ComboChartComponent} from "./combochart/combo.chart.component";
import {VerticalAxisComponent} from "./verticalaxis/chart.verticalaxis.component";
import {HorizontalAxisComponent} from "./horizontalaxis/chart.horizontalaxis.component";
import {BubbleChartComponent} from "./bubblechart/bubble.chart.component";
import {ScatterChartComponent} from "./scatterchart/scatter.chart.component";
import {CandlestickChartComponent} from "./candlestickchart/candlestick.chart.component";
import {CandlestickWaterfallChartComponent} from "./candlestickwaterfallchart/candlestickwaterfall.chart.component";
import {ChartLoaderService} from "./chart.loader.service";
import {HttpClientModule} from "@angular/common/http";

export  * from "./chartlegend/chart.legend.component";
export  * from  "./charttitle/chart.title.component";
export  * from "./piechart/pie.chart.component";
export  * from  "./areachart/area.chart.component";
export  * from  "./chartarea/chart.area.component";
export  * from  "./columnchart/column.chart.component";
export  * from  "./donutchart/donut.chart.component";
export  * from  "./histogramchart/histogram.chart.component";
export  * from "./linechart/line.chart.component";
export  * from  "./barchart/bar.chart.component";
export * from  "./timelinechart/timeline.chart.component";
export * from "./combochart/combo.chart.component";
export * from "./combochart/combo.chart.component";
export * from "./verticalaxis/chart.verticalaxis.component";
export * from "./horizontalaxis/chart.horizontalaxis.component";
export * from "./bubblechart/bubble.chart.component";
export * from "./scatterchart/scatter.chart.component";
export * from "./candlestickchart/candlestick.chart.component";
export * from "./candlestickwaterfallchart/candlestickwaterfall.chart.component";

export * from '../services/data/common.data.service';
export * from './chart.loader.service';

const CHART_COMPONENTS = [
  AreaChartComponent, BarChartComponent, ChartAreaComponent,
  ChartLegendComponent, ChartTitleComponent, ColumnChartComponent,
  DonutChartComponent, HistogramChartComponent, LineChartComponent,
  PieChartComponent,TimeLineChartComponent,ComboChartComponent,
  VerticalAxisComponent,
  HorizontalAxisComponent,
  BubbleChartComponent,
  ScatterChartComponent,CandlestickChartComponent,CandlestickWaterfallChartComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: CHART_COMPONENTS,
  declarations: CHART_COMPONENTS,
  providers: [CommonDataService,ChartLoaderService]
})
export class AmexioChartsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AmexioChartsModule,
      providers: [CommonDataService,ChartLoaderService]
    };
  }
}
