import React, { useState, useEffect } from 'react';

export default function SocialActivities() {
  const activities = [
    { title: "Tree Plantation", imageUrl: "src/Img/Social1.webp" },
    { title: "Tree Plantation", imageUrl: "src/Img/Social2.webp" },
    { title: "Tree Plantation", imageUrl: "src/Img/Social3.webp" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [activities.length]);

  return (
    <section className="py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Social Activities</h2>
        <div className="relative w-72 max-w-4xl mx-auto h-96 overflow-hidden rounded-lg shadow-lg">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={activity.imageUrl}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 bg-gray-900 bg-opacity-60 w-full py-2 text-white">
                <h3 className="text-lg font-semibold">{activity.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
