/**
 * Convert a given hour as an argument and return number of pixel of the height value
 * @param timeToHeightPx
 *  Default an hour: 47px
 */

 export const timeToHeightPx =  (hour: number): number| never => {
    let numberOfPx = 0
    if(hour > 0) {
        return numberOfPx = hour * 47;
    }
    throw new Error ("The hour argument must be greater than 0!")
}