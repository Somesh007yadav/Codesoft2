document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let input = '';
    
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const value = this.textContent;
        
        if (value === 'C') {
          input = '';
        } else if (value === '←') {
          input = input.slice(0, -1);
        } else if (value === '=') {
          try {
            input = eval(input).toString();
          } catch (error) {
            input = 'Error';
          }
        } else {
          input += value;
        }
        
        display.textContent = input;
      });
    });
  });
  