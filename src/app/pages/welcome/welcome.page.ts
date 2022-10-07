import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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
    }
  }
}
