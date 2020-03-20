module.exports = function check(str, bracketsConfig) {
    let brArray = str.split("")
    let stack = []

    let bracketsOptions = bracketsConfig.map(el => el.join("")).join("")
    if (str.length % 2 !== 0) { return false }
    brArray.forEach(el => {
        for (let n = 0; n < bracketsOptions.length; n += 2) {

            let m = n + 1

            if (el == bracketsOptions[m]
                && bracketsOptions[n] == bracketsOptions[m]
                && bracketsOptions[n] == stack[stack.length - 1]) {
                stack.pop()
            } else if (el == bracketsOptions[n]
                && bracketsOptions[n] == bracketsOptions[m]
                && bracketsOptions[n] !== stack[stack.length - 1]) {
                stack.push(el)
            }

            if (el == bracketsOptions[n] && bracketsOptions[n] !== bracketsOptions[m]) {
                stack.push(el)
            } else if (el == bracketsOptions[m] && bracketsOptions[n] !== bracketsOptions[m]) {
                if (bracketsOptions[n] == stack[stack.length - 1]) {
                    stack.pop()
                } else {
                    return false
                }
            }
        }
    })

    return (stack.length == 0)
}