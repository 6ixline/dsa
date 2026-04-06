/*
Given a string s of distinct characters and their corresponding frequency f[ ] i.e. character s[i] has f[i] frequency. You need to build the Huffman tree and return all the huffman codes in preorder traversal of the tree.
Note: While merging if two nodes have the same value, then the node which occurs at first will be taken on the left of Binary Tree and the other one to the right, otherwise Node with less value will be taken on the left of the subtree and other one to the right.

Examples:

Input: s = "abcdef", f[] = {5, 9, 12, 13, 16, 45}
Output: [0, 100, 101, 1100, 1101, 111]
Explanation:

HuffmanCodes will be:
f : 0
c : 100
d : 101
a : 1100
b : 1101
e : 111
Constraints:
1 ≤ s.size() = f.size() ≤ 26
*/
class Solution {
    huffmanCodes(s, f) {
        class Node {
            constructor(freq, char = null, left = null, right = null, order = 0) {
                this.freq = freq;
                this.char = char;
                this.left = left;
                this.right = right;
                this.order = order;
            }
        }

        class MinHeap {
            constructor() {
                this.heap = [];
            }

            compare(a, b) {
                if (a.freq !== b.freq) return a.freq - b.freq;
                return a.order - b.order;
            }

            insert(node) {
                this.heap.push(node);
                this.up();
            }

            up() {
                let i = this.heap.length - 1;
                while (i > 0) {
                    let p = Math.floor((i - 1) / 2);
                    if (this.compare(this.heap[i], this.heap[p]) < 0) {
                        [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
                        i = p;
                    } else break;
                }
            }

            extractMin() {
                if (this.heap.length === 1) return this.heap.pop();

                let root = this.heap[0];
                this.heap[0] = this.heap.pop();
                this.down(0);
                return root;
            }

            down(i) {
                let smallest = i;
                let l = 2 * i + 1;
                let r = 2 * i + 2;

                if (l < this.heap.length && this.compare(this.heap[l], this.heap[smallest]) < 0) {
                    smallest = l;
                }
                if (r < this.heap.length && this.compare(this.heap[r], this.heap[smallest]) < 0) {
                    smallest = r;
                }

                if (smallest !== i) {
                    [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                    this.down(smallest);
                }
            }

            size() {
                return this.heap.length;
            }
        }

        let heap = new MinHeap();

        for (let i = 0; i < s.length; i++) {
            heap.insert(new Node(f[i], s[i], null, null, i));
        }

        while (heap.size() > 1) {
            let t1 = heap.extractMin();
            let t2 = heap.extractMin();

            let merged = new Node(
                t1.freq + t2.freq,
                null,
                t1,
                t2,
                Math.min(t1.order, t2.order)
            );

            heap.insert(merged);
        }

        let root = heap.extractMin();

        let result = [];

        function preorder(node, code) {
            if (!node) return;

            if (!node.left && !node.right) {
                result.push(code === "" ? "0" : code);
                return;
            }

            preorder(node.left, code + "0");
            preorder(node.right, code + "1");
        }

        preorder(root, "");

        return result.sort();
    }
}
