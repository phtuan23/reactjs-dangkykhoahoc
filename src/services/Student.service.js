import axios from 'axios';

class StudentService {
    checkMark = async studentCode => {
        return await (await axios.get(`http://localhost:8080/api/mark/check-score/` + studentCode)).data;
    }
}

export default new StudentService();