import { login } from "./APIUtils";
class Auth {

    static isAuthenticated = false;

    static login(username, password) {
        return new Promise((resolve, reject) => {
            if(!username || ! password) {
                reject("Empty Credentials")
            }

            login(username, password)
                .then(res => {
                    this.isAuthenticated = res.success;
                    if(res.success) {
                        resolve(res.msg);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    }

    static logout() {
        this.isAuthenticated = false;
        return true;
    }
}

export default Auth;