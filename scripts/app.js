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
        resultDiv.innerHTML = `
        <p>User ID: ${data.userId}</p>
        <p>ID: ${data.id}</p>
        <p>Title: ${data.title}</p>
        <p>Completed: ${data.completed}</p>
      `;
      })
      .catch(error => {
        console.error(error);
      });
  } else {
    resultDiv.innerHTML = 'Please enter a ToDo ID';
  }
});
