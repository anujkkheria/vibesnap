import { useAuth } from "../context/AuthContext";
import { UserHeader } from "../components/Feed/UserHeader";
import { PostCard } from "../components/Feed/PostCard";
import { CreatePost } from "../components/Feed/CreatePost";
import { mockPosts } from "../data/mockData";

function Feed() {
  const { user } = useAuth();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <UserHeader
          user={{
            name: user?.displayName ?? "",
            avatar: user?.providerData?.[0].photoURL ?? "",
          }}
        />
        <h2 className="text-2xl font-bold mb-6">Feeds</h2>
        <div className="space-y-6">
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <CreatePost />
    </div>
  );
}

export default Feed;
