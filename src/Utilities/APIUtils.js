import CONST from "../Environment/Constants.js";

let baseIP = "http://" + CONST.API_INFO.IP + ":" + CONST.API_INFO.PORT;
export function login(username, password) {
    console.log(username, password);
    return fetch(baseIP + "/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(res => res.json());
}