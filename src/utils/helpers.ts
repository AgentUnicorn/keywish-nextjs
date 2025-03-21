export const timestamptToDateString = (timestamp: number) => {
    var date = new Date(timestamp * 1000);
    return date.toLocaleDateString()
}