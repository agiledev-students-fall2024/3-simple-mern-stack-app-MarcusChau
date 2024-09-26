import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/about`)
      .then(response => {
        setAboutData(response.data);
      })
      .catch(error => {
        console.error("Error fetching About Us data:", error);
      });
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>About Me</h1>
      {aboutData.bio.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <img src={`data:image/jpeg;base64,${aboutData.imageURL}`} alt={aboutData.name} />
    </div>
  );
};

export default AboutUs;
