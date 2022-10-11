export declare type QItem = number;
export declare type Queue = Array<QItem>;
interface IHeapify {
    enqueue(node: number): void;
    dequeue(): QItem;
    peek(): number;
    isEmpty(): boolean;
    printQueue(): Queue;
}
export declare class PriorityQueue implements IHeapify {
    queue: Queue;
    enqueue(node: number): void;
    dequeue(): QItem;
    printQueue(): Queue;
    peek(): number;
    isEmpty(): boolean;
    static findLeftChild(index: number): number;
    static findRightChild(index: number): number;
    static findParent(index: number): number;
    private shiftUp;
    private swap;
    private shiftDown;
    private findMinIndexOfChildren;
}
export {};
