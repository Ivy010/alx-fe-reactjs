import { useState } from "react";
import ReactDOM from 'react-dom/client'
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

  

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const data = await fetchUserData(username, location, minRepos);
            setUserData(data.items);
        } catch (err) {
            setError("Looks like we can't find the user");
        }
        setLoading(false);
    };


return (
    <form onSubmit ={handleSearch} className="p-4 space-y-4">
       <label for= "username">Username</label>
       <input 
       type = "text" 
       value= {username} 
       onChange ={(e) => setUsername(e.target.value)}
       placeholder="Github Username"
       className="border p-2 w-full"
       />

       <input 
       type = "text" 
       value= {location} 
       onChange ={(e) => setLocation(e.target.value)}
       placeholder="Location"
       className="border p-2 w-full"
       />

       <input 
       type = "text" 
       value= {minRepos} 
       onChange ={(e) => setMinRepos(e.target.value)}
       placeholder="Minimum Repositories"
       className="border p-2 w-full"
       />
       <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Search</button>

    
    </form>

);
    {loading && <p>Loading...</p>}
    {error && <p>"Looks like we cant find the user"</p>}
    {userData && userData.length > 0 && (
     <div>
      <ul className="space-y-4">
        {userData.map((user) => (
          <li key={user.id} className="border p-4 rounded">
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="50" />
            <p>Username: {user.login}</p>
            <p>Location: {user.location || 'Not available'}</p>
            <p>Repositories: {user.public_repos || 'Unknown'}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </li>
        ))}
      </ul>
     </div>
    )}
    
    const [page, setPage] = useState(1);

    const loadMoreUsers = async () => {
      setLoading(true);
      try {
        const data = await fetchAdvancedUsers(username, location, minRepos, page + 1);
        setUserData((prev) => [...prev, ...data.items]); // Append new results
        setPage(page + 1);
      } catch (err) {
        setError('Error loading more users');
      }
      setLoading(false);
    };
    
    return (
      <button onClick={loadMoreUsers} className="bg-green-500 text-white py-2 px-4 rounded">
        Load More
      </button>
    );
    
}

export default Search;