import axios from 'axios';

class CourseService {
    getAll = async () => {
        let res = await axios.get(`http://localhost:8080/api/course`);
        return res.data;
    }

    getBySlug = async slug => {
        let res = await axios.get(`http://localhost:8080/api/course/` + slug);
        return res.data;
    }

    getByCatSlug = async slug => {
        let res = await axios.get(`http://localhost:8080/api/course/c/` + slug);
        return res.data;
    }
}

export default new CourseService();