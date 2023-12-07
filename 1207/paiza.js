const print = console.log
const stream = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
const lines = stream.split('\n')
const [A, B, C] = lines

print(A)
print(B)
print(C)
