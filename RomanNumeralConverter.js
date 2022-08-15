function convertToRoman(num) {
  const digits = [ 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000 ]
  const numerals = [ 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M' ]

  let i = 12
  let output = String()

  while (num > 0) {
    let div = Math.floor(num/digits[i])
    num = num%digits[i]

    while (div--) {
      output = output.concat(numerals[i])
    }
    i--
  }

  console.log(output)
  return output
}

convertToRoman(80)
