
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

