import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordMixerService {

  public Convert(value: string): string{

    let words = [];
    let last: string = "";

    for(let i = 0; i < value.length; i++){
      if (WordMixerService.IsLetter(value[i])){
        last += value[i];
      } else {
        words.push(last);
        words.push(value[i]);
        last = "";
      }
    }
    words.push(last);

    let updated = [];
    for(let i in words){
      if (words[i].length <= 3){
        updated.push(words[i]);
      } else {
        updated.push(WordMixerService.Transform(words[i]));
      }
    }

    return updated.join("");
  }

  private static IsLetter(a: string): boolean{
    return a >= 'A' && a <= 'Z' || a >= 'a' && a <= 'z' || a >= 'а' && a <= 'я' || a >= 'А' && a <= 'Я';
  }

  private static Transform(w: string): string{
    let f = w[0];
    let l = w[w.length - 1];
    let center = w.slice(1, -1);

    let updated = "";

    let count = center.length;
    for(let _ = 0; _ < count; _++) {
      let i = Math.floor(Math.random() * center.length);
      updated += center[i];
      center = center.slice(0, i) + center.slice(i + 1);
    }

    return f + updated + l;
  }

  constructor() { }
}
