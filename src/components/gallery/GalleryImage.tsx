import PlayIcon from "../../assets/PlayIcon.svg";
import { cn } from "../../utils/cn";

interface GalleryImageProps {
  url: string;
  type: "image" | "video";
  isSelected: boolean;
  selectionIndex?: number;
  onClick: () => void;
}

export function GalleryImage({
  url,
  type,
  isSelected,
  selectionIndex,
  onClick,
}: GalleryImageProps) {
  return (
    <div
      onClick={onClick}
      className="relative aspect-square cursor-pointer group"
    >
      <img
        src={url}
        alt="Gallery image"
        className={cn(
          "w-full h-full object-cover transition-transform duration-200",
          "group-hover:brightness-75",
          isSelected && "ring-2 ring-blue-500"
        )}
      />

      {type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <img src={PlayIcon} className="w-8 h-8 text-white" />
        </div>
      )}

      {isSelected && (
        <div className="absolute top-2 left-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
          {selectionIndex}
        </div>
      )}
    </div>
  );
}
