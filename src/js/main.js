
document.getElementById('btnEnter').addEventListener('click', () => {
  document.getElementById('register').style.display = 'none';
  document.getElementById('pantallaData').style.display = 'block';
}
);

document.getElementById('btnInfo').addEventListener('click', () => {
  document.getElementById('listaInvitados').style.display = 'block';
});

document.getElementById('newVisit').addEventListener('click', () => {
  document.getElementById('register').style.display = 'block';
  document.getElementById('pantallaData').style.display = 'none';
});

//evento para que al tomar foto, se borre el video, y la foto se imprima en la misma ubicacion
document.getElementById('startbutton').addEventListener('click', () => {
  document.getElementById('video').style.display = 'none';
  document.getElementById('canvas').style.display = 'block';
});


//Filtro para tabla
$(document).ready(function () {
  $("#searchBox").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#invitadosContainer tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});