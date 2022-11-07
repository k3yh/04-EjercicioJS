let Nombre = 'Oscar'
let Apellido = 'Salazar'
let estudiante = `${Nombre} ${Apellido}`

console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase``
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase``
console.log(estudianteMinus)

let estudianteLenght = estudiante.length
console.log(estudianteLenght)

let NombreFirstLetter = Nombre.charAt``
console.log(NombreFirstLetter)

let ApellidoFirstLetter = Apellido.charAt``
console.log(ApellidoFirstLetter)

let estudianteWithoutSpace = estudiante.replace(/ /g,'');
console.log(estudianteWithoutSpace)

let NombreInEstudiante =  estudiante.startsWith(`${Nombre}`)
console.log(NombreInEstudiante)