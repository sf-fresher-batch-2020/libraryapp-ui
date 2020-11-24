class RegisterService {
    register = function(userObj) {
        var usersr = JSON.parse(localStorage.getItem("USERS")) || [];
        if (!usersr.some(user => user.email === userObj.email)) {
            usersr.push(userObj);
            localStorage.setItem("USERS", JSON.stringify(usersr));
            location.reload();
            console.log(userObj);
            alert("continue login");
            let result = "success";
            return result;
        } else {
            alert("user already exists try registering with different credentials");
        }
    }
}