function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    let display = document.getElementById('display');
    try {
      display.value = eval(display.value); // Faz a operação matemática
    } catch (e) {
      display.value = 'erro';
    }
  }