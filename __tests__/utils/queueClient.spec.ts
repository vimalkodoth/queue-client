import { PriorityQueue } from 'queue-client';
import { QueueClient } from 'queue-client';

test('Sample', () => {
  const priorityQueue = new PriorityQueue();
  const qClient = new QueueClient(priorityQueue);

  expect(qClient.findTopN([1, 2, 5, 3, 1], 2)).toEqual([5, 3]);
});
