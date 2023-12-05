export default function ImageGrid() {
    const images = [
      { src: '/homepage-images/merchduck_hoodie.webp', text: 'Bone colored hoodie with merchduck logo' },
      { src: '/homepage-images/TO_Concrete_Cutting_HeatherT_Black_Print.webp', text: 'Heather Gray Long Sleeve shirt with T.O. Concrete Cutting on back' },
      { src: '/homepage-images/HouseLA_DAO_Shirt.webp', text: 'Black shirt with HouseLA DAO on chest' },
      { src: '/homepage-images/corey-watson-0UYE4iHvDaA-unsplash.jpg', text: 'stock image from unsplash' },
      { src: '/homepage-images/kukuvaja-feinkost-o7E4siDrKH8-unsplash.jpg', text: 'stock image from unsplash' },
      { src: '/homepage-images/laura-kennedy-ZiRqQ1O7Zv4-unsplash.jpg', text: 'stock image from unsplash' },
      { src: '/homepage-images/marty-o-neill-hsD3q4I_VIQ-unsplash.jpg', text: 'stock image from unsplash' },
      { src: '/homepage-images/taylor-0RmYRuqDXpE-unsplash.jpg', text: 'stock image from unsplash' },
      { src: '/homepage-images/taylor-bdYJWXg4pK4-unsplash.jpg', text: 'stock image from unsplash' },
      { src: '/homepage-images/angello-pro-0F-26T1dcac-unsplash.jpg', text: 'stock image from unsplash' },
      { src: '/homepage-images/drop-the-label-movement-pDpFXouUa_4-unsplash.jpg', text: 'stock image from unsplash' },
      { src: '/homepage-images/ian-dooley-TT-ROxWj9nA-unsplash.jpg', text: 'stock image from unsplash' },

    ];
  
    return (
        <div className="mx-4 mb-4">
            <div className="grid grid-cols-3 gap-4 w-full">
                {images.map((image, index) => (
                <div key={image.src} className="relative group aspect-square">
                    <img
                    src={image.src}
                    alt={image.text}
                    className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-sm"
                    loading="eager"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-white text-center text-sm md:text-md lg:text-3xl xl:text-5xl font-medium p-4" style={{ fontFamily: '"Futura", sans-serif' }}>{image.text}</span>
                    </div>
                </div>
                ))}
            </div>
        </div>


    );
  }
  