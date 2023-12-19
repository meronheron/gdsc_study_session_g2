let result = document.getElementById('result');
function AddToResult(value) {
    result.value += value;
}
function clear() {
    result.value = '';
}
function calculate() {
    try {
    result.value = eval(result.value);
    } catch (error) {
      result.value = 'Error';
    }
  }


