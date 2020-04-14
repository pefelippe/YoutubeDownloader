var downBtn = document.querySelector('.botao')
var urlInput = document.querySelector('.input-youtube')

downBtn.addEventListener('click', () => {
  console.log(`URL: ${urlInput.value}`)
})