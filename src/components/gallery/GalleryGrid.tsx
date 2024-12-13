import { useGalleryImages } from "../../hooks/useGalleryImages";
import { useGallerySelection } from "../../hooks/useGallerySelection";
import { GalleryImage } from "./GalleryImage";

export function GalleryGrid() {
  const { images } = useGalleryImages();
  const { selectedImages, toggleImageSelection, getSelectionIndex } =
    useGallerySelection();

  return (
    <div className="grid grid-cols-3 gap-1">
      {images.map((image) => (
        <GalleryImage
          key={image.url}
          url={image.url}
          type={image.type}
          isSelected={selectedImages.has(image.url)}
          selectionIndex={
            selectedImages.has(image.url)
              ? getSelectionIndex(image.url)
              : undefined
          }
          onClick={() => toggleImageSelection(image.url)}
        />
      ))}
    </div>
  );
}
