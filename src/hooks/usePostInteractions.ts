import { useState } from "react";

export function usePostInteraction(initialLikes: number) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes((prev) => prev + (isLiked ? -1 : 1));
    setIsLiked((prev) => !prev);
  };

  const handleShare = () => {
    // In a real app, this would open a share dialog
    alert("Sharing functionality would be implemented here!");
  };

  return {
    likes,
    isLiked,
    handleLike,
    handleShare,
  };
}
