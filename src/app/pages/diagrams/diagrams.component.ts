import { Exit } from './../../shared/guards/exitgame.guard';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-diagrams',
  templateUrl: './diagrams.component.html',
  styleUrls: ['./diagrams.component.scss'],
})
export class DiagramsComponent implements OnInit, AfterViewInit, Exit {

  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('barCanvas2') private barCanvas2: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  @ViewChild('lineCanvas2') private lineCanvas2: ElementRef;


  barChart: any;
  barChart2: any;
  lineChart: any;
  lineChart2: any;
  userid: any;
  wcst: any;
  iowa: any;
  mentrot: any;
  bart: any;
  date: any;
  right: any;
  data: any;
  wrongans = [];
  rightans = [];
  gametime = [];
  gametime2 = [];
  gametime3 = [];
  gametime4 = [];
  allmoneyy = [];
  avgreact = [];
  maxwon = [];

  constructor(private dataService: DataService, private authService: AuthService) {
    Chart.register(...registerables);
    this.userid = this.authService.currentUserId;
  }
  ngOnInit() {}

  canExit(): boolean | Observable<boolean> | Promise<boolean>{
      this.clickdestroy();
      return true;
  };


click(){
  window.location.reload();
}

  getWcstData(){
    this.wcst = this.dataService.get(this.userid,'asc','wcst','date').subscribe((data) => {
      this.data = data;
      let num = 0;
      for (const d of this.data){
        this.wrongans.push(d.wrong);
        this.rightans.push(d.right);
        num++;
        this.gametime.push(num);
      }
      this.lineChartMethod(this.wrongans, this.rightans, this.gametime);
    });
  }

  getIowaData(){
    this.iowa = this.dataService.get(this.userid,'asc','iowa','date').subscribe((data) => {
      this.data = data;
      let num = 0;
      for (const d of this.data){
        this.allmoneyy.push(d.allmoney);
        num++;
        this.gametime2.push(num);
      }
      this.barChartMethod(this.allmoneyy, this.gametime2);
    });

  }

  getMentrotData(){
    this.mentrot = this.dataService.get(this.userid,'asc','mentalrotation','date').subscribe((data) => {
      this.data = data;
      let num = 0;
      for (const d of this.data){
        this.avgreact.push(d.avgreacttime);
        num++;
        this.gametime3.push(num);
      }
      this.barChartMethod2(this.avgreact, this.gametime3);
    });
  }

  getBartData(){
    this.bart = this.dataService.get(this.userid,'asc','bart','date').subscribe((data) => {
      this.data = data;
      let num = 0;
      for (const d of this.data){
        this.maxwon.push(d.maxwon);
        num++;
        this.gametime4.push(num);
      }
      this.lineChartMethod2(this.maxwon, this.gametime4);
    });
  }

  ngAfterViewInit() {
    this.getWcstData();
    this.getIowaData();
    this.getMentrotData();
    this.getBartData();
  }


  barChartMethod(arr: any, arr2: any) {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: arr2,
        datasets: [{
          label: 'Össznyeremények',
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
            label: 'Jó válaszok',
            data: arr,
            borderColor: 'rgba(50,205,50)',
            backgroundColor: 'rgba(50,205,50, 0.4)',
            fill: false,
            borderWidth: 3,
            pointRadius: 1,
            pointHoverRadius: 5

          },{
            label: 'Rossz válaszok',
            data: arr2,
            borderColor: 'rgba(220,20,60)',
            backgroundColor: 'rgba(220,20,60, 0.4)',
            fill: false,
            borderWidth: 3,
            pointRadius: 1,
            pointHoverRadius: 5
          }
        ]
      }
    });
  }
  lineChartMethod2(arr2: any, arr3: any) {

    this.lineChart2 = new Chart(this.lineCanvas2.nativeElement, {
      type: 'line',
      data: {
        labels: arr3,
        datasets: [
          {
            label: 'Legnagyobb begyűjtött összeg',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointRadius: 1,
            data: arr2,
            borderWidth: 3
          }
        ]
      }
    });
  }

  barChartMethod2(arr: any, arr2: any) {
    this.barChart2 = new Chart(this.barCanvas2.nativeElement, {
      type: 'bar',
      data: {
        labels: arr2,
        datasets: [{
          label: 'Átlagos reakcióidő (ms)',
          data: arr,
          backgroundColor: [
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)'
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

  clickdestroy(){
    this.lineChart.destroy();
    this.lineChart2.destroy();
    this.barChart.destroy();
    this.barChart2.destroy();
    this.wcst.unsubscribe();
    this.iowa.unsubscribe();
    this.mentrot.unsubscribe();
    this.bart.unsubscribe();
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
 /* @HostListener('window:unload', ['$event'])
  unloadHandler() {
    this.clickdestroy();
  }*/


}

