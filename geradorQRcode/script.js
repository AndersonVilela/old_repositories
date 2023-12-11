
const inputValue = document.querySelector( '#insira' );
const btnValue = document.querySelector( '#btnValue' );
const imgQrcode = document.querySelector( '#img-qrcode' );
const wrapper = document.querySelector( '.box' )
let valueDefault;


// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example


btnValue.addEventListener('click', () => {
    let qrcodeValue = inputValue.value.trim();  
    if(!qrcodeValue || qrcodeValue === valueDefault) return;
    valueDefault = qrcodeValue;
    btnValue.innerText = 'Gerando QR Code...'
    imgQrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`
    imgQrcode.addEventListener('load', () => {
        wrapper.classList.add('active');
        btnValue.innerText = 'Gerar QRCode'
    })
})
