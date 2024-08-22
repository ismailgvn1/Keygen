const message = document.querySelector('.message');
const keyInfo = document.querySelector('.key-info');
const keyElement = document.getElementById('key');
const codeElement = document.getElementById('code');
const whichElement = document.getElementById('which');

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const code = event.code;
    const which = event.which;

    keyElement.textContent = key;
    codeElement.textContent = code;
    whichElement.textContent = which;

    message.style.display = 'none';
    keyInfo.style.display = 'block';
});
