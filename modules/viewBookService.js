class ViewBookService {
    viewRecord = function(userObj) {
        var usersTemp = JSON.parse(localStorage.getItem("VIEWBOOKS"));
        var users = usersTemp ? usersTemp : [];
        users.push(userObj);
        localStorage.setItem("VIEWBOOKS", JSON.stringify(users));
        let result = "success";
        return result;
    }
}