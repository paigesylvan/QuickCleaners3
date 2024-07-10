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
        { image: onee, header: 'Dry Cleaning' },
        { image: twoo, header: 'Laundered Shirts '},
        { image: threee, header: 'Pressing' },
        { image: fourr, header: 'Wash and Fold' },
        { image: fivee, header: 'Pillows and Bedding ' },
        { image: sixx, header: 'Curtains '},
        { image: sevenn, header: 'Speciality Garments ' },
        { image: eightt, header: 'Suede and Leather' },
        { image: ninee, header: 'Alterations and Repairs ' },
        { image: tenn, header: 'Wedding Gowns'},
        { image: elevenn, header: 'Rugs' },
        { image: twelve, header: 'Express Bag ' },
      ];

    return (
    <div className="container m-24 mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.header} className="w-full h-4/5 object-cover" />
            <div className="p-4">
              <h2 className="text-3xl font-bold  text-center">{item.header}</h2>
          
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}