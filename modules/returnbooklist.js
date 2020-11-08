class ReturnBookListService {

    save = function(obj) {

        var temp = JSON.parse(localStorage.getItem("BORROWBOOK"));
        var list = temp ? temp : [];
        list.push(obj);
        localStorage.setItem("BORROWBOOK", JSON.stringify(list));
    }
    list = function() {
        var temp = JSON.parse(localStorage.getItem("BORROWBOOK"));
        var list = temp ? temp : [];
        return list;
    }

}