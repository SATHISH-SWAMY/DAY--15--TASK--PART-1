document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.id === 'calculate') {
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = 'Error';
          }
        } else if (button.id === 'clear') {
          display.value = '';
        } else {
          display.value += button.textContent;
        }
      });
    });
  });
  






  