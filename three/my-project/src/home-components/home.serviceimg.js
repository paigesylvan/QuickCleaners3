// ImageGallery.js
import React from 'react';
import one from '../media/one.png'
import two from '../media/two.png'
import three from '../media/three.png'

const imageData = [
  {
    src: two,
    alt: "Placeholder 1",
    title: "Dry Cleaning",
    description: 'Discover the difference with our professional dry cleaning service, where we treat each garment with precision and care. Our expert team ensure your clothes are impeccably cleaned, preserving their quality and extending their life.',
  },
  {
    src: three,
    alt: "Placeholder 2",
    title: "Laundry",
    description: 'Our laundry service offers a thorough clean for all your garments right here in our local facility. Swing by, drop off, and relax knowing your wardrobe is in good hands',
  },
  {
    src: one,
    alt: "Placeholder 3",
    title: "Specialty Garments / Alterations",
    description: 'Our speciality garment care ensures that even your most delicate items receive the attention they deserve. Leave your bespoke garments to our alterations teams to provide tailor-made adjustments, guaranteeing a perfect fit for any occasion.',
  }
];

const ImageGallery = () => {
  return (
    <div className=" p-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 h-64">
        {imageData.map((image, index) => (
          <div key={index} className="flex flex-col  ">
            <img
                src={image.src}
                alt={image.alt}
                className=' '
            />
            <p className="mt-8 text-3xl font-semibold text-slate-700">{image.title}</p>
            <p className="mt-8 text-2xl text-slate-700">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
