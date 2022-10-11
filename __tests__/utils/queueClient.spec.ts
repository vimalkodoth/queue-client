import { PriorityQueue, QueueClient } from 'queue-client';

describe('As a developer, I want to check findTopN ', () => {
  let priorityQueue: PriorityQueue | null;
  let queueClient: QueueClient | null;

  beforeAll(() => {
    priorityQueue = new PriorityQueue();
    queueClient = new QueueClient(priorityQueue);
  });

  afterAll(() => {
    priorityQueue = null;
    queueClient = null;
  });

  it('to work as expected', () => {
    const expected = [5, 4];
    const topN = queueClient?.findTopN([1, 2, 5, 3, 4], 2);
    expect(topN).toEqual(expected);
  });

  it('to include repeition of priority(number) in the result', () => {
    const expected = [6, 5, 5];
    const topN = queueClient?.findTopN([1, 5, 5, 6, 4], 3);
    expect(topN).toEqual(expected);
  });

  it('to returns all numbers in array as expected when N is larger than array size', () => {
    const expected = [5, 4, 1];
    const topN = queueClient?.findTopN([1, 5, 4], 5);
    expect(topN).toEqual(expected);
  });

  it('to throw an error when input is empty array', () => {
    const expected = new Error('input is empty!');
    expect(() => queueClient?.findTopN([], 5)).toThrow(expected);
  });

  it('to filter input to contain only finite numbers', () => {
    const expected = [5, 3, 1, 1];
    expect(queueClient?.findTopN([1, 5, 3, 'a', 1], 5)).toEqual(expected);
  });
});
