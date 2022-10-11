"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueueClient = /** @class */ (function () {
    function QueueClient(pQueue) {
        this.pQueue = null;
        this.pQueue = pQueue;
    }
    QueueClient.prototype.findTopN = function (inputNumbers, N) {
        var _a, _b, _c, _d, _e;
        var numbersList = QueueClient.getFilteredNumbers(inputNumbers);
        if (!numbersList.length) {
            throw new Error('input is empty!');
        }
        var M = numbersList.length < N ? numbersList.length : N;
        for (var i = 0; i < M; i += 1) {
            (_a = this.pQueue) === null || _a === void 0 ? void 0 : _a.enqueue(numbersList[i]);
        }
        for (var i = M; i < numbersList.length; i += 1) {
            var smallest = (_b = this.pQueue) === null || _b === void 0 ? void 0 : _b.peek();
            if (numbersList[i] > smallest) {
                (_c = this.pQueue) === null || _c === void 0 ? void 0 : _c.dequeue();
                (_d = this.pQueue) === null || _d === void 0 ? void 0 : _d.enqueue(numbersList[i]);
            }
        }
        return (_e = this.pQueue) === null || _e === void 0 ? void 0 : _e.printQueue();
    };
    QueueClient.getFilteredNumbers = function (inputList) {
        if (inputList === void 0) { inputList = []; }
        return inputList.filter(function (nextInput) { return Number.isFinite(nextInput); });
    };
    return QueueClient;
}());
exports.default = QueueClient;
