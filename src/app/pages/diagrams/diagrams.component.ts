import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { LineController, LineElement, PointElement, LinearScale, Title,CategoryScale, Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-diagrams',
  templateUrl: './diagrams.component.html',
  styleUrls: ['./diagrams.component.scss'],
})
export class DiagramsComponent implements OnInit, AfterViewInit, OnDestroy {

  // Importing ViewChild. We need @ViewChild decorator to get a reference to the local variable
  // that we have added to the canvas element in the HTML template.
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;


  barChart: any;
  doughnutChart: any;
  lineChart: any;
  userid: any;
  wcst: any;
  iowa: any;
  date: any;
  right: any;
  data: any;
  wrongans = [];
  rightans = [];
  gametime = [];
  gametime2 = [];
  allmoney = [];

  constructor(private dataService: DataService, private authService: AuthService) {
    Chart.register(...registerables);
    this.userid = this.authService.currentUserId;
  }
  ngOnInit() {
    //this.getWcstData();
    //this.getIowaData();

  }
click(){
  window.location.reload();
}
  getWcstData(){
    this.wcst = this.dataService.get(this.userid,'wcst','right').subscribe((data) => {
      this.data = data;
      let num = 0;
      for (const d of this.data){
        this.wrongans.push(d.wrong);
        this.rightans.push(d.right);
        num++;
        this.gametime.push(num);
      }
      this.lineChartMethod(this.wrongans, this.wrongans, this.gametime);
      //this.lineChart.destroy();
    });
  }

  getIowaData(){
    this.iowa = this.dataService.get(this.userid,'iowa','wonmoney').subscribe((data) => {
      this.data = data;
      let num = 0;
      for (const d of this.data){
        this.allmoney.push(d.allmoney);
        num++;
        this.gametime.push(num);
      }
      this.barChartMethod(this.allmoney, this.gametime);
      //this.barChart.destroy();
    });

  }

  // When we try to call our chart to initialize methods in ngOnInit() it shows an error nativeElement of undefined.
  // So, we need to call all chart methods in ngAfterViewInit() where @ViewChild and @ViewChildren will be resolved.
  ngAfterViewInit() {
    this.getWcstData();
    this.getIowaData();
  }


  barChartMethod(arr: any, arr2: any) {
    // Now we need to supply a Chart element reference with an object that defines the type of chart we want
    //to use, and the type of data we want to display.
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: arr2,
        datasets: [{
          label: '# of Votes',
          data: arr,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: {
              beginAtZero: true
          }
        }
      }
    });
  }

  lineChartMethod(arr: any, arr2: any, arr3?: any) {

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: arr3,
        datasets: [
          {
            label: 'Helyes válaszok',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: arr2,
            borderWidth: 3,
          }
        ]
      }
    });
  }

  ngOnDestroy() {
    this.wcst.unsubscribe();
    this.iowa.unsubscribe();
    this.barChart.clear();
    this.lineChart.clear();
    this.barChart.destroy();
    this.lineChart.destroy();
  }
}
