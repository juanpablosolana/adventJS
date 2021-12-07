function createXmasTree(height) {
  let tree=''
  let trunk=''
  let start
  if ((height > 0) && (height < 101)) {
    for (let i = 1 ; i<= height ; i++) {
      if(i===1){
        trunk = '_'.repeat(height - i) + '#'.repeat(i) + '_'.repeat(height - i) + '\n' +
        '_'.repeat(height - i) + '#'.repeat(i) + '_'.repeat(height - i)
        start = i
      }
      tree = tree + '_'.repeat(height - i) + '*'.repeat(start) + '_'.repeat(height-i)+ '\n'
      start=start+2
    }
return tree + trunk
  }
}
console.log(createXmasTree(10));
