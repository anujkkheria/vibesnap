import HeartIcon from "../../assets/HeartIcon.svg";
import ShareIcon from "../../assets/ShareIcon.svg";
import { ImageGallery } from "./ImageGallery";
import { Post } from "../../types";
import { AnimatedIconButton } from "./AnimatedButton";
import { usePostInteraction } from "../../hooks/usePostInteractions";
import { cn } from "../../utils/cn";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const { likes, isLiked, handleLike, handleShare } = usePostInteraction(
    post.likes
  );
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={post.user.avatar}
            alt={post.user.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{post.user.name}</h3>
            <p className="text-sm text-gray-500">{post.timestamp}</p>
          </div>
        </div>

        <p className="text-gray-800 mb-4">{post.content}</p>

        {post.hashtags.length > 0 && (
          <div className="mb-4">
            {post.hashtags.map((tag) => (
              <span key={tag} className="text-blue-500 mr-2">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {post.images && <ImageGallery images={post.images} />}

        <div className="flex items-center justify-between pt-4 border-t">
          <AnimatedIconButton
            icon={
              <img
                src={HeartIcon}
                className={cn(
                  "w-5 h-5 transition-colors duration-200",
                  isLiked && "fill-current"
                )}
              />
            }
            label={likes}
            isActive={isLiked}
            onClick={handleLike}
          />
          <AnimatedIconButton
            icon={<img src={ShareIcon} className="w-5 h-5" />}
            label="Share"
            activeColor="text-blue-500"
            onClick={handleShare}
          />
        </div>
      </div>
    </div>
  );
}
