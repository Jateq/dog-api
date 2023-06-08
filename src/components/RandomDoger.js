import React, { useEffect, useState } from 'react';

const RandomDog = () => {
  const [randomDog, setRandomDog] = useState(null);

  const fetchRandomDog = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setRandomDog(data.message);
    } catch (error) {
      console.error('Error fetching random dog:', error);
    }
  };

  useEffect(() => {
    fetchRandomDog();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center">
        <button
          className="mt-4 mb-4 bg-white hover:bg-gray-800 hover:text-white text-gray-800 duration-300 font-bold py-2 px-4 rounded-md"
          onClick={fetchRandomDog}
        >
          Get Another Random Dog
        </button>
      </div>
      {randomDog ? (
        <div className="max-w-lg mx-auto">
          <img
            src={randomDog}
            alt="Random Dog"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      ) : (
        <p className='flex justify-center mt-72'>Loading dog...</p>
      )}
      
    </div>
  );
};

export default RandomDog;
