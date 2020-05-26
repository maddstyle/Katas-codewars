// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;

// ✓ Queue is a class (1 ms)
// ✓ can add elements to a queue (1 ms)
// ✓ can remove elements from a queue
// ✓ Order of elements is maintained

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        0.275 s, estimated 1 s
// Ran all test suites matching /queue\/test.js/i.