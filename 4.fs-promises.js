const fs = require('node:fs/promises')
// readFileSync para leeer arhivos de forma sincronica
//readFile para leerlos de forma asincronica

console.log('Leyendo el primer archivo... ')
fs.readFile('./archivo.txt', 'utf-8')
.then(text=>{
    console.log('primer texto:',text)
})

console.log('Hacer cosas en el medio XDXDD')

console.log('Leyendo el segundo archivo..')
fs.readFile('./archivo2.txt', 'utf-8')
.then(text=>{
    console.log('segundo texto:',text)
})


