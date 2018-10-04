import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinned-text',
  templateUrl: './spinned-text.component.html',
  styleUrls: ['./spinned-text.component.css']
})
export class SpinnedTextComponent implements OnInit {

  @Input()
  public set text(val: string){
    this.textAsArray = new Array<string>(val.length);
    for(let i = 0; i < val.length; i++){
      this.textAsArray[i] = val[i];
    }
  }

  public textAsArray:Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
