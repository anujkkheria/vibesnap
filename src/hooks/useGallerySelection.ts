import { useState, useCallback } from "react";

export function useGallerySelection() {
  const [selectedImages, setSelectedImages] = useState<Set<string>>(new Set());

  const toggleImageSelection = useCallback((imageUrl: string) => {
    setSelectedImages((prev) => {
      const newSelection = new Set(prev);
      if (newSelection.has(imageUrl)) {
        newSelection.delete(imageUrl);
      } else {
        newSelection.add(imageUrl);
      }
      return newSelection;
    });
  }, []);

  const getSelectionIndex = useCallback(
    (imageUrl: string) => {
      return Array.from(selectedImages).indexOf(imageUrl) + 1;
    },
    [selectedImages]
  );

  return {
    selectedImages,
    toggleImageSelection,
    getSelectionIndex,
  };
}
