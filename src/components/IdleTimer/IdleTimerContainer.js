import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { useIdleTimer } from "react-idle-timer";

function About() {
    let currentPage = window.location.toString()
  if (currentPage === "http://localhost:3000/") {
    console.log("no change needed");
  } else {
    window.location.replace("http://localhost:3000/");
  }
}

export default function App() {
  const redirect = { About };
  const timeout = 2000 * 60;
  const [remaining, setRemaining] = useState(timeout);
  const [elapsed, setElapsed] = useState(0);
  const [lastActive, setLastActive] = useState(+new Date());
  const [isIdle, setIsIdle] = useState(false);

  const handleOnActive = () => setIsIdle(false);
  const handleOnIdle = () => About();

  const {
    reset,
    pause,
    resume,
    getRemainingTime,
    getLastActiveTime,
    getElapsedTime,
  } = useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle,
  });

  const handleReset = () => reset();
  const handlePause = () => pause();
  const handleResume = () => resume();

  useEffect(() => {
    setRemaining(getRemainingTime());
    setLastActive(getLastActiveTime());
    setElapsed(getElapsedTime());

    setInterval(() => {
      setRemaining(getRemainingTime());
      setLastActive(getLastActiveTime());
      setElapsed(getElapsedTime());
    }, 1000);
  }, []);
}
