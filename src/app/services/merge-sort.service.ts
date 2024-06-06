import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MergeSortService {

  constructor() { }

  mergeSort(array: number[], left: number, right: number) {
    if (left >= right) {
      return;
    }

    const mid = Math.floor((left + right) / 2);
    this.mergeSort(array, left, mid);
    this.mergeSort(array, mid + 1, right);
    this.merge(array, left, mid, right);
  }

  merge(array: number[], left: number, mid: number, right: number) {
    const leftArray = array.slice(left, mid + 1);
    const rightArray = array.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;
    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] <= rightArray[j]) {
        array[k++] = leftArray[i++];
      } else {
        array[k++] = rightArray[j++];
      }
    }

    while (i < leftArray.length) {
      array[k++] = leftArray[i++];
    }

    while (j < rightArray.length) {
      array[k++] = rightArray[j++];
    }
  }
}
