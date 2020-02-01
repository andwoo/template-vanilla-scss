import '../scss/main.scss';

const node: HTMLParagraphElement = document.createElement('p');
node.textContent = 'Hello There!';
document.getElementById('app').appendChild(node);
