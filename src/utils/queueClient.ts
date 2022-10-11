import { PriorityQueue } from './priorityQueue';
import { QItem } from './priorityQueue';
export class QueueClient {
  pQueue: PriorityQueue | null = null;

  constructor(pQueue: PriorityQueue) {
    this.pQueue = pQueue;
  }

  public findTopN(inputNumbers: Array<any>, N: number): Array<number> {
    const numbersList = this.getFilteredNumbers(inputNumbers);
    if (!numbersList.length) {
      throw new Error('input is empty!');
    }
    if (numbersList.length < N) {
      N = numbersList.length;
    }
    for (let i = 0; i < N; i++) {
      this.pQueue?.enqueue(numbersList[i]);
    }
    for (let i = N; i < numbersList.length; i++) {
      let smallest = this.pQueue?.peek() as QItem;
      if (numbersList[i] > smallest) {
        this.pQueue?.dequeue();
        this.pQueue?.enqueue(numbersList[i]);
      }
    }
    return this.pQueue?.printQueue() as Array<number>;
  }

  private getFilteredNumbers(inputList: Array<any> = []): Array<number> {
    return inputList.filter((nextInput) => {
      return Number.isFinite(nextInput) ? true : false;
    });
  }
}
