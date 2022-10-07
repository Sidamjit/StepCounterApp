import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.page.html',
  styleUrls: ['./motivation.page.scss'],
})
export class MotivationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  welcome(){
    this.router.navigate(['welcome']);
  }
}
