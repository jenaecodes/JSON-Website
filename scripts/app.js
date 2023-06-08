const fetchButton = document.getElementById('fetchBTN');
const todoIdInput = document.getElementById('todoId');
const resultDiv = document.getElementById('result');

fetchButton.addEventListener('click', () => {
    const todoId = todoIdInput.value;
    if (todoId) {
        const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;


    fetch(url)
          .then(response => response.json())
          .then(data => {
            resultDiv.innerHTML = JSON.stringify(data, null, 2);
          })
          .catch(error => {
            console.error(error);
          });
        } else {
            resultDiv.innerHTML - 'cringe';
        }
    });