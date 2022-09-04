import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NotesService } from '../services/notes.service';
import Chart from 'chart.js/auto';
import { Note } from '../data-add/note';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.page.html',
  styleUrls: ['./trends.page.scss'],
})
export class TrendsPage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;

  lineChartTemperature: any;
  lineChartBloodPressure: any;
  lineChartWeight:any;

  notes:Note[];
  temperature: number[];
  date: Date[];
  diastolicBloodPressure: number[];
  systolicBloodPressure: number[];
  maxsystolicBloodPressure:number[];
  minsystolicBloodPressure:number[];
  maxdiastolicBloodPressure:number[];
  mindiastolicBloodPressure:number[];
  weight:number[];

  constructor(private noteService:NotesService) {}
  
  ngOnInit() {
    this.getNotes();
  }
  
  get getTemp():number[]{
    return this.temperature;
  }

  get getDate():Date[]{
    return this.date;
  }

  get getStystolicBloodPressure(): number[]{
    
    return this.systolicBloodPressure;
  }
  get getMaxStystolicBloodPressure(): number[]{
    for(let i=0;i<30; i++){
      this.maxsystolicBloodPressure[i]== 129;
    }
    return this.maxsystolicBloodPressure
  }
  get getMinStystolicBloodPressure(): number[]{
    for(let i=0;i<30; i++){
      this.minsystolicBloodPressure[i]= 120;
    }
    return this.maxsystolicBloodPressure;
  }
  get getMaxDiastolicBloodPressure(): number[]{
    for(let i=0;i<30; i++){
      this.maxdiastolicBloodPressure[i]= 84;
    }
    return this.maxdiastolicBloodPressure;
  }
  get getMinDiastolicBloodPressure(): number[]{
    for(let i=0;i<30; i++){
      this.mindiastolicBloodPressure[i]= 80;
    }
    return this.mindiastolicBloodPressure;
  }
  
  get getDiastolicBloodPressure(): number[]{
    
    return this.diastolicBloodPressure;
  }

  get getWeight(): number[]{
    return this.weight;
  }

  getNotes= ()=>
    this.noteService
    .getNotes()
    .subscribe(
      res=>{this.notes =res.map(el=><Note>el.payload.doc.data());
        this.temperature= this.notes.map(el=>el.temperature);
        this.date= this.notes.map(el=>el.date);
        this.diastolicBloodPressure=this.notes.map(el=>el.diastolicBloodPressure);
        this.systolicBloodPressure=this.notes.map(el=>el.systolicBloodPressure);
        this.weight= this.notes.map(el=>el.weight);

        this.lineChartMethodTemperature();
        this.lineChartMethodWeight();
        this.lineChartMethodBloodPressure();
      console.log(this.notes);
    },
    er=>console.log(er));

    lineChartMethodTemperature() {
      this.lineChartTemperature = new Chart(this.lineCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: this.date,
          datasets: [
            {
              label: 'Temperature values',
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
              data: this.getTemp,
              spanGaps: false,
            }
          ]
        }
      });
    }
    
    lineChartMethodWeight() {
      this.lineChartTemperature = new Chart(this.barCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: this.date,
          datasets: [
            {
              label: 'Weight values',
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
              data: this.getWeight,
              spanGaps: false,
            }
          ]
        }
      });
    }

    lineChartMethodBloodPressure() {
      this.lineChartTemperature = new Chart(this.doughnutCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: this.date,
          datasets: [
            {
              label: 'Systolic values',
              fill: false,
              backgroundColor: 'rgba(255, 99, 132, 1)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(255, 99, 132, 1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(255, 99, 132, 1)',
              pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.getStystolicBloodPressure,
              spanGaps: false,
            },
            {
              label: 'Systolic normal values',
              fill: false,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 0.2)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(255, 99, 132, 0.2)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
              pointHoverBorderColor: 'rgba(255, 99, 132, 0.2)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129],
              
              spanGaps: false,
            },
            {
              label:'',
              fill: false,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 0.2)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(255, 99, 132, 0.2)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
              pointHoverBorderColor: 'rgba(255, 99, 132, 0.2)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120],
              spanGaps: false,
            },
            {
              label: 'Diastolic values',
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
              data: this.getDiastolicBloodPressure,
              spanGaps: false,
            },
            {
              label: 'Diastolic normal values',
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,0.2)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,0.2)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,0.2)',
              pointHoverBorderColor: 'rgba(220,220,220,0.2)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,],
              spanGaps: false,
            },
            {
              label: '',
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,0.2)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,0.2)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,0.2)',
              pointHoverBorderColor: 'rgba(220,220,220,0.2)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80],
              spanGaps: false,
            }
          ]
        }
      });
    }

}