class BorrowBookService{
    borrowbook = function(borrowlist){
       var usersTemp = JSON.parse(localStorage.getItem("BORROWBOOK"));
       var users= usersTemp ? usersTemp:[];
       users.push(borrowlist);
       localStorage.setItem("BORROWBOOK",JSON.stringify(users));
       let result="success";
       return result;
        }
}
