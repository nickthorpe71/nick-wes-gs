// Given a linked list, rotate the list to the right by k places, where k is non-negative.

var rotateRight = function(head, k) {

  //empty linked list edge case
  if(head === null) {
    return head;
  }

  let listLength = 0;
  let current = head;
  let originalLast;

  //Get length of LL
  while(current) {
    listLength++;
    current = current.next;

    //save the last node so we can set the original head as the last nodes next
    if(current !== null && current.next === null) {
      originalLast = current;
    }
  }

  //find out how far we are rotating (k is larger than list length edge case)
  let shift = k % listLength;

  //no shift edge case
  if(shift === 0) {
    return head;
  }

  //find the new last node (newLast) and the new head node (current)
  current = head;
  let position = 0;
  let newLast = current;
  while(position !== listLength - shift) {
    position++;
    newLast = current;
    current = current.next;
  }

  //update linked list
  newLast.next = null;
  originalLast.next = head;
  return current;
};