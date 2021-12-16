import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class PostService {
    
    // GET Posts

    static async getPosts() {

        try {
            const res = await axios.get(url);
            console.log(res);
            const data = res.data;
            return data.map(post => ({
                ...post,
                createdAt: new Date(post.createdAt)
            }));
        } catch(err) {
            console.log(err);
        }
        
    }


    // CREATE Posts

    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }


    // DELETE Posts

    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }

}


export default PostService;