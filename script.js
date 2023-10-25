// ---------- FAQ ----------------


const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faqItem => {
  faqItem.addEventListener("click", () => {
    faqItem.classList.toggle("active");
  });
});


// ------------- validation contact form ----------------
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
    
    nameInput.value = ""
    emailInput.value = ""
    msgInput.value = ""

 }
}

// ---------- berger_menu----------------

const burgerMenu = document.querySelector(".burger_menu")
const navLinks = document.querySelector(".nav_links")

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("mobile_menu")
})


