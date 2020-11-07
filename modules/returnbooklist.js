class ReturnBookListService 
{
    
    save = function(obj){
        
        var temp = JSON.parse(localStorage.getItem("BORROWBOOK"));
        var list = temp ? temp : [];
        list.push(obj);       
        localStorage.setItem("BORROWBOOK", JSON.stringify(list ) );
    }
    list = function(){
        var temp = JSON.parse(localStorage.getItem("BORROWBOOK"));
        var list = temp ? temp : [];
        return list;
    }
    returnRecord = function(userObj){
        var usersTemp = JSON.parse(localStorage.getItem("RETURNBOOK"));
        var users= usersTemp ? usersTemp:[];
        users.push(userObj);
        localStorage.setItem("RETURNBOOK",JSON.stringify(users));
        let result="success";
        return result;
         }

    

}