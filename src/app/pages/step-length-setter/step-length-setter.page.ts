import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-step-length-setter',
  templateUrl: './step-length-setter.page.html',
  styleUrls: ['./step-length-setter.page.scss'],
})
export class StepLengthSetterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  welcome(){
    this.router.navigate(['welcome']);
  }
}
