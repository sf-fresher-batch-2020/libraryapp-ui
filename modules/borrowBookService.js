class BorrowBookService{
    borrowbook = function(userObj){
       var usersTemp = JSON.parse(localStorage.getItem("BORROWBOOK"));
       var users= usersTemp ? usersTemp:[];
       users.push(userObj);
       localStorage.setItem("BORROWBOOK",JSON.stringify(users));
       let result="success";
       return result;
        }
}
