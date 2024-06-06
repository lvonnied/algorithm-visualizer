import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MergeSortService } from './merge-sort.service';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  private currentArray = new BehaviorSubject<number[]>(this.generateRandomArray(10));
  currentArray$ = this.currentArray.asObservable();

  constructor(private mergeSortService: MergeSortService) { }

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

  mergeSort() {
    const array = this.currentArray.getValue();
    this.mergeSortService.mergeSort(array, 0, array.length - 1);
    this.currentArray.next(array);
  }
}
