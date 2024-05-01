const qrImg = document.getElementById('qrImg');
const userText = document.getElementById('userText');

function generateQR() {
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + userText.value;
}