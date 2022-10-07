import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.page.html',
  styleUrls: ['./instruction.page.scss'],
})
export class InstructionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  instructionContinue(){
    this.router.navigate(['welcome']);
  }

}
