var downBtn = document.querySelector('.botao')
var urlInput = document.querySelector('.input-youtube')

downBtn.addEventListener('click', () => {
  console.log(`URL: ${urlInput.value}`)
  sendUrl(urlInput.value)
})

function sendUrl(url){
  window.location.href = `http://localhost:3001/download?URL=${url}`;
}