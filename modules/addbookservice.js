class AddBookService {
    addbook = function(bookObj) {
        var usersTemp = JSON.parse(localStorage.getItem("ADDBOOK"));
        var users = usersTemp ? usersTemp : [];
        users.push(bookObj);
        localStorage.setItem("ADDBOOK", JSON.stringify(users));
        let result = "success";
        return result;
    }
}