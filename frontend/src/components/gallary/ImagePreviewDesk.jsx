

const iamges = [
    {
        src: 'https://a0.muscache.com/im/pictures/86aa5a51-2981-4a0e-8ac5-86a43a86fb91.jpg?im_w=960',
        alt: 'hello'
    },
       {
        src: 'https://a0.muscache.com/im/pictures/86aa5a51-2981-4a0e-8ac5-86a43a86fb91.jpg?im_w=960',
        alt: 'hello'
    },
       {
        src: 'https://a0.muscache.com/im/pictures/86aa5a51-2981-4a0e-8ac5-86a43a86fb91.jpg?im_w=960',
        alt: 'hello'
    },
       {
        src: 'https://a0.muscache.com/im/pictures/86aa5a51-2981-4a0e-8ac5-86a43a86fb91.jpg?im_w=960',
        alt: 'hello'
    },
       {
        src: 'https://a0.muscache.com/im/pictures/86aa5a51-2981-4a0e-8ac5-86a43a86fb91.jpg?im_w=960',
        alt: 'hello'
    }
]


// SHOW images ONLY ON DESKTOP
const ImagePreviewDesk = ({setShowGallery}) => {  
  return (
    <div className="grid grid-cols-12 rounded-2xl h-96 xl:h-[400px] w-[90%] max-w-6xl
     mx-auto bg-gray-200 mt-3 shadow-[0_0_20px_0_rgba(0,0,0,0.5)] text-white text-4xl grid-rows-12 gap-3 p-2">
      <div className="bg-red-400 rounded-2xl col-span-7 row-span-12" onClick={() => setShowGallery(true)}>
      <img
          src={iamges[0].src}
          alt={iamges[0].src}
          className="w-full cursor-pointer h-full object-cover rounded-xl"
        />
      </div>
      <div className="col-span-5 row-span-12 grid grid-cols-2 gap-2">
        {
          iamges.slice(1).map((val, index) => {
            return (
              <div key={index} onClick={() => setShowGallery(true)} className="bg-red-600 rounded-2xl overflow-hidden">
                  <img
                    src={val.src}
                    alt={val.alt}
                    className="w-full h-full object-cover rounded-xl cursor-pointer"
            />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ImagePreviewDesk
