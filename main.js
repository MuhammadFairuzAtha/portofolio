const birthDate = new Date("2006-11-26");
const today = new Date();

  const age =
    today.getFullYear() -
    birthDate.getFullYear() -
    (today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
      ? 1
      : 0);  

document.getElementById("umurku").textContent = `${age}`;


const newyear = new Date();
const year = newyear.getFullYear();
document.getElementById("tahun").textContent = `${year}`;


const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();  
    emailjs.sendForm("service_12lq20f","template_m0067ho",form)
      .then(() => {
        alert('Message sent!');
        form.reset(); // kosongkan form
      }, (err) => {
        console.log('FAILED...', err);
      });
  });