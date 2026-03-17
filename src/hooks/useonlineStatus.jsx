import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [IsOnline, setIsOnline] = useState(navigator.online);

  useEffect(() => {
     const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    }
  }, []);

  return IsOnline;
};

export default useOnlineStatus
