document.addEventListener('DOMContentLoaded', function() {
    const resourceForm = document.getElementById('resource-form');
    const resourceList = document.getElementById('resource-list');

    resourceForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const availability = document.getElementById('availability').value;
        const role = document.getElementById('role').value;

        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${name}</td>
            <td>${surname}</td>
            <td>${availability}</td>
            <td>${role}</td>
        `;

        resourceList.appendChild(tableRow);

        resourceForm.reset();
    });
});
