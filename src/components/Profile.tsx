
interface ProfileProps {
  avatarUrl: string;
  username: string;
  bio: string;
}

const Profile = ({ avatarUrl, username, bio }: ProfileProps) => {
  return (
    <div className="text-center space-y-6 animate-fade-in">
      <div className="relative w-36 h-40 mx-auto group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
        <img
          src={avatarUrl}
          alt="Foto de perfil"
          className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="space-y-3">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
          {username}
        </h1>
        <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-xs mx-auto">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default Profile;
