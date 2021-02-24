// Given a balanced parentheses string S, compute the score of the string based on the following rule:

// () has score 1
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.

var scoreOfParentheses = function(S) {
    let arr = S.split('')
    let result = []
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === '(' && arr[i + 1] === ')') {
            result.push(1)
            i++
        } else {
            result.push(arr[i])
        }
    }

    let result2 = []
    while (result.length > 1) {
        for(let j=0; j<result.length; j++) {
            if(result[j] === '(') {
                if(result[j+1] !== '(' && result[j+2] === ')') {
                    result2.push(result[j+1]*2)
                    j+=2
                } else {
                    result2.push(result[j])
                }
            } else if(result[j] === ')') {
                result2.push(result[j])
            } else {
                if(result[j+1] && (result[j+1] !== '(' && result[j+1] !== ')')) {
                    result2.push(result[j]+result[j+1])
                    j++
                } else {
                    result2.push(result[j])
                }
            }
        }        
        result = result2
        result2 = []
        // console.log(result)

    }   

    return result[0]
};

// console.log(scoreOfParentheses('(()(()))')) //6
// console.log(scoreOfParentheses('()()')) //2
// console.log(scoreOfParentheses('()')) //1
console.log(scoreOfParentheses('()()()')) //3


