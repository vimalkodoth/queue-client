import { PriorityQueue } from '@vimalkodoth/queue-client';
export default class QueueClient {
    pQueue: PriorityQueue | null;
    constructor(pQueue: PriorityQueue);
    findTopN(inputNumbers: Array<any>, N: number): Array<number>;
    static getFilteredNumbers(inputList?: Array<any>): Array<number>;
}
