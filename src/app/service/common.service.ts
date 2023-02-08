import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private _cartSelect: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public readonly cartSelect: Observable<any> = this. _cartSelect.asObservable();
  setSelectCart(SelectedCart:any) {
    // localStorage.setItem('lang', language);
    let a :any = [];
    if(SelectedCart.length < 0){
        localStorage.setItem('SelectedCart','');
    }
    localStorage.setItem('SelectedCart',JSON.stringify(SelectedCart));
    let localData :any =  localStorage.getItem("SelectedCart");

    // let lang = localStorage.getItem('lang');
    this. _cartSelect.next(localData);
  }
}
