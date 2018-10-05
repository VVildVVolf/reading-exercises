import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-spinner',
  templateUrl: './custom-spinner.component.html',
  styleUrls: ['./custom-spinner.component.css']
})
export class CustomSpinnerComponent implements OnInit {

  @Input()
  public char: string;

  @Input()
  public needBeInverted: boolean = false;

  public spinSpeed: number = 2.0 + Math.random();
  public styleAttr: string = "-webkit-animation-duration: " + this.spinSpeed +"s; -moz-animation-duration: " + this.spinSpeed + "s; animation-duration: " + this.spinSpeed + "s";

  constructor() { }

  ngOnInit() {
  }

}
