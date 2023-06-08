import React, { useEffect, useState } from 'react';

const DogCard = ({ breed }) => {
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const data = await response.json();
        setRandomImage(data.message);
      } catch (error) {
        console.error(`Error fetching random image for ${breed}:`, error);
      }
    };

    fetchRandomImage();
  }, [breed]);

  return (
    <div className="border border-gray-300 p-4">
      <h3 className="text-lg font-medium mb-2">{breed}</h3>
      {randomImage ? (
        <img
          src={randomImage}
          alt={breed}
          className="rounded-lg w-full h-40 object-cover"
        />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

const DogCollection = () => {
  const [dogBreeds, setDogBreeds] = useState([]);

  useEffect(() => {
    const fetchDogBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        const breeds = Object.keys(data.message);
        setDogBreeds(breeds);
      } catch (error) {
        console.error('Error fetching dog breeds:', error);
      }
    };

    if (typeof window !== 'undefined') {
      fetchDogBreeds();
    }
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Dog Collection</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {dogBreeds.map((breed, index) => (
          <DogCard key={index} breed={breed} />
        ))}
      </div>
    </div>
  );
};

export default DogCollection;
