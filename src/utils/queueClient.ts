import { PriorityQueue, QItem } from '@vimal_madhavan/queue-client';

export default class QueueClient {
  pQueue: PriorityQueue | null = null;

  constructor(pQueue: PriorityQueue) {
    this.pQueue = pQueue;
  }

  public findTopN(inputNumbers: Array<any>, N: number): Array<number> {
    const numbersList = QueueClient.getFilteredNumbers(inputNumbers);
    const numbersListLength = numbersList.length;
    if (!numbersListLength) {
      throw new Error('input is empty!');
    }
    const M = numbersListLength < N ? numbersListLength : N;
    for (let i = 0; i < M; i += 1) {
      this.pQueue?.enqueue(numbersList[i]);
    }
    for (let i = M; i < numbersListLength; i += 1) {
      const smallest = this.pQueue?.peek() as QItem;
      if (numbersList[i] > smallest) {
        this.pQueue?.dequeue();
        this.pQueue?.enqueue(numbersList[i]);
      }
    }
    return this.pQueue?.printQueue() as Array<number>;
  }

  static getFilteredNumbers(inputList: Array<any> = []): Array<number> {
    const isFinite = (nextInput: any) => Number.isFinite(nextInput);
    return inputList.filter(isFinite);
  }
}
