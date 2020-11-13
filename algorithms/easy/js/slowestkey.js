/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    if (releaseTimes.length === 1)
        return keysPressed[0];
    let largest = releaseTimes[0];
    let largestIndex = 0;
    for(let i=1;i<releaseTimes.length; i++){
        if(largest < releaseTimes[i] - releaseTimes[i-1])
        {
            largest = releaseTimes[i] - releaseTimes[i-1];
            largestIndex = i;
        }
        else if( largest === releaseTimes[i] - releaseTimes[i-1])
            {
                if ( keysPressed[largestIndex] <keysPressed[i])
                    largestIndex = i;
            }
    }
    return keysPressed[largestIndex];
};
