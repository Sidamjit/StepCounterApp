import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';

declare let stepcounter: any;

@Injectable({
  providedIn: 'root'
})
export class StepCounterService {
  constructor() {}

  start(startingOffset) {
      return new Promise((resolve, reject) => {
          stepcounter.start(
              startingOffset,
              message => {
                  resolve(message);
              },
              () => {
                  reject();
              }
          );
      });
  }

  stop() {
      return new Promise((resolve, reject) => {
          stepcounter.stop(
              message => {
                  resolve(message);
              },
              () => {
                  reject();
              }
          );
      });
  }

  getTodayStepCount() {
      return new Promise((resolve, reject) => {
          stepcounter.getTodayStepCount(
              message => {
                  resolve(message);
              },
              () => {
                  reject();
              }
          );
      });
  }

  getStepCount() {
      return new Promise((resolve, reject) => {
          stepcounter.getStepCount(
              message => {
                  resolve(message);
              },
              () => {
                  reject();
              }
          );
      });
  }

  deviceCanCountSteps() {
      return new Promise((resolve, reject) => {
          stepcounter.deviceCanCountSteps(
              message => {
                  resolve(message);
              },
              () => {
                  reject();
              }
          );
      });
  }

  getHistory() {
      return new Promise((resolve, reject) => {
          stepcounter.getHistory(
              message => {
                  resolve(message);
              },
              () => {
                  reject();
              }
          );
      });
  }
}

//----- above code from:
//https://stackoverflow.com/questions/58828456/ionic-4-capacitor-how-to-install-a-cordova-plugin-stepcounter-from-github-wi
//----- I was struggling to use the ionic native library in this ionic angular project -
//credits to: Vova Bilyachat from stackoverflow for posting the solution.

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  stepLength(){
    this.router.navigate(['step-length-setter']);
  }

  bodySetup(){
    this.router.navigate(['body-setting']);
  }

  motivation(){
    this.router.navigate(['motivation']);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  status=false;
  startTracker(){
    if(this.status){
      //start tracker here
      stepcounter.start(0);
    }
    else{
      stepcounter.stop(0);
    }
  }
}
