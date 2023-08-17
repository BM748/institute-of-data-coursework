function fetchData(operator, num1, num2) {
  const operatorMap = {
    '+': 'add',
    '-': 'subtract',
    '*': 'multiply',
    '/': 'divide',
  };
  
  const operation = operatorMap[operator];
  const url = `/calculator/${operation}?num1=${num1}&num2=${num2}`;

  return fetch(url)
    .then(res => res.json())
    .then(json => json.result)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

  function appendToOutput(value) {
  document.getElementById("output").value += value;
  }
  
  function clearOutput() {
  document.getElementById("output").value = "";
  }
  
  
  
  async function calculate() {
  try {
    const expression = document.getElementById("output").value;
    const operators = ['+', '-', '*', '/'];
  
    for (const operator of operators){
        if (expression.includes(operator)) {
            const [num1, num2] = expression.split(operator);
            const result = await fetchData(operator, num1, num2);
            document.getElementById("output").value = result;
            break;
        }
    }
  }catch(error) {
    document.getElementById("output").value = "Error";
  }
  }
  
  
  
  function backspace() {
  const output = document.getElementById("output");
  const currentExpression = output.value;
  output.value = currentExpression.slice(0, -1);
  }