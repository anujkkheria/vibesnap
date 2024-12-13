import ArrowLeftIcon from "../assets/ArrowLeftIcon.svg";
import { useNavigate } from "react-router-dom";
import { CameraView } from "../components/camera/CameraView";
import { GalleryDrawer } from "../components/gallery/GalleryDrawer";
import { useMediaPermissions } from "../hooks/useMediaPermissions";

export default function AddPost() {
  const navigate = useNavigate();
  const { hasPermissions, requestPermissions } = useMediaPermissions();

  return (
    <div className="fixed min-h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 text-white">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
        >
          <img src={ArrowLeftIcon} className="w-6 h-6" />
        </button>
        <button
          className="px-4 py-2 font-semibold hover:bg-gray-800 rounded-lg transition-colors"
          onClick={() => navigate("/create")}
        >
          Next
        </button>
      </div>

      {/* Camera View */}
      <div className="flex-grow flex flex-col">
        {hasPermissions ? (
          <CameraView />
        ) : (
          <div className="w-screen h-screen flex items-center justify-center text-white">
            <button
              onClick={requestPermissions}
              className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Enable Camera Access
            </button>
          </div>
        )}
      </div>

      {/* Gallery Drawer */}
      <GalleryDrawer />
    </div>
  );
}
