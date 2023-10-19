"use client"

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps{
  name: string
  imageUrls: string[]
}

const ProductImages = ({imageUrls,name}: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0])

  const handleImageClick = (imageUrl: string) =>{
    setCurrentImage(imageUrl)
  }

  return ( 
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image 
          src={currentImage}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-auto max-w-[80%] max-h-[70%]"
          style={{
            objectFit: 'contain',
          }}
          alt={name}/>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8 px-5">
        {imageUrls.map(imageUrl=>(
          <button 
            key={imageUrl}
            className={
              `flex items-center justify-center rounded-lg bg-accent h-[100px]
              ${imageUrl === currentImage && "border-2 border-solid border-primary"}`
            }
            onClick={()=>handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto w-auto max-w-[80%] max-h-[70%]"
              style={{
                objectFit: 'contain',
              }}
              alt={name}
            />
          </button>
        ))}
      </div>
    </div>
   );
}
 
export default ProductImages;