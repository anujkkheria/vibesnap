import { type FC } from "react";

interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  if (!images?.length) return null;

  return (
    <div className="relative mb-4 -mx-4">
      <div className="flex overflow-x-auto snap-x px-4 no-scrollbar">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-none w-[85%] first:pl-0 last:pr-4 pr-4"
          >
            <img
              src={image}
              alt={`Post image ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg snap-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
