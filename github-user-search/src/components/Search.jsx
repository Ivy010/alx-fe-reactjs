import { useState } from "react";
import ReactDOM from 'react-dom/client'
import { fetchUserData } from "../services/githubServices";

const Search = () => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        setLoading(true);
        setError('');
        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            setError("Looks like we can't find the user");
        }
        setLoading(false);
    };


return (
    <form>
       <label for= "username">Username</label>
       <input 
       type = "text" 
       value= {username} 
       onChange ={(e) => setUsername(e.target.value)}
       />
       <button onClick={handleSearch}>Search</button>

       {loading && <p>Loading...</p>}
       {error && <p>{error}</p>}
       {userData && (
        <div>
            <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
            <p>Name: {userData.name || 'Name not available'}</p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                Visit Profile
            </a>
        </div>
       )}
    </form>
    )
}

export default Search;