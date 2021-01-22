import '../style/main.scss';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello There!';
  return element;
}

document.body.appendChild(component());
