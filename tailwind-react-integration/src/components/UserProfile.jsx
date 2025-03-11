function UserProfile() {
    return (
      <div className="bg-gray-100 sm:p-4 md:p-8 max-w-xs max-w-sm  mx-auto my-20 rounded-lg shadow-lg">
        <img className="rounded-full  mx-auto sm:w-24 h-24 md:w-36 h-36" src="https://via.placeholder.com/150" alt="User" />
        <h1 className="text-xl text-blue-800 my-4 sm:text-lg md:text-xl">John Doe</h1>
        <p className="text-gray-600 sm:text-sm md:text-base sm:text-lg md:text-xl">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;