var downBtn = document.querySelector('.btn.btn-danger')
var urlInput = document.querySelector('.form-control')

downBtn.addEventListener('click', () => {
  console.log(`URL: ${urlInput.value}`)
  sendUrl(urlInput.value)
})

function sendUrl(url){
  window.location.href = `http://localhost:3001/download?URL=${url}`
}