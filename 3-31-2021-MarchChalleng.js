// You want to form a target string of lowercase letters.

// At the beginning, your sequence is target.length '?' marks.  You also have a stamp of lowercase letters.

// On each turn, you may place the stamp over the sequence, and replace every letter in the sequence with the corresponding letter from the stamp.  You can make up to 10 * target.length turns.

// For example, if the initial sequence is "?????", and your stamp is "abc",  then you may make "abc??", "?abc?", "??abc" in the first turn.  (Note that the stamp must be fully contained in the boundaries of the sequence in order to stamp.)

// If the sequence is possible to stamp, then return an array of the index of the left-most letter being stamped at each turn.  If the sequence is not possible to stamp, return an empty array.

// For example, if the sequence is "ababc", and the stamp is "abc", then we could return the answer [0, 2], corresponding to the moves "?????" -> "abc??" -> "ababc".

// Also, if the sequence is possible to stamp, it is guaranteed it is possible to stamp within 10 * target.length moves.  Any answers specifying more than this number of moves will not be accepted.


/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
 var movesToStamp = function(stamp, target) {
    let fullStringIndices = []

    //Find all complete stamp sequences. These stamps happen at the end.

    for(let i = 0; i < target.length - stamp.length + 1; i++) {
        console.log(target.substring(i, i + stamp.length))
        if(target.substring(i, i + stamp.length) === stamp){
            fullStringIndices.push(i)
            console.log('TRUE')
        }
    }

    //No possible final stamp returns no possible sequences

    if(fullStringIndices.length === 0) {
        return []
    }

    //Fill in the front and back of each complete stamp sequences.

    let currentTarget = new Array(target.length - 1)

    let sequence = []

    const stampSequence = (startIndex) => {
        for(let i = 0; i < stamp.length; i++) {
            currentTarget[i+startIndex] = stamp[i]
        }
    }

    if(fullStringIndices.includes(0)) {
        stampSequence(target.length - stamp.length)
        if(!fullStringIndices.includes(target.length - stamp.length)) {
            sequence.push(target.length - stamp.length)
        }
    }

    if(fullStringIndices.includes(target.length - stamp.length)) {
        stampSequence(0)
        if(!fullStringIndices.includes(0)) {
            sequence.push(0)
        }
    }

    for(let j = 0; j < currentTarget.length; j++) {
        if(currentTarget[j] !== target[j]) {
            
        }
    }

    console.log(currentTarget)
    console.log(sequence)

    // console.log(fullStringIndices)
};

// console.log(movesToStamp("abc", "ababc")) //[0,2]
console.log(movesToStamp("abc", "abcbcbbabc")) //[0,2]
// console.log(movesToStamp("abca", "aabcaca")) //[3,0,1]
