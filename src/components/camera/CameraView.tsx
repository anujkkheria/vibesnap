import { useRef, useEffect, useState } from "react";
import CameraIcon from "../../assets/CameraIcon.svg";
import { useCameraStream } from "../../hooks/useCameraStream";
import { CaptureButton } from "./CaptureButton";

export function CameraView() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { stream, error } = useCameraStream();
  const [isCapturing, setIsCapturing] = useState(false);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const handleCapture = async () => {
    if (!videoRef.current) return;

    setIsCapturing(true);
    try {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(videoRef.current, 0, 0);

      // Convert to blob and create object URL
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob(
          (blob) => {
            if (blob) resolve(blob);
          },
          "image/jpeg",
          0.8
        );
      });

      // Here you would typically handle the captured image
      console.log("Image captured:", URL.createObjectURL(blob));
    } catch (err) {
      console.error("Error capturing image:", err);
    } finally {
      setIsCapturing(false);
    }
  };

  if (error) {
    return (
      <div className="h-full flex items-center justify-center text-white bg-gray-900">
        <div className="text-center">
          <img src={CameraIcon} className="w-12 h-12 mx-auto mb-4" />
          <p>Unable to access camera</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="h-full w-full object-cover"
      />
      <CaptureButton onCapture={handleCapture} isCapturing={isCapturing} />
    </div>
  );
}
