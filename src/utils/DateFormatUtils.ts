/**
 * Format date to 'aaa dd/MM/yy' style string.
 * @param date date
 * @returns Formated day
 */
const Format = (date: Date): string => {
  const dayOfWeekStr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  let formatStyle = 'aaa dd/MM/yyyy'
  // const date = new Date()
  formatStyle = formatStyle.replace(/aaa/g, dayOfWeekStr[date.getDay()])
  formatStyle = formatStyle.replace(/yyyy/g, date.getFullYear().toString())
  formatStyle = formatStyle.replace(/dd/g, ('0' + date.getDate()).slice(-2))
  formatStyle = formatStyle.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2))
  return formatStyle
}

export { Format as Format }
