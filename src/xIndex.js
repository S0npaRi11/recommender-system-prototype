const calculateDays = (date) => {
    const day  = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    let isLeapYear = 0

    // define date table
    const dateTable = {
        1: 0,
        2: 31,
        3: 59,
        4: 90,
        5: 120,
        6: 151,
        7: 181,
        8: 212,
        9: 243,
        10: 273,
        11: 304,
        12: 334
    }

    // first check for leap year
    if(year / 4 === 0) isLeapYear = 1

    //caculate days passed (for previous date purchase)
    let days = day + dateTable[month] + isLeapYear

    return days
}

const calulateXIndex = (prevDate, currDate) => {

    // convert precDate and currdate to days
    const prevDateDays = calculateDays(prevDate)
    const currDateDays = calculateDays(currDate)

    // difference
    let diff = currDateDays - prevDateDays

    let weeksPassed = Math.floor(diff / 7)

    if(weeksPassed === 0) return -1

    return (weeksPassed - 1)
    
}

export const xIndex = calulateXIndex