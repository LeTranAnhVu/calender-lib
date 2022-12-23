
/**
 * Convert the given hour and return number of pixel of the top value
 * @param hour 
 * @param pixelPerHour number of pixel per hour
 * @returns 
 */
export const timeToTopPx =  (hour: number, pixelPerHour: number): number => {
    if(hour <= 0) {
        throw new Error ("The hour argument must be greater than 0!") 
    }

    if(hour === 1) {
        return 0
    } 
    
    return hour * pixelPerHour
}

