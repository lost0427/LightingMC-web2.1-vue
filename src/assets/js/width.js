const sourceElement = document.getElementById('user');
const targetElement = document.getElementById('nav');

const sourceWidth = sourceElement.offsetWidth;
const calculatedHeight = 100% - sourceElementHeight; // 例如，将高度乘以2

targetElement.style.width = calculatedHeight + 'px';
