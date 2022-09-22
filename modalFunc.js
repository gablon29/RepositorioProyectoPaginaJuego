 const formularioRegistro = document.querySelector('#formularioJs');
 const usuarios = [];

 const formulario = (nombre, email, usuario, password) => {
    let datos = {
        nombre: nombre,
        email: email,
        usuario: usuario,
        password: password,
    }
    usuarios.push(datos)

    return datos;
 }

 const ingresandoDatos = () => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios))

 }

 formularioRegistro.addEventListener('submit', (e) => {
    (e).preventDefault

    let nombre =document.getElementById('name').value;
    let email =document.getElementById('email').value;
    let usuario =document.getElementById('usuario').value;
    let password =document.getElementById('password').value;

    formulario(nombre,email,usuario,password);
    ingresandoDatos();
    formularioRegistro.reset();

 })

 const login = () => {
   let nombreUsuario = document.getElementById('nombre').value;
   let contraseña = document.getElementById('contraseña').value;
   let listaDeUsuarios = JSON.parse(localStorage.getItem('usuarios'))

   const cancheo = listaDeUsuarios.find( (usuarios) => {
      return usuarios.usuario === nombreUsuario && usuarios.password === contraseña;
   })

   if (cancheo) {
      alert(`Bienvenido ${cancheo.usuario}`)
   }
   else {
      alert('Usuario o contraseña incorrecto')
   }

 }
