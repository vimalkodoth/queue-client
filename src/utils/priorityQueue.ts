export type QItem = number;
export type Queue = Array<QItem>;

interface IHeapify {
  enqueue(node: number): void;
  dequeue(): QItem;
  peek(): number;
  isEmpty(): boolean;
  printQueue(): Queue;
}

export class PriorityQueue implements IHeapify {
  queue: Queue = [];

  constructor() {}

  enqueue(node: number): void {
    if (this.isEmpty()) {
      this.queue.push(node);
      return;
    }
    this.queue.push(node);
    this.shiftUp(this.queue);
  }

  dequeue(): QItem {
    if (!this.queue.length) {
      throw new Error('queue is empty!');
    }
    const lastItem = this.queue.pop();
    if (this.isEmpty()) {
      return lastItem as QItem;
    }
    const deleted = this.queue.splice(0, 1, lastItem as number);
    this.shiftDown(this.queue);
    return deleted[0];
  }

  printQueue(): Queue {
    let stack = [];
    while (!this.isEmpty()) {
      stack.push(this.dequeue());
    }
    return stack.reverse();
  }

  peek(): number {
    if (!this.queue.length) {
      new Error('queue is empty!');
    }
    return this.queue[0];
  }

  isEmpty(): boolean {
    return !this.queue.length;
  }

  private shiftUp(queue: Queue) {
    let currentIndex = queue.length - 1;
    while (currentIndex > 0) {
      let parentIndex = this.findParent(currentIndex);
      if (queue[parentIndex] > queue[currentIndex]) {
        this.swap(currentIndex, parentIndex);
      }
      currentIndex = parentIndex;
    }
  }

  private swap(i: number, j: number, queue = this.queue) {
    const temp = queue[i];
    queue[i] = queue[j];
    queue[j] = temp;
  }

  private shiftDown(queue: Queue) {
    let currentIndex = 0;
    let minIndexOfChild = 0;
    while (currentIndex >= 0) {
      const leftChildIndex = this.findLeftChild(currentIndex);
      const rightChildIndex = this.findRightChild(currentIndex);
      minIndexOfChild = this.findMinIndexOfChildren(leftChildIndex, rightChildIndex);
      if (minIndexOfChild && queue[currentIndex] > queue[minIndexOfChild]) {
        this.swap(currentIndex, minIndexOfChild);
      }
      currentIndex = minIndexOfChild;
    }
  }

  private findLeftChild(index: number): number {
    return 2 * index + 1;
  }

  private findRightChild(index: number): number {
    return 2 * index + 2;
  }

  private findParent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private findMinIndexOfChildren(leftChild: number, rightChild: number): number {
    if (leftChild >= this.queue.length) return -1;
    if (rightChild >= this.queue.length) return leftChild;
    return this.queue[leftChild] < this.queue[rightChild] ? leftChild : rightChild;
  }
}
