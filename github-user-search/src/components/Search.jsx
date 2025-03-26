import { useState } from "react";
import ReactDOM from 'react-dom/client'
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

  

    const handleSearch = async (e) => {
        e.preventDefault();
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
    <form onSubmit ={handleSearch}>
       <label for= "username">Username</label>
       <input 
       type = "text" 
       value= {username} 
       onChange ={(e) => setUsername(e.target.value)}
       />
       <button type="submit">Search</button>

    
    </form>

);
    {loading && <p>Loading...</p>}
    {error && <p>"Looks like we cant find the user"</p>}
    {userData && (
     <div>
         <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
             <p>Name: {userData.name || "Looks like we can't find the user"}</p>
         <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
             Visit Profile
         </a>
     </div>
    )}

}

export default Search;