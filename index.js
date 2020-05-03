class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1) 
  }

  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace(/[^-'\w\s]/gi, '');
  }

  static titleize(string) {
    let string_array = string.split(' ')
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    for (let n = 0; n < string_array.length; n++) {
      if (n == 0) {
        result.push(this.capitalize(string_array[n]))
      } else if (exceptions.includes(string_array[n])) {
        result.push(string_array[n])
      } else {
        result.push(this.capitalize(string_array[n]))
      }
      
    }
    return result.join(' ')
  }
}

