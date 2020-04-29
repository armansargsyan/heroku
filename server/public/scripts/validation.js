document.querySelectorAll('input').forEach(input => {
  input.addEventListener('focus',() => {
    input.classList.add('validation');
  })
});
