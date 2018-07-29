//DATOS INGRESADOS QUE SE GUARDAN EN TABLA
firebase.database().ref('visitas')
  .limitToLast(50) //filtro para no obtener todos los mensajes
  .once('value')
  .then((messages) => {
    console.log("Mensajes >" + JSON.stringify(visitas));
  })
  .catch(() => {

  });

firebase.database().ref('visitas')
  .limitToLast(50) 
  .on('child_added', (newMessage) => {
    const time = new Date(newMessage.val().time);
    invitadosContainer.innerHTML = `
    <tr>
    <td>${newMessage.val().names}</td>
    <td>${newMessage.val().ruts}</td>
    <td>${newMessage.val().patentes} </td>
    <td>${time.getHours()}:${time.getMinutes()} del día ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}</td>
    <td> </td>
    </tr> 
          `+ invitadosContainer.innerHTML;
  });


// Firebase Database
// Guarda  ela info en database, llamada visitas
function sendMessage() {
  if (inputName.value.length === 0 || null && inputRut.value.length === 0 || null) {
    alert('Debes ingresar todos los datos solicitados')
  } else {
  
  const name = inputName.value;
  const rut = inputRut.value;
  const patente = inputPatente.value;
  

  //Para tener una nueva llave en la colección visitas
  const newMessageKey = firebase.database().ref().child('visitas').push().key;


  firebase.database().ref(`visitas/${newMessageKey}`).set({
    names: name,
    ruts: rut,
    patentes: patente,
    time: Date.now(),
  });
  inputName.value ='';
  inputRut.value ='';
  inputPatente.value ='';
  alert('Datos ingresados correctamente, y notificación enviada con éxito');
}    
}         


/*
//FETCH 
//Llamando a local.json, donde se encuentran las personas pertenecientes al IF
fetch('../data/local.json')
  .then(response => response.json())
  .then(localJSON => {
    local = localJSON;
    console.log(local);
  })
  .catch(error => {
    console.error("No pudimos obtener usuarios");
    console.error("ERROR > " + error.stack); // imprime donde esta el error
  });
  */


  /*
  const renderInfo = (local) => {
    containerLocal.innerHTML = `
    <select>
    <option>${local.name}(${local.empresa})</option>
    </select> 
          `+ containerLocal.innerHTML;
  }
*/






