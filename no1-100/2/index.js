/*

2. 两数相加
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例 1：
    输入：l1 = [2,4,3], l2 = [5,6,4]
    输出：[7,0,8]
    解释：342 + 465 = 807.
    示例 2：

    输入：l1 = [0], l2 = [0]
    输出：[0]
    示例 3：

    输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    输出：[8,9,9,9,0,0,0,1]

提示：

每个链表中的节点数在范围 [1, 100] 内
0 <= Node.val <= 9
题目数据保证列表表示的数字不含前导零
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers1 = function (l1, l2) {
    const result = {val: 0, next: null}
    let tempRes = result
    let t1 = l1
    let t2 = l2
    do {
        const sum = (t1?.val ?? 0) + (t2?.val ?? 0)
        const thanTen = sum < 10
        let nextVal = 1
        if (thanTen) {
            nextVal = 0
            if ((tempRes.val += sum) === 10) {
                tempRes.val = 0
                nextVal = 1
            }
        } else {
            tempRes.val = (tempRes.val + sum) % 10
        }

        if (t1?.next) {
            t1 = t1.next
        } else {
            t1 = null
        }
        if (t2?.next) {
            t2 = t2.next
        } else {
            t2 = null
        }
        if (!t1 && !t2 && nextVal === 0) {
            break
        }
        tempRes = tempRes.next = {
            val: nextVal,
            next: null,
        }

    } while (t1 || t2)
    return result
}

const result1 = addTwoNumbers1(
    // {val: 1, next: {val: 2, next: {val: 3, next: null}}},
    {val: 9, next: {val: 9, next: {val: 9, next: null}}},
    {val: 9, next: {val: 9, next: {val: 9, next: {val: 9, next: null}}}}
    // {val: 4, next: {val: 5, next: {val: 6, next: null}}}
)
// console.log('result1=', JSON.stringify(result1, null));


var addTwoNumbers2 = function (l1, l2) {
    const result = {val: 0, next: null}
    let tempRes = result
    while (l1 || l2) {
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + tempRes.val
        tempRes.val = sum % 10
        l1 = l1?.next ?? null
        l2 = l2?.next ?? null
        if (!l1 && !l2 && sum < 10) {
            break
        }
        tempRes = tempRes.next = {
            val: +(sum >= 10),
            next: null,
        }

    }
    return result
}

const result2 = addTwoNumbers2(
    // {val: 1, next: {val: 2, next: {val: 3, next: null}}},
    {val: 9, next: {val: 9, next: {val: 9, next: null}}},
    {val: 9, next: {val: 9, next: {val: 9, next: {val: 9, next: null}}}}
    // {val: 4, next: {val: 8, next: {val: 9, next: null}}}
)
console.log('result2=', JSON.stringify(result2, null));
