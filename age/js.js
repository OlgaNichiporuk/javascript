
const dateFormat = (date) => {
let formattedDate = ''

if (typeof date !== 'object') return

formattedDate += date.getDate () + '.'
formattedDate += date.getMonth () + '.'
formattedDate += date.getFullYears()

return formattedDate
}
console.log(dateFormat(new Date()));