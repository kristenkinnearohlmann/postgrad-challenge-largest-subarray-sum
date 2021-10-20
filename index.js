// https://replit.com/@kristenkinnearo/FI-Sums#index.js
function largestSubarraySum(array){
    const arraySums = []

    do {
      arraySums.push(array.reduce((acc,total) => total += acc))
      array.pop()
    } while (array.length > 0)

    return arraySums.sort().pop()
}