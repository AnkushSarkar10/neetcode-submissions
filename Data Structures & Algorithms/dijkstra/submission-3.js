/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        const adj = Array.from({length: n} , () => []);

        for (const [u,v,w] of edges) {
            adj[u].push([v,w]);
        }

        const dist = Array(n).fill(Infinity);

        dist[src] = 0;

        const pq = new PriorityQueue((a,b) => a[0] < b[0]);
        
        pq.enqueue([0, src]);

        while(!pq.isEmpty()){
            const [d, node] = pq.dequeue();

            if (d > dist[node]){
                continue;
            }
            
            for (const [v, w] of adj[node]){
                const newDist = d + w;
                if (newDist < dist[v]){
                    dist[v] = newDist;
                    pq.enqueue([newDist, v]);
                }
            }
        }

        const result = {};

        for (let i = 0; i < n; i++){
            result[i] = dist[i] === Infinity ? -1 : dist[i];
        }

        return result;
    }
}
