// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = ''

  for (var i=0; i<str.length; i++){
    
  }
}
// Solution1
// function reverse(str) {
//   const arr = str.split('')
//   arr.reverse()
//   return arr.join('')
// }
// Solution1b
//  return str.split('').reverse().join('')

// Solution2
// function reverse(str) {
//   let reversed = ''

//   for (let character of str){
//     reversed = character + reversed
//   }
//   return reversed
// }



module.exports = reverse;
