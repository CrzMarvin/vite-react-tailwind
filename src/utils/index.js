function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

export const generateLoopListNodes = (valueArray) => {
  const n  = valueArray && valueArray.length
  if (!n) {
    return null;
  }
  const listHead = new ListNode(valueArray[0]);
  let t = listHead;
  for (let index = 1; index < n; index++) {
    t.next = new ListNode(valueArray[index]);
    t = t.next;
  }
  t.next = listHead;
  return listHead;
};
