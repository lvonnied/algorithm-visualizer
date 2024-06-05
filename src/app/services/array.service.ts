import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  private arrayLength = new BehaviorSubject<number>(10);
  arrayLength$ = this.arrayLength.asObservable();

  setArrayLength(length: number) {
    this.arrayLength.next(length);
  }
}
