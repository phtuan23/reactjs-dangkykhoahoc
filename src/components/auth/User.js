import axios from 'axios';

class UserAuth {

    getAuth = () => {
        return JSON.parse(localStorage.getItem("user"));
    }

    saveAuth = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
    }

    login = async (values) => {
        let res = await axios.post("http://localhost:8080/api/users/login", values);
        return res;
    }

    logout = () => {
        localStorage.removeItem("user");
    }
}

export default new UserAuth();