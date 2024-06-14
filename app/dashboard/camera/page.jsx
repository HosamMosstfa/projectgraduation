"use client";
import styles from "@/app/ui/dashboard/camera/camera.module.css";

import React, { useState, useEffect } from "react";
const CameraPage = () => {
  const [loading, setLoading] = useState(true);
  const [feedUrl, setFeedUrl] = useState("");

  useEffect(() => {
    fetch("/video_feed")
      .then((response) => response.text())
      .then(() => {
        setFeedUrl('http://127.0.0.1:5000/video_feed');
        setLoading(false);
      });

    // Clean up and stop the feed when the component unmounts
    return () => {
      fetch("/video_feed").then((response) => response.text());
    };
  }, []);

  if (loading) {
    return <p className={styles.container}>Loading...</p>;
  }

  return (
    <div className={styles.container}>
     <img src={feedUrl} alt="Video Feed" style={{ width: '1340px', height: '790px' }} />
    </div>
  );
};

export default CameraPage
