import axios from 'axios';

class CategoryCourse {
    getAll = async () => {
        let res = await axios.get(`http://localhost:8080/api/c`);
        return res.data;
    }
}

export default new CategoryCourse();