export type QItem = number;
export type Queue = Array<QItem>;

export interface IHeapify {
  enqueue(node: number): void;
  dequeue(): QItem;
  peek(): number;
  isEmpty(): boolean;
  printQueue(): Queue;
}

export class PriorityQueue implements IHeapify {
  queue: Queue = [];

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
    const stack = [];
    while (!this.isEmpty()) {
      stack.push(this.dequeue());
    }
    return stack.reverse();
  }

  peek(): number {
    if (!this.queue.length) {
      throw new Error('queue is empty!');
    }
    return this.queue[0];
  }

  isEmpty(): boolean {
    return !this.queue.length;
  }

  static findLeftChild(index: number): number {
    return 2 * index + 1;
  }

  static findRightChild(index: number): number {
    return 2 * index + 2;
  }

  static findParent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private shiftUp(queue: Queue) {
    let currentIndex = queue.length - 1;
    while (currentIndex > 0) {
      const parentIndex = PriorityQueue.findParent(currentIndex);
      if (queue[parentIndex] > queue[currentIndex]) {
        this.swap(currentIndex, parentIndex);
      }
      currentIndex = parentIndex;
    }
  }

  private swap(i: number, j: number) {
    const temp = this.queue[i];
    this.queue[i] = this.queue[j];
    this.queue[j] = temp;
  }

  private shiftDown(queue: Queue) {
    let currentIndex = 0;
    let minIndexOfChild = 0;
    while (currentIndex >= 0) {
      const leftChildIndex = PriorityQueue.findLeftChild(currentIndex);
      const rightChildIndex = PriorityQueue.findRightChild(currentIndex);
      minIndexOfChild = this.findMinIndexOfChildren(leftChildIndex, rightChildIndex);
      if (minIndexOfChild && queue[currentIndex] > queue[minIndexOfChild]) {
        this.swap(currentIndex, minIndexOfChild);
      }
      currentIndex = minIndexOfChild;
    }
  }

  private findMinIndexOfChildren(leftChild: number, rightChild: number): number {
    if (leftChild >= this.queue.length) return -1;
    if (rightChild >= this.queue.length) return leftChild;
    return this.queue[leftChild] < this.queue[rightChild] ? leftChild : rightChild;
  }
}
