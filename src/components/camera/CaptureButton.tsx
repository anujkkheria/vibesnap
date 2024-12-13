interface CaptureButtonProps {
  onCapture: () => void;
  isCapturing?: boolean;
}

export function CaptureButton({ onCapture, isCapturing }: CaptureButtonProps) {
  return (
    <button
      onClick={onCapture}
      disabled={isCapturing}
      className="absolute bottom-6 left-1/2 -translate-x-1/2"
    >
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
          <div
            className={`w-14 h-14 rounded-full bg-white transition-transform duration-200 ${
              isCapturing ? "scale-90" : "scale-100"
            }`}
          />
        </div>
      </div>
    </button>
  );
}
