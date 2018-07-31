const name = inputName.value;


Email.send("registrovisita@ifblanco.com",
  "to@them.com",
  "Nueva visita",
  "Hola, tiene una nueva visita en la entrada de if Blanco, por favor, acérquese a recibirla.",
  { token: "5f028f04-6e49-46d3-b7a7-3f40408db378" });

function saveContactForm(infoUsuarioIf) {
  firebase
    .database()
    .ref('zonaIf')
    .push(infoUsuarioIf) // Hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
    .then(function () {
      //alert('Se ha enviado un aviso de su llegada'); // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
      console.info(Email);

      Email.send('registrovisita@ifblanco.com',
        receiverEmail,
        'Visitante',
        'Hola, tiene un nuevo visitante, su nombre es:' + name,
        {
          token: '5f028f04-6e49-46d3-b7a7-3f40408db378'
        });

      alert('Se ha enviado un aviso de su llegada'); 
      alert('mensaje guardado'); 
    })

    .catch(function () {
      alert('El email no pudo ser enviado.'); 

    });

}