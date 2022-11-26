let generoDelUsuario1 = prompt ("ingrese su sexo, si decide no hacerlo, ingrese no")

const generoFemenino = "mujer"
const generoMasculino = "hombre"
const prefieroPrivacidad = "no"

if ( generoDelUsuario1 === generoFemenino ) {
    alert ("bienvenida a nuestro sitio web")
} else if ( generoDelUsuario1 === generoMasculino ) {
    alert ("bienvenido a nuestro sitio web")
} if ( generoDelUsuario1 === prefieroPrivacidad ) {
    alert ("bienvenida/o a nuestro sitio web")
}
alert ( "¡Gracias por visitar mi pagina!, aqui podras calcular los costos de tus viajes, espero tengas una buena experiencia" )

let dato1 = prompt (`ingrese aqui el lugar a viajar`)
console.log (dato1)
let dato2 = prompt (`ingrese aqui los costos del avion`)
console.log (dato2)
let dato3 = prompt (`ingrese aqui los costos del hotel`)
console.log (dato3)
let dato4 = prompt (`ingrese aqui los costos del transporte`)
console.log (dato4)
let dato5 = prompt (`ingrese aqui el costo de la comida`)
console.log (dato5)
let dato6 = prompt (`ingrese aqui los costos de los entretenimientos`)
console.log (dato6)


let dato7 = prompt (`ingrese aqui los costos secundarios, opcional. ingrese -no- si no quiere sumar los costos`)

const gastosSecundarios = 1
const prefieroNoHacerlo = `no`
if ( parseInt (dato7) > gastosSecundarios ) {
    console.log (dato7)
}
 else if ( dato7 === prefieroNoHacerlo ) {
    console.log ("no ingresaste ningun costo")
}

costoFinal = console.log ( parseInt (dato2) + parseInt (dato3) + parseInt (dato4) + parseInt (dato5) + parseInt (dato6) + parseInt (dato7) )