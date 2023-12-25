import React, { useState, useEffect } from 'react';
import './LazyLoadingComponent.css'; // Import your CSS file for styling


const LazyLoadingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Function to generate a set of five product images
    const generateProductImages = () => {
      const productImages = [
        {
          id: 1,
          imageUrl:
            'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D',
        },
        {
          id: 2,
          imageUrl:
            'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          id: 3,
          imageUrl:
            'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          id: 4,
          imageUrl:
            'https://images.unsplash.com/photo-1570101945621-945409a6370f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1570101945621-945409a6370f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          id: 5,
          imageUrl:
            'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ];

      return Array.from({ length: 10 }, (_, index) => productImages[index % 5]);
    };

    // Function to load more data
    const loadMoreData = () => {
      setLoading(true);

      // Simulate an API call or any asynchronous operation
      setTimeout(() => {
        const newProductImages = generateProductImages();
        setData((prevData) => [...prevData, ...newProductImages]);
        setLoading(false);
      }, 1000); // Simulated delay of 1 second
    };

    // Load initial data
    loadMoreData();

    // Event listener for scrolling
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;

      // Load more data when the user scrolls to the bottom (adjust the threshold as needed)
      if (scrolledPercentage > 90 && !loading) {
        loadMoreData();
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]); // Dependency array to prevent unnecessary re-renders

  return (
    <div className="image-container">
      {data.map((item) => (
        <div key={item.id} className="image-item">
          <img src={item.imageUrl} alt={`Product ${item.id}`} />
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default LazyLoadingComponent;
