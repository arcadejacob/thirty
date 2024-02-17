document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.addEventListener('click', () => {
      const isBlack = square.style.color === 'black';
      const isFontBig = square.style.fontSize === '4.5rem';
      let backgroundColor = square.style.backgroundColor;

      square.style.color = isBlack ? '' : 'black';
      square.style.fontSize = isFontBig ? '' : '4.5rem';

      
      // STREAK 1
      if(square.innerText === '1'){
        backgroundColor === '' ? square.style.backgroundColor = '#FF0000' : square.style.backgroundColor = '';
        square.style.border === '' ? square.style.border = '5px solid black' : square.style.border = '';
      } else if(square.innerText === '2'){
        square.style.background = '#FF3300';
      } else if(square.innerText === '3'){
        square.style.background = '#FF6600';
      } else if(square.innerText === '4'){
        square.style.background = '#FF9900';
      } else if(square.innerText === '5'){
        square.style.background = '#FFCC00';
      } 

      // STREAK 2
      if(square.innerText === '6'){
        square.style.background = '#FFFF00';
      } else if(square.innerText === '7'){
        square.style.background = '#CCFF00';
      } else if(square.innerText === '8'){
        square.style.background = '#99FF00';
      } else if(square.innerText === '9'){
        square.style.background = '#66FF00';
      } else if(square.innerText === '10'){
        square.style.background = '#33FF00';
      }

      // STREAK 3
      if(square.innerText === '11'){
        square.style.background = '#00FF00';
      } else if(square.innerText === '12'){
        square.style.background = '#00FF33';
      } else if(square.innerText === '13'){
        square.style.background = '#00FF66';
      } else if(square.innerText === '14'){
        square.style.background = '#00FF99';
      } else if(square.innerText === '15'){
        square.style.background = '#00FFCC';
      }

      // STREAK 4
      if(square.innerText === '16'){
        square.style.background = '#00FFFF';
      } else if(square.innerText === '17'){
        square.style.background = '#00CCFF';
      } else if(square.innerText === '18'){
        square.style.background = '#0099FF';
      } else if(square.innerText === '19'){
        square.style.background = '#0066FF';
      } else if(square.innerText === '20'){
        square.style.background = '#0033FF';
      }

      // STREAK 5
      if(square.innerText === '21'){
        square.style.background = '#0000FF';
      } else if(square.innerText === '22'){
        square.style.background = '#3300FF';
      } else if(square.innerText === '23'){
        square.style.background = '#6600FF';
      } else if(square.innerText === '24'){
        square.style.background = '#9900FF';
      } else if(square.innerText === '25'){
        square.style.background = '#CC00FF';
      }

      // STREAK 6
      if(square.innerText === '26'){
        square.style.background = '#FF00FF';
      } else if(square.innerText === '27'){
        square.style.background = '#FF00CC';
      } else if(square.innerText === '28'){
        square.style.background = '#FF0099';
      } else if(square.innerText === '29'){
        square.style.background = '#FF0066';
      } else if(square.innerText === '30'){
        square.style.background = '#FF0033';
      }
    });
  });
});