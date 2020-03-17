module.exports = function check(str, bracketsConfig) {
  let brArray = str.split("")
  let stack = []

  let bracketsOptions = bracketsConfig.map(el => el.join("")).join("")

  brArray.forEach(el => {
      for (let n = 0; n < bracketsOptions.length; n += 2) {
          let m = n + 1
          if (el == bracketsOptions[m] && bracketsOptions[n] == bracketsOptions[m] && bracketsOptions[n] == stack[(stack.length - 1)]) {
              stack.pop()
              break;
          }

          if (el == bracketsOptions[n]) {
              stack.push(el)
              break;
          } else if (el == bracketsOptions[m]) {
              if (bracketsOptions[n] == stack[(stack.length - 1)]) {
                  stack.pop()
                  break
              } else {
                  return false
              }
          } else {
              return false
          }

      }
  })

  return (stack.length == 0)

}



  // ________________________________________

//   function checkx(str, bracketsConfig) {
//     let brArray = str.split("")
//     let stack = []
//     console.log(str)
//     console.log(bracketsConfig)
  
//     // do {
//     //   bracketsConfig.push([0, 0])
//     // }
//     // while (bracketsConfig.length < 4)
//     let bracketsOptions = bracketsConfig.map(el => el.join("")).join("")
//     brArray.forEach(el => {
//   for (let n = 0; n < bracketsOptions.length; n += 2) {
//       let m = n + 1
//       if (el == bracketsOptions[m] && bracketsOptions[n] == bracketsOptions[m] && bracketsOptions[n] == stack[(stack.length - 1)]) {
//         stack.pop()
//         break;
//       }
      
//       if (el == bracketsOptions[n]) {
//           stack.push(el)
//           break;
//       } else if (el == bracketsOptions[m]) {
//           if (bracketsOptions[n] == stack[(stack.length - 1)]) {
//                   stack.pop()
//                   break
//               } else {console.log(false)}
//           }
//           else {
//               console.log(false)
//           }
  
//       }})
  
//       console.log(stack.length == 0)
  
//     }
  



// checkx("[]][[]", [ [ '(', ')' ], [ '[', ']' ], [ '{', '}' ] ])
