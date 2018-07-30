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
    <td>${newMessage.val().img} </td>
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

//FETCH 
//Llamando a local.json, donde se encuentran las personas pertenecientes al IF
let optionsMenu = document.getElementById('optionsContainer');
optionsMenu.length = 0;

let options = document.createElement('option');
options.text = '¿A quién visitas?';

optionsMenu.add(options);
optionsMenu.selectedIndex = '';

const dataJson = '../data/local.json';

fetch(dataJson)
  .then(
    function(response)
    {
      if (response.status !== 200)
      {
        console.error('Error: no se puede cargar la información' +
          response.status);
        return;
      }

      //Revisa la información con "response" 
      response.json().then(function(data)
      {
        let option;

        for (let i = 0; i < data.length; i++)
        {
          option = document.createElement('option');
          option.text = `
          ${data[i].name} (${data[i].Empresa})
          `;

          optionsMenu.add(option);
        }
      });
    }
  )
  .catch(function(err)
  {
    console.error('Fetch Error -', err);
  });


  //Funcion para sacar foto
(function() {

  var streaming = false,
      video        = document.querySelector('#video'),
      canvas       = document.querySelector('#canvas'),
      photo        = document.querySelector('#photo'),
      startbutton  = document.querySelector('#startbutton'),
      width = 320,
      height = 0;

  navigator.getMedia = ( navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia);

  navigator.getMedia(
    {
      video: true,
      audio: false
    },
    function(stream) {
      if (navigator.mozGetUserMedia) {
        video.mozSrcObject = stream;
      } else {
        var vendorURL = window.URL || window.webkitURL;
        video.src = vendorURL.createObjectURL(stream);
      }
      video.play();
    },
    function(err) {
      console.log("An error occured! " + err);
    }
  );

  video.addEventListener('canplay', function(ev){
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth/width);
      video.setAttribute('width', width);
      video.setAttribute('height', height);
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      streaming = true;
    }
  }, false);

  function takepicture() {
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(video, 0, 0, width, height);
    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }

  startbutton.addEventListener('click', function(ev){
      takepicture();
    ev.preventDefault();
  }, false);

})();






