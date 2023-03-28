const form = document.querySelector('.hero__form');
const formInput = form.querySelector('.hero__input');
const errorMsg = form.querySelector('.hero__errorMsg');
const emailTemplate = /.+\@.+\..+/;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let inputValue = formInput.value;
  
  if (!inputValue || !inputValue.match(emailTemplate)) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
    form.reset();
  }
})
