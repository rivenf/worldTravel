/* Collapsing image panels */
const panels = document.querySelectorAll('.panel');

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  })
}

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  })
})

/* Log form values to the console */
const form = document.getElementById("contactForm");
const submitter = document.getElementById("submitBtn");
const formData = new FormData(form, submitter);

function logData() {
  console.log(formData);
}

submitBtn.addEventListener('click', logData);