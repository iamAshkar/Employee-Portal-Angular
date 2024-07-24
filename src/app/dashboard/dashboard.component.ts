  import { Component, OnInit } from '@angular/core';
  import { DataService } from '../services/data.service';
  import * as Highcharts from 'highcharts';
  @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
  })
  export class DashboardComponent implements OnInit {
    selected: Date = new Date();

    timeStatus:any= new Date()

    paymentStatus:string="unpaid"
    viewStatus: boolean = false;
    status:string="View "
    dashboardEmail: string;
    adminName:any=""
Highcharts: typeof Highcharts=Highcharts;
chartOptions={};

    constructor(private ds: DataService) {
      this.dashboardEmail = this.ds.dsemail;
      this.chartOptions= {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Employee  Composition'
        },
        tooltip: {
            valueSuffix: '%'
        },
        subtitle: {
            text:
            ''
        },
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f}%',
                    style: {
                        fontSize: '1.2em',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 10
                    }
                }]
            }
        },
        series: [
            {
                name: 'Percentage',
                colorByPoint: true,
                data: [
                    {
                        name: 'active',
                        y: 55.02
                    },
                    {
                        name: 'night-shift',
                        sliced: true,
                        selected: true,
                        y: 26.71
                    },
                    {
                        name: 'full-time',
                        y: 1.09
                    },
                    {
                        name: 'Inactive',
                        y: 15.5
                    },
                    {
                        name: 'sec',
                        y: 1.68
                    }
                ]
            }
        ]
      }
    

    }
    ngOnInit(): void {
      this.adminName = sessionStorage.getItem("admin")||"";
    }

    trainers_Deatils: any[] = [
      { id: 1, name: "sabir", course: "BigData", duration: "3 months" },
      { id: 2, name: "subair", course: "python", duration: "6 months" },
      { id: 3, name: "sukur", course: "java", duration: "7 months" },
      { id: 4, name: "safir", course: "mearn stack", duration: "6 months" },
    ];

    viewDetails() {
      this.viewStatus = !this.viewStatus;
      
     this.viewStatus ? this.status="Hide" : this.status='Show'
    }



  }
