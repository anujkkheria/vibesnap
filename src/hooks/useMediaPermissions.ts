import { useState, useCallback } from "react";

export function useMediaPermissions() {
  const [hasPermissions, setHasPermissions] = useState(false);

  const requestPermissions = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      stream.getTracks().forEach((track) => track.stop());
      setHasPermissions(true);
      return true;
    } catch (error) {
      console.error("Error requesting media permissions:", error);
      setHasPermissions(false);
      return false;
    }
  }, []);

  return { hasPermissions, requestPermissions };
}
