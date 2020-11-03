/**
 * @param {number} n
 * @return {string}
 */
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

    countAndSay(1) = "1"
    countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.

//recursion - 
//if n=== 1 return "1"
//val = countAndSay(n-1);
//result = "";
//count = 1;
//for(let i in result.val)
//if currentval === currentval + 1
//count++
//else
//result = result+ "" + count + "" currentval;count = 1;
// return result
var countAndSay = function(n) { 
    
    if(n===1)
        return "1";
    let val = countAndSay(n-1);
    
    let result = "";
    let count = 1;
    
    for( let i=0;i<val.length;i++){
        if(i+1<val.length &&  val[i]===val[i+1])
            {
                count++;
            }
        else if(i + 1 < val.length && val[i]!==[i+1]) {
            result = result + "" + count + "" + val[i];
            count = 1;
        }
        else if(i+1===val.length && val[i]===val[i-1])
            {
             result = result + "" + count + "" + val[i];
                return result;
            }
        else if (i+1===val.length && val[i]!==val[i-1] ){
            result = result + "" + 1 + "" + val[i];
            return result;
        }
    }
    
    return result;
    
    
};
