$(document).ready(function() {
    const userData = [
        { id: 1, name: "User 1", surname: "User1", email: "user1@example.com", password: "11111111" },
        { id: 2, name: "User 2", surname: "User2", email: "user2@example.com", password: "22222222" },
        { id: 3, name: "User 3", surname: "User3", email: "user3@example.com", password: "33333333" },
    ];
//All users
    function populateUserTable() {
        const userTableBody = $("#userTableBody");
        userTableBody.empty();
        userData.forEach(user => {
            userTableBody.append(`
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.surname}</td>
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                </tr>
            `);
        });
        $("#userTable").show();
    }

    $("#usersButton").off("click").on("click", function () {
        populateUserTable();
    });
//Delete user
    $("#deleteUser").on("click", function() {
        const idToRemove = prompt("Enter the ID of the user to remove:");
        const indexToRemove = userData.findIndex(user => user.id === parseInt(idToRemove, 10));

        if (indexToRemove !== -1) {
            userData.splice(indexToRemove, 1);
            populateUserTable(); // Refresh the table after removal
        } else {
            alert("User with the specified ID not found.");
        }
    });
//Edit user 
    $("#editUser").on("click", function () {
        const idToEdit = prompt("Enter the ID of the user to edit:");
        const userToEdit = userData.find(user => user.id === parseInt(idToEdit, 10));
    
        if (userToEdit) {
            const editForm = `
                <div class="container">
                    <h2>Edit User</h2>
                    <form id="editUserForm">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" class="form-control" id="name" value="${userToEdit.name}">
                        </div>
                        <div class="form-group">
                            <label for="surname">Surname:</label>
                            <input type="text" class="form-control" id="surname" value="${userToEdit.surname}">
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control" id="email" value="${userToEdit.email}">
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" class="form-control" id="password" value="${userToEdit.password}">
                        </div>
                        <button type="button" class="btn btn-primary" id="saveChanges">Save</button>
                    </form>
                </div>
            `;
            $("#userTable").html(editForm).show();
    
            $("#saveChanges").on("click", function () {
                const updatedUser = {
                    id: userToEdit.id,
                    name: $("#name").val(),
                    surname: $("#surname").val(),
                    email: $("#email").val(),
                    password: $("#password").val(),
                };
                const userIndex = userData.findIndex(user => user.id === updatedUser.id);
                userData[userIndex] = updatedUser;
    
                populateUserTable();
                $("#userTable").hide();
            });
        } else alert("User with the specified ID not found.");
    });
    
});
