class BookListService 
{
    save = function(obj){
        
        var temp = JSON.parse(localStorage.getItem("ADDBOOK"));
        var list = temp ? temp : [];
        list.push(obj);       
        localStorage.setItem("ADDBOOK", JSON.stringify(list ) );
    }
    
    list = function(){
        var temp = JSON.parse(localStorage.getItem("ADDBOOK"));
        var list = temp ? temp : [];
        return list;
    }

    

}