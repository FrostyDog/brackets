module.exports = function check(str, bracketsConfig) {
  let brArray = str.split("")
  let stack = []
  console.log(str)
  console.log(bracketsConfig)

do{
  bracketsConfig.push([0,0])
}
 while (bracketsConfig.length < 4)
  
  brArray.forEach(el => {
    if (el == "|" && stack.includes("|")) {stack.pop()}
    else if (el == bracketsConfig[0][0] || el == bracketsConfig[1][0] || el == bracketsConfig[2][0] || el == bracketsConfig[3][0] ) { stack.push(el); }
    else if (el == bracketsConfig[0][1] || el == bracketsConfig[1][1] || el == bracketsConfig[2][1] || el == bracketsConfig[3][1]) {

        if (bracketsConfig[0][0] == stack[(stack.length - 1)] && bracketsConfig[0].includes(el)) {
          stack.pop();
        } else if (bracketsConfig[1][0] == stack[(stack.length - 1)] && bracketsConfig[1].includes(el)) {
          stack.pop();
        } else if (bracketsConfig[2][0] == stack[(stack.length - 1)] && bracketsConfig[2].includes(el)) {
          stack.pop();
        } else if (bracketsConfig[3][0] == stack[(stack.length - 1)] && bracketsConfig[3].includes(el)) {
          stack.pop();
        }
         else { return false }
    }
  })

  return(stack.length == 0)

}




