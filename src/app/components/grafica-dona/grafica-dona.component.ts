import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [
  ]
})
export class GraficaDonaComponent implements OnInit {
  @Input() doughnutChartLabels: Label[];
  @Input() doughnutChartData: MultiDataSet;
  @Input() doughnutChartType: ChartType;
  @Input() leyenda: string;

  constructor() {
    this.doughnutChartLabels = [];
    this.doughnutChartData = [];
    this.doughnutChartType = 'doughnut';
    this.leyenda = '';

  }

  ngOnInit(): void {
  }

}
