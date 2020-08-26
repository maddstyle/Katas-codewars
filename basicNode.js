// Let’s begin by setting up the constructor for our Node class. Since nodes contain data, we want the constructor to expect a data argument of any type to be passed in. The constructor can assign the given argument to the data property of the Node instance.
// Underneath the Node class, instantiate a Node with any value and set it to firstNode. Then use console.log() to print out the instance’s data property. We should see the value that the node was instantiated with in the terminal.
// We also know that a node is aware of the other node it links to. We will represent this with the next property on the Node class.

// Similar to how we created the data property in the constructor, let’s do the same with the next node property. When the node is first created, it is an orphan node (a node with no links). Set the next node to null.
// Let’s check that next node property was successfully set in the constructor.

// Underneath the node we previously created, use console.log() to print out the instance’s next node property. Check that null is output in the terminal.

// 

// In this exercise we need to implement .setNextNode() method in the Node class, so our next node can be updated from initial null value and used in more complex data structures. 

// 1. implement .setNextNode on Node class. it should take node as an argument and update property next to an appropriate value.Node
// 2. to verify that our funcition setNextNode is performing properly we need to call it on our Node instance. 
// Create a second instance and store it in variable secondNode, then link it to the firstNode by passing it to the call .setNextNode().

// console.log the firstNode to see it completed.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  setNextNode(node) {
    this.next = node;
  }
}

const firstNode = new Node('I am the first instance.');
const secondNode = new Node('I am the second instance');

firstNode.setNextNode(secondNode);
console.log(firstNode);

module.exports = Node;
