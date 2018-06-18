import { Component, AfterViewInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
	templateUrl: './dashboard2.component.html',
    styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements AfterViewInit {
	subtitle:string;	
	constructor() {
		this.subtitle = "This is some text within a card block."
	}

    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        barThickness : 5
    };

    public lineChartOptions1: any = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0.1)"
            }  
          }],
          xAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0.1)"
            },
          }]
        },
        lineTension:10,
        responsive: true,
        maintainAspectRatio: false,
        elements : { line : { tension : 0 } }    
    };
     
    public barChartLabels: string[] = [
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017'
    ];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = false;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Iphone 8' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Iphone X' }
    ];
    public barChartColors: Array<any> = [
        {backgroundColor: '#24d2b5'},
        {backgroundColor: '#20aee3'}
    ];

    // Sales Analytics Pie chart
    public pieChartLabels: string[] = [
        'Sales',
        'Earning',
        'Cost'
    ];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string = 'pie';
    public lineChartLegend: boolean = false;;
       
	ngAfterViewInit(){
        (<any>$('.spark-count')).sparkline([4, 5, 0, 10, 9, 12, 4, 9, 4, 5, 3, 10, 9, 12, 10, 9, 12, 4, 9], {
            type: 'bar',
            width: '100%',
            height: '70',
            barWidth: '2',
            resize: true,
            barSpacing: '6',
            barColor: 'rgba(255, 255, 255, 0.3)'
        });

        $(".list-task .list-group-item .checkbox label.custom-control").click(function () {
            $(this).toggleClass("task-done");
        });
    }
}