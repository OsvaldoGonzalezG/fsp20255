let UsuarioValido='Admin' ;
let ContraseñaValida='Admin123' ;

let user = prompt('Ingrese Usuario');
let pass =prompt('Ingrese Contraseña');

if (user==UsuarioValido && pass==ContraseñaValida){
    console.log('Bienvenido Usuario:'+user)
} 
else{
    console.log('Error en sus credenciales')
}
