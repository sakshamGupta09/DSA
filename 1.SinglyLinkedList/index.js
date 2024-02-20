import SinglyLinkedList from "./Implementation/List.js";

const list = new SinglyLinkedList();

list.insertStart(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);
list.insertLast(6);

list.deleteAt(4);

list.traverse();
