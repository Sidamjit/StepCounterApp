import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body-setting',
  templateUrl: './body-setting.page.html',
  styleUrls: ['./body-setting.page.scss'],
})
export class BodySettingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  welcome(){
    this.router.navigate(['welcome']);
  }
}
