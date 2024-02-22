function formSubmit(event) {
    event.preventDefault();

    // Getting form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const foods = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(food => food.value);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Validating food selection
    if (foods.length < 2) {
        document.getElementById('foodError').innerText = "Must choose at least 2!!!";
        return; // Stop further execution if validation fails
    } else {
        document.getElementById('foodError').innerText = "";
    }

    // Getting reference to table body
    const tableBody = document.getElementById('tableBody');

    // Creating new row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${foods.join(', ')}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    // Append row to table
    tableBody.appendChild(newRow);

    // Clear form fields
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('pincode').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.querySelectorAll('input[name="food"]:checked').forEach(food => food.checked = false);
    document.getElementById('state').value = '';
    document.getElementById('country').value = '';
}
