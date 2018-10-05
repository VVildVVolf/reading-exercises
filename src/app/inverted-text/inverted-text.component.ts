import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inverted-text',
  templateUrl: './inverted-text.component.html',
  styleUrls: ['./inverted-text.component.css']
})
export class InvertedTextComponent implements OnInit {

  @Input()
  public value: string;

  public get Updated(): Array<string>{
    let result: Array<string> = new Array<string>(this.value.length);

    for (let i = 0; i < this.value.length; i++){
      result[i] = this.value[i];
    }

    return result;
  }

  constructor() { }

  ngOnInit() {
  }

}
