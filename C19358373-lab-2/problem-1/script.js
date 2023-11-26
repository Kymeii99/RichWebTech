document.addEventListener("DOMContentLoaded", function() {
    const errorDisplay = document.getElementById("error");
    const noResult = document.getElementById("noResult");
    const nameInput = document.getElementById("name");
    const mobileInput = document.getElementById("mobile");
    const emailInput = document.getElementById("email");
    const addContacts = document.getElementById("add-contact");
    const searchInput = document.getElementById("search");
    const contactTable = document.getElementById("contact-table");
    const sortName = document.getElementById("sort-name");

    let contacts = [];

    // Validation functions
    const valName = (name) => /^[A-Za-z\s]{1,20}$/.test(name);
    const valMobile = (mobile) => /^[0-9]{10}$/.test(mobile);
    const valEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

    // Display an error message
    const showError = (message) => {
        errorDisplay.innerText = message;
        errorDisplay.style.display = "block";
    };

    // Add a contact to the table
    const addContact = () => {
        const name = nameInput.value;
        const mobile = mobileInput.value;
        const email = emailInput.value;

        if (!valName(name) || !valMobile(mobile) || !valEmail(email)) {
            showError("Invalid input or empty fields!");
            return;
        }

        // Add the contact to the table
        const newRow = contactTable.querySelector("tbody").insertRow(-1);
        newRow.insertCell(0).innerText = name;
        newRow.insertCell(1).innerText = mobile;
        newRow.insertCell(2).innerText = email;

        // Reset input fields
        nameInput.value = "";
        mobileInput.value = "";
        emailInput.value = "";

        // Hide the error message
        errorDisplay.style.display = "none";

        // Add the contact to the contacts array
        contacts.push({ name, mobile, email });
    };

    // Sort contacts by name (ascending/descending)
    let sortAscending = true;
    sortName.addEventListener("click", () => {
        sortAscending = !sortAscending;

        contacts.sort((a, b) => {
            const sortOrder = sortAscending ? 1 : -1;
            return sortOrder * a.name.localeCompare(b.name);
        });

        displayContacts(contacts);
    });

    // Display the sorted contacts
    const displayContacts = (sortedContacts = contacts) => {
        const tbody = contactTable.querySelector("tbody");
        tbody.innerHTML = ""; // Clear existing rows

        sortedContacts.forEach((contact) => {
            const newRow = tbody.insertRow(-1);
            newRow.insertCell(0).innerText = contact.name;
            newRow.insertCell(1).innerText = contact.mobile;
            newRow.insertCell(2).innerText = contact.email;
        });
    };

    // Search for contacts by number
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.trim();
        const filteredContacts = contacts.filter((contact) => contact.mobile.includes(searchTerm));
        displayContacts(filteredContacts);
        noResult.style.display = filteredContacts.length === 0 ? "block" : "none";
    });

    // Add Contact button click
    addContacts.addEventListener("click", addContact);
});
