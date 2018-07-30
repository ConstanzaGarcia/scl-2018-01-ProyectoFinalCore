//Evento para abrir la pantalla con el menú
document.getElementById('btnEnter').addEventListener('click', () => {
  document.getElementById('register').style.display = 'none';
  document.getElementById('pantallaData').style.display = 'block';
}
);
//Evento para abrir la pestaña de información de visitas
document.getElementById('btnInfo').addEventListener('click', () => {
  document.getElementById('listaInvitados').style.display = 'block';
});

//Evento de boton para regresar a pantalla de registro
document.getElementById('newVisit').addEventListener('click', () => {
  document.getElementById('register').style.display = 'block';
  document.getElementById('pantallaData').style.display = 'none';
});

//Evento para abrir la pestaña de informacion de personas y empresas
document.getElementById('btnInfoEmpresas').addEventListener('click', () => {
  document.getElementById('listaInvitados').style.display = 'none';
  document.getElementById('listaEmpresas').style.display = 'block';
});

//evento para que al tomar foto, se borre el video, y la foto se imprima en la misma ubicación
document.getElementById('startbutton').addEventListener('click', () => {
  document.getElementById('video').style.display = 'none';
  document.getElementById('canvas').style.display = 'block';
});


//Filtro para tabla de visitas
$(document).ready(function () {
  $('#searchBox').on('keyup', function () {
    var value = $(this).val().toLowerCase();
    $('#invitadosContainer tr').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Filtro para tabla de personas y empresas
$(document).ready(function () {
  $('#searchBox2').on('keyup', function () {
    var value = $(this).val().toLowerCase();
    $('#empresasContainer tr').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});