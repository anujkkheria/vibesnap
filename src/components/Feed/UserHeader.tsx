interface UserHeaderProps {
  user: {
    name: string;
    avatar: string;
  };
}

export function UserHeader({ user }: UserHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      {/* <img
        src={user.avatar}
        alt={user.name}
        className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-lg"
      /> */}
      <div>
        <h2 className="text-sm text-gray-600 font-light">Welcome Back,</h2>
        <h1 className="text-2xl font-bold">{user.name}</h1>
      </div>
    </div>
  );
}
