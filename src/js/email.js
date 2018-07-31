// var nodemailer = require('nodemailer');
// var sgTransport = require('nodemailer-sendgrid-transport');

// // api key 
// var options = {
//   auth: {
//     api_key: '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'
//   }
// }

// // or

// // usuario y contraseña
// var option = {
//   auth: {
//     api_user: 'carolastra',
//     api_key: 'carolo3030'
//   }
// }
  
// var mailer = nodemailer.createTransport(sgTransport(options));

// //Creando email
// var email = {
//   to: ['joe@foo.com', 'mike@bar.com'],
//   from: 'roger@tacos.com',
//   subject: 'Hi there',
//   text: 'Awesome sauce',
//   html: '<b>Awesome sauce</b>'
// };

// mailer.sendMail(email, function(err, res) {
//   if (err) { 
//     console.log(err) 
//   }
//   console.log(res);
// });