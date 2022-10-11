"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.queue = [];
    }
    PriorityQueue.prototype.enqueue = function (node) {
        if (this.isEmpty()) {
            this.queue.push(node);
            return;
        }
        this.queue.push(node);
        this.shiftUp(this.queue);
    };
    PriorityQueue.prototype.dequeue = function () {
        if (!this.queue.length) {
            throw new Error('queue is empty!');
        }
        var lastItem = this.queue.pop();
        if (this.isEmpty()) {
            return lastItem;
        }
        var deleted = this.queue.splice(0, 1, lastItem);
        this.shiftDown(this.queue);
        return deleted[0];
    };
    PriorityQueue.prototype.printQueue = function () {
        var stack = [];
        while (!this.isEmpty()) {
            stack.push(this.dequeue());
        }
        return stack.reverse();
    };
    PriorityQueue.prototype.peek = function () {
        if (!this.queue.length) {
            throw new Error('queue is empty!');
        }
        return this.queue[0];
    };
    PriorityQueue.prototype.isEmpty = function () {
        return !this.queue.length;
    };
    PriorityQueue.findLeftChild = function (index) {
        return 2 * index + 1;
    };
    PriorityQueue.findRightChild = function (index) {
        return 2 * index + 2;
    };
    PriorityQueue.findParent = function (index) {
        return Math.floor((index - 1) / 2);
    };
    PriorityQueue.prototype.shiftUp = function (queue) {
        var currentIndex = queue.length - 1;
        while (currentIndex > 0) {
            var parentIndex = PriorityQueue.findParent(currentIndex);
            if (queue[parentIndex] > queue[currentIndex]) {
                this.swap(currentIndex, parentIndex);
            }
            currentIndex = parentIndex;
        }
    };
    PriorityQueue.prototype.swap = function (i, j) {
        var temp = this.queue[i];
        this.queue[i] = this.queue[j];
        this.queue[j] = temp;
    };
    PriorityQueue.prototype.shiftDown = function (queue) {
        var currentIndex = 0;
        var minIndexOfChild = 0;
        while (currentIndex >= 0) {
            var leftChildIndex = PriorityQueue.findLeftChild(currentIndex);
            var rightChildIndex = PriorityQueue.findRightChild(currentIndex);
            minIndexOfChild = this.findMinIndexOfChildren(leftChildIndex, rightChildIndex);
            if (minIndexOfChild && queue[currentIndex] > queue[minIndexOfChild]) {
                this.swap(currentIndex, minIndexOfChild);
            }
            currentIndex = minIndexOfChild;
        }
    };
    PriorityQueue.prototype.findMinIndexOfChildren = function (leftChild, rightChild) {
        if (leftChild >= this.queue.length)
            return -1;
        if (rightChild >= this.queue.length)
            return leftChild;
        return this.queue[leftChild] < this.queue[rightChild] ? leftChild : rightChild;
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
