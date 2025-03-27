import axios from 'axios';


export const fetchUserData = async (username, location, minRepos) => {
    try {
        const query = `q=${username ? `${username}+` : ''}${location ? `location:${location}+` : ''}${minRepos ? `repo:>=${minRepos}` : ''}`;
        const response = await axios.get('https://api.github.com/users/{username}');
        return response.data;
    }   catch (error) {
        throw new Error('Looks like we cant find the user')
    }
};

export default githubServices;