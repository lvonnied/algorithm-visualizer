import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MergeSortService } from './merge-sort.service';
import { Bar } from '../models/Bar';
import { SortingAlgorithm } from '../models/Algorithm';
import { QuickSortService } from './quick-sort.service';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  private currentArray = new BehaviorSubject<Bar[]>(this.generateRandomArray(10));
  currentArray$ = this.currentArray.asObservable();

  constructor(private mergeSortService: MergeSortService, private quickSortService: QuickSortService) { }

  setArrayLength(length: number) {
    this.currentArray.next(this.generateRandomArray(length));
  }

  generateRandomArray(length: number): Bar[] {
    return Array.from({ length }, () => ({
      height: Math.floor(Math.random() * 750) + 1,
      backgroundColor: 'black'
    }));
  }

  randomizeCurrentArray() {
    const length = this.currentArray.getValue().length;
    this.currentArray.next(this.generateRandomArray(length));
  }

  getCurrentArray(): Bar[] {
    return this.currentArray.getValue();
  }

  async sort(algorithm: SortingAlgorithm) {
    const array = this.currentArray.getValue();
    switch (algorithm) {
      case SortingAlgorithm.MergeSort:
        await this.mergeSortService.mergeSort(array, 0, array.length - 1);
        break;
      case SortingAlgorithm.SelectionSort:
        // Implement selection sort here
        break;
      case SortingAlgorithm.QuickSort:
        await this.quickSortService.quickSort(array, 0, array.length - 1);
        break;
      case SortingAlgorithm.BogoSort:
        // Implement bogo sort here
        break;
    }
    for (let i = 0; i < array.length; i++) {
      array[i].backgroundColor = '#673ab7';
    }
    this.currentArray.next(array);
  }
}
