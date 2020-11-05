/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//simple, brute force - sort and compare
var isAnagram = function(s, t) {
    if (s.length !==t.length)
        return false;
let a = [...s].sort();
let b = [...t].sort();
for (let i = 0;i < a.length;i++){
    if (a[i]!==b[i])
        return false;
}
return true;
};
