import HeartIcon from "../../assets/HeartIcon.svg";
import ShareIcon from "../../assets/ShareIcon.svg";
import { ImageGallery } from "./ImageGallery";
import { Post } from "../../types";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
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

        <div className="flex items-center justify-between pt-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors">
            <img src={HeartIcon} className="w-5 h-5" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
            <img src={ShareIcon} className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
