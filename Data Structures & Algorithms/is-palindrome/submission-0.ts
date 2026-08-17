class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let str = "";
        for (const char of s){
            if (isAlphaNum(char)) {
                str += char.toLowerCase();
            }
        }
        let p0 = 0;
        let p1 = str.length - 1;
        while (p0 < p1) {
            if (str[p0] !== str[p1]) return false;
            p0++;
            p1--;
        }
        return true;
    }
}

function isAlphaNum(s:string): boolean {
    if (('A'.charCodeAt(0) <= s.charCodeAt(0) && s.charCodeAt(0) <= 'Z'.charCodeAt(0)) || ('a'.charCodeAt(0) <= s.charCodeAt(0) && s.charCodeAt(0) <= 'z'.charCodeAt(0)) || ('0'.charCodeAt(0) <= s.charCodeAt(0) && s.charCodeAt(0) <= '9'.charCodeAt(0))) {
        return true;
    }
    return false;
}