let uList = [7,5,9,2,6,8]
let guard = 0

for (let i = 0; i < uList.length; i++) {
  for (let j = i; j < uList.length; j++) {
    if (uList[i] < uList[j]) {
      guard = j
    } else {
      guard = i
    }
    uList[i] = guard
  }
  
}
console.log(uList)