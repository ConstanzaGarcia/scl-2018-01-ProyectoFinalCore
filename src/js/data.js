//DATOS INGRESADOS QUE SE GUARDAN EN TABLA
firebase.database().ref('visitas')
  .limitToLast(50) //filtro para no obtener todos los mensajes
  .once('value')
  .then((messages) => {
    console.log("Mensajes >" + JSON.stringify(visitas));
  })
  .catch(() => {

  });


//Llamando a los mensajes  para que aparezcan cada vez que recargue la pagina
firebase.database().ref('visitas')
  .limitToLast(50) //muestra solo los ultimos 5 mensajes como historial al recargar la pagina
  .on('child_added', (newMessage) => {
    invitadosContainer.innerHTML = `
    <tr>
    <td>${newMessage.val().names}</td>
    <td>${newMessage.val().ruts}</td>
    <td>${newMessage.val().patentes} </td>
    <td> </td>
    <td> </td>
    </tr> 
          `+ invitadosContainer.innerHTML;
  });


// Firebase Database
// Guardar los mensajes en database, llamada messages
function sendMessage() {
  if (inputName.value.length === 0 || null && inputRut.value.length === 0 || null) {
    alert('Debes ingresar todos los datos solicitados')
  } else {
  
  const name = inputName.value;
  const rut = inputRut.value;
  const patente = inputPatente.value;
  

  //Para tener una nueva llave en la colección messages
  const newMessageKey = firebase.database().ref().child('visitas').push().key;


  firebase.database().ref(`visitas/${newMessageKey}`).set({
    names: name,
    ruts: rut,
    patentes: patente,
  });
  name.value = '';
  rut.value = '';
  patente.value = '';
  alert('Datos ingresados correctamente, y notificación enviada con éxito');
}    
}         

