
/**
 * Convert the given hour and return number of pixel of the top value
 * @param timeToTopPx
 *  Default an hour: 47px
 */

export const timeToTopPx =  (hour: number): number|never => {
    let numberOfPx = 0
    if(hour > 0) {
        if(hour === 1) return numberOfPx
        else return numberOfPx = hour * 47
    }
    throw new Error ("The hour argument must be greater than 0!") 
}