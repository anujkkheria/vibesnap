import { useState, useEffect } from "react";

export function useCameraStream() {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function setupCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
          audio: false,
        });
        setStream(mediaStream);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to access camera")
        );
      }
    }

    setupCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return { stream, error };
}
