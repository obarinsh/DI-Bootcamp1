const axios = require('axios');


async function fetchPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data; // ✅ Return data to be used elsewhere
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        throw error; // ✅ Ensure the caller knows about the error
    }
}
module.exports = { fetchPosts };