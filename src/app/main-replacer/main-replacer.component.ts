import { Component, OnInit } from '@angular/core';
import { WordMixerService } from '../word-mixer.service';

@Component({
  selector: 'app-main-replacer',
  templateUrl: './main-replacer.component.html',
  styleUrls: ['./main-replacer.component.css']
})
export class MainReplacerComponent implements OnInit {

  constructor(private _wordMixer: WordMixerService) { }

  public rawText: string = "default text";
  public shouldBeMixed: boolean = true;
  public shouldRotating: boolean = false;
  public shouldBeInverted: boolean = false;

  public get updatedText(): string {
    if (this.shouldBeMixed){
     return this._wordMixer.Convert(this.rawText);
    } else {
      return this.rawText;
    }
  }

  ngOnInit() {
  }

}
