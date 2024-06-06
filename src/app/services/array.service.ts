import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  private currentArray = new BehaviorSubject<number[]>(this.generateRandomArray(10));
  currentArray$ = this.currentArray.asObservable();

  setArrayLength(length: number) {
    this.currentArray.next(this.generateRandomArray(length));
  }

  generateRandomArray(length: number): number[] {
    return Array.from({ length }, () => Math.floor(Math.random() * 750) + 1);
  }

  randomizeCurrentArray() {
    const length = this.currentArray.getValue().length;
    this.currentArray.next(this.generateRandomArray(length));
  }

  getCurrentArray(): number[] {
    return this.currentArray.getValue();
  }
}
