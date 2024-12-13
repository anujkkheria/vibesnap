import { useRef } from "react";
import { useDrawer } from "../../hooks/useDrawer";
import { GalleryGrid } from "./GalleryGrid";

export function GalleryDrawer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { height, handlers } = useDrawer(500);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg transition-transform duration-300 ease-out"
      style={{ height: `${height}px` }}
      {...handlers}
    >
      {/* Drawer Handle */}
      <div className="w-full h-16 flex items-center justify-between px-4 cursor-pointer">
        <div className="w-full flex flex-col items-center">
          <div className="w-12 h-1 bg-gray-300 rounded-full mb-2" />
          <span className="font-medium text-gray-600">Gallery</span>
        </div>
      </div>

      {/* Gallery Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="overflow-y-auto h-[calc(100%-4rem)] px-4"
      >
        <GalleryGrid />
      </div>
    </div>
  );
}
