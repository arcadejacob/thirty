document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.addEventListener('click', () => {
      // Check if the current background color is red
      const isRed = square.style.backgroundColor === 'red';

      // Toggle the background color
      square.style.backgroundColor = isRed ? '' : 'red';
    });
  });
});