import React from 'react';
import onee from '../media/services/onee.png'
import twoo from '../media/services/twoo.png'
import threee from '../media/services/threee.png'
import fourr from '../media/services/fourr.png'
import fivee from '../media/services/fivee.png'
import sixx from '../media/services/sixx.png'
import sevenn from '../media/services/sevenn.png'
import eightt from '../media/services/eightt.png'
import ninee from '../media/services/ninee.png'
import tenn from '../media/services/tenn.png'
import elevenn from '../media/services/elevenn.png'
import twelve from '../media/services/twelve.png'


export default function Grid() {

    const items = [
        { image: onee, header: 'Dry Cleaning', description: 'Description 1' },
        { image: twoo, header: 'Laundered Shirts ', description: 'Description 2' },
        { image: threee, header: 'Pressing', description: 'Description 3' },
        { image: fourr, header: 'Wash and Fold', description: 'Description 4' },
        { image: fivee, header: 'Pillows and Bedding ', description: 'Description 5' },
        { image: sixx, header: 'Curtains ', description: 'Description 6' },
        { image: sevenn, header: 'Speciality Garments ', description: 'Description 7' },
        { image: eightt, header: 'Suede and Leather', description: 'Description 8' },
        { image: ninee, header: 'Alterations and Repairs ', description: 'Description 9' },
        { image: tenn, header: 'Wedding Gowns', description: 'Description 10' },
        { image: elevenn, header: 'Rugs', description: 'Description 11' },
        { image: twelve, header: 'Express Bag ', description: 'Description 12' },
      ];

    return (
    <div className="container m-24 mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.header} className="w-full h-4/5 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.header}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}