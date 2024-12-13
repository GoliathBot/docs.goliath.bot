import React, { useEffect, useState } from "react";

const UserTimeZone = () => {
  const [timeZone, setTimeZone] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimeZone = async () => {
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        const timeResponse = await fetch(
          `https://timeapi.io/api/time/current/ip?ipAddress=${ipData.ip}`
        );
        const timeData = await timeResponse.json();
        setTimeZone(timeData.timeZone);
      } catch (err) {
        setError("Unable to fetch timezone information.");
      }
    };

    fetchTimeZone();
  }, []);

  if (error) {
    return null;
  }

  return (
    timeZone && (
      <p>Since we were able to detect your timezone, you can use the command <code>/timezone set {timeZone}</code> to set your timezone. </p>
    )
  );
};

export default UserTimeZone;
