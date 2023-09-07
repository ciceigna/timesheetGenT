document.addEventListener('DOMContentLoaded', function() {
    const resourceForm = document.getElementById('resource-form');
    const resourceList = document.getElementById('resource-list');

    resourceForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const availability = document.getElementById('availability').value;
        const role = document.getElementById('role').value;

        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${name} ${surname}</strong> - Disponibilidad: ${availability} - Rol: ${role}`;
        resourceList.appendChild(listItem);

        resourceForm.reset();
    });
});
