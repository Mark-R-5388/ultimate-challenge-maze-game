const mazeBoard = document.querySelector('#maze-board');
const row = document.querySelector('.row');
const column = document.querySelector('.column');

for (let i = 1; i < 10; i++) {
  let increment = 10;
  let rowElement = document.createElement('div');
  rowElement.classList.add('row');
  rowElement.style.left = increment * i + '%';
  mazeBoard.append(rowElement);
}
