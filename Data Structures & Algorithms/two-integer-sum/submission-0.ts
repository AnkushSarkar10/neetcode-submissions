class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>(); // value, index

        for (let i = 0; i <= nums.length; i++ ) {
            const j = target - nums[i];
            if (seen.has(j)) {
                return [seen.get(j)!, i]; // !  is important in ts
            }
            seen.set(nums[i], i);
        }

        return []
    }
}
