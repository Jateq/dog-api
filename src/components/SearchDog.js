import React, { useState } from 'react';

const SearchDog = () => {
  const [searchBreed, setSearchBreed] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearchChange = (event) => {
    setSearchBreed(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${searchBreed}/images`);
      const data = await response.json();
      setSearchResult(data.message);
    } catch (error) {
      console.error(`Error searching for ${searchBreed} dog images:`, error);
      setSearchResult(null);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="flex justify-center text-2xl font-bold mb-4">Search Dog</h2>
      <form onSubmit={handleSearchSubmit} className="flex justify-center">
        <input 
          type="text"
          value={searchBreed}
          onChange={handleSearchChange}
          placeholder="try: african"
          className="border text-black border-gray-300 px-4 py-2 mr-2 rounded"
        />
        <button
          type="submit"
          className="bg-white hover:bg-gray-800 hover:text-white duration-300 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>
      {searchResult ? (
        <div className="max-w-lg mx-auto mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {searchResult.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt="Dog"
                className="rounded-lg w-full h-40 object-cover"
              />
            ))}
          </div>
        </div>
      ) : (
        <p className='flex justify-center mt-72'>No search results yet.</p>
      )}
    </div>
  );
};

export default SearchDog;
