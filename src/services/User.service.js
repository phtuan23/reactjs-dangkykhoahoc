import axios from 'axios';
class UserService {

    save = async (data) => {
        let res = await axios.post("http://localhost:8080/api/users/save", data);
        return res;
    }

    detail = async (id) => {
        let res = await axios.get("http://localhost:8080/api/users/detail/" + id);
        return res;
    }


    updateAvt = async (data) => {
        let res = await axios.post("http://localhost:8080/api/users/uploadAvt", data)
        return res;
    }
}

export default new UserService();