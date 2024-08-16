function checkCredentials() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === 'admin' && password === 'admin') {
        Swal.fire({
            position: "middle",
            icon: "success",
            title: "Login successful",
            showConfirmButton: true,
            timer: 2
        });
        return true;
    } else {
        Swal.fire({
            icon: "error",
            title: "Incorrect username or password",
        });
        return false;
    }
}