const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faqItem => {
  faqItem.addEventListener("click", () => {
    faqItem.classList.toggle("active");
  });
});



const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msgInput = document.getElementById('message');


function onSubmit() {
  let isValid = true;
  const nameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!nameRegex.test(nameInput.value)) {
    isValid = false;
    alert('Please enter a valid name.');

  }


  else if (!emailRegex.test(emailInput.value)) {
    isValid = false;
    alert('Please enter a valid email address.');
    e.preventDefault();
  }

  else if (!isValid) {
    e.preventDefault();
  }

 else{
    alert("sent successfully")
    nameInput.value = ""
    emailInput.value = ""
    msgInput.value = ""

 }
}