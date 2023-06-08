fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const tableBody = document.getElementById('userTableBody');

        users.forEach(user => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const emailCell = document.createElement('td');
            const usernameCell = document.createElement('td');
            const phoneCell = document.createElement('td');
            const websiteCell = document.createElement('td');
            const companyCell = document.createElement('td');

            nameCell.innerHTML = user.name;
            emailCell.innerHTML = user.email;
            usernameCell.innerHTML = user.username;
            phoneCell.innerHTML = user.phone;
            websiteCell.innerHTML = user.website;
            companyCell.innerHTML = user.company.name;

            row.appendChild(nameCell);
            row.appendChild(emailCell);
            row.appendChild(usernameCell);
            row.appendChild(phoneCell);
            row.appendChild(websiteCell);
            row.appendChild(companyCell);

            tableBody.appendChild(row);
        })

    })