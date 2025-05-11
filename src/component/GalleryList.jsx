import React from "react";

const GalleryList = () => {
  const galleryItems = [
    {
      id: 1,
      imageUrl: "https://wallpapercave.com/wp/wp9765076.jpg",
      description: "7th Inter IIITA Students Sports Meet",
    },
    {
      id: 2,
      imageUrl:
        "https://thedailyguardian.com/wp-content/uploads/2020/09/IPL-2.jpg",
      description: "1st Inter IIITA Employee Sports Meet",
    },
    {
      id: 3,
      imageUrl:
        "https://st1.latestly.com/wp-content/uploads/2023/03/IPL-captains-with-the-trophy-1.jpg",
      description: "6th Inter IIITA Student Meet",
    },
    {
      id: 4,
      imageUrl:
        "https://www.hindustantimes.com/ht-img/img/2023/05/29/1600x900/CRICKET-IND-IPL-T20-GUJARAT-CHENNAI-FINAL-43_1685391671898_1685391738990.jpg",
      description: "Asmita 2023",
    },
    {
      id: 5,
      imageUrl:
        "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/05/dhoni3-1527407172.jpg",
      description: "Asmita 2022",
    },
    {
      id: 6,
      imageUrl: "https://wallpapercave.com/wp/wp6194585.jpg",
      description: "Fit India Campaign",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Image Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-w-4 aspect-h-3 bg-gray-100 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.description}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-700 text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryList;
