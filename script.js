// Integração HTML E JS

var urlInput = document.querySelector('.urlInput')
var downBtn = document.querySelector('.btnSubmit')

downBtn.addEventListener('click', () => {
  console.log(`URL: ${urlInput.value}`)
  sendUrl(urlInput.value)
})

function sendUrl(url){
  window.location.href = `http://localhost:3001/download?URL=${url}`
}