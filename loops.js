function forLoop(array){
  for (let i = 0; i < 25; i++)  {
    array.push(`I am 1 strange loop.`)
 
  }
console.log(array)
return array

}
function whileLoop(n) {
  while (n > 0) {console.log(--n)
}
    return "done"
    
  }
function doWhileloop(array){
  do {--array}
  while (array.length > 0 && maybeTrue())
  
  return array
}