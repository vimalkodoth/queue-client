# findTopN using priority queue( min-heap )

## Run time & Space complexity

Time Complexity : O(NlogM)
Space Complexity: O(N)

If 'M' represents the number of top items to be returned and 'N' represents the size of the input list, then,

'enqueue' operation for each element takes O(logM) times. Worst case is N times.
'printQueue' operation takes O(M) using stack.

Space required is O(M) for building priority queue using min-heap.
O(N) is required for stack.

## Quick start

Run following commands in the root directory of the project:

# npm ci

# npm test

Additionally, following commands are available:

```
"npm build" : generate node compatiable (commonjs) es5 output,
"format": format using prettier,
"lint": checks for linting errors/warnings. uses eslint - airbnb,
"lint:fix": fixes possible linting issues,
"test": "jest" : run tests,
"coverage": "jest --coverage" : generate code coverage

```
