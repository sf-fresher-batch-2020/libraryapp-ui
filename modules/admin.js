class AdminService {
    save(obj) {

        let dTemp = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
        let detail = dTemp ? dTemp : [];
        detail.push(obj);
        localStorage.setItem("LOGGED_IN_USER"), JSON.stringify(detail);
    }
    list() {

        let dTemp = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
        let detail = dTemp ? dTemp : [];
        return detail;
    }



}