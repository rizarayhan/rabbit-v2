const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* Profile */}
          <div className="w-full md:w-1/3 lg:w-1/4 rounded-lg shadow-md p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Name</h1>
            <p className="text-lg text-gray-600 mb-4">email@example.com</p>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded p-2">
              Logout
            </button>
          </div>
          {/* My Orders */}
          <div className="w-full md:w-2/3 lg:w-3/4">{/* Order Page */}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
