import React, { useState } from 'react';
import './TripAnyWhere.css';
import { Typography } from '@mui/material';
import { Grid, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Asia from "../Assets/PlaneWorld/Asia.jpg";
import Europe from "../Assets/PlaneWorld/Europe.jpg";
import France from "../Assets/PlaneWorld/France.jpg";
import Germany from "../Assets/PlaneWorld/Germany.jpg";
import Greece from "../Assets/PlaneWorld/Greece.jpg";
import HongKong from "../Assets/PlaneWorld/HongKong.jpg";
import India from "../Assets/PlaneWorld/India.jpg";
import Italy from "../Assets/PlaneWorld/Italy.jpg";
import Maldives from "../Assets/PlaneWorld/Maldives.jpg";
import Spain from "../Assets/PlaneWorld/Spain.jpg";
import Srilanka from "../Assets/PlaneWorld/Srilanka.jpg";
import Switzerland from "../Assets/PlaneWorld/Switzerland.jpg";
import Thailand from "../Assets/PlaneWorld/Thailand.jpg";
import UAE from "../Assets/PlaneWorld/UAE.jpg";

// Combine first and second batches into one for easier navigation
const imageBatch = [
  { src: Europe, name: 'Europe', des: 'From ₹15,849/- per day', time: 'Best time: Apr-Sep' },
  { src: Greece, name: 'Greece', des: 'Fire and Iceland', time: 'Best time: Jun-Sep' },
  { src: France, name: 'France', des: 'From ₹10,298/- per day', time: 'Best time: May-Sep' },
  { src: Italy, name: 'Italy', des: 'From ₹9,655/- per day', time: 'Best time: Apr-Oct' },
  { src: Switzerland, name: 'Switzerland', des: 'From ₹9,655/- per day', time: 'Best time: Apr-Oct' },
  { src: Germany, name: 'Germany', des: 'From ₹12,477/- per day', time: 'Best time: Apr-Oct' },
  { src: Spain, name: 'Spain', des: 'From ₹14,248/- per day', time: 'Best time: May-Sep' },
  { src: Asia, name: 'Asia', des: 'From ₹9,326/- per day', time: 'Best time: May-Sep' },
  { src: UAE, name: 'UAE', des: 'From ₹14,248/- per day', time: 'Best time: May-Sep' },
  { src: HongKong, name: 'HongKong', des: 'From ₹11,789/- per day', time: 'Best time: Apr-Sep' },
  { src: Maldives, name: 'Maldives', des: 'From ₹31,508/- per day', time: 'Best time: May-Sep' },
  { src: Srilanka, name: 'Srilanka', des: 'From ₹16,404/- per day', time: 'Best time: Jun-Sep' },
  { src: India, name: 'India', des: 'From ₹16,404/- per day', time: 'Best time: Jun-Sep' },
  { src: Thailand, name: 'Thailand', des: 'From ₹16,404/- per day', time: 'Best time: Jun-Sep' },
];

function TripAnyWhere() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next batch of images
  const moveRight = () => {
    if (currentIndex + 7 < imageBatch.length) {
      setCurrentIndex(currentIndex + 7);
    }
  };

  // Function to move to the previous batch of images
  const moveLeft = () => {
    if (currentIndex - 7 >= 0) {
      setCurrentIndex(currentIndex - 7);
    }
  };

  // Determine if the arrows should be hidden
  const hideLeftArrow = currentIndex === 0;
  const hideRightArrow = currentIndex + 7 >= imageBatch.length;

  return (
    <div className="carousel-container">
      <Typography variant="h4" component="h4" className='carousel-title' sx={{ fontFamily: 'Poppins', fontWeight: 'bold', color: 'black', textAlign: 'left', marginTop: '0px' }}>
      Plan your trip anywhere in the world
      </Typography>

      <div className="carousel-split">
        {/* Left Part - One Large Image */}
        <div className="left-part">
            <img src={imageBatch[currentIndex].src} alt={imageBatch[currentIndex].name} className="large-carousel-image" />
            <div className="centered-text">
                <Typography variant="subtitle1" sx={{ fontFamily: 'Poppins', fontSize: '44px', fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center', marginTop: '10px' }}>
                {imageBatch[currentIndex].name}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontFamily: 'Poppins', fontSize: '24px', color: '#FFFFFF', textAlign: 'center', marginBottom: '10px' }}>
                {imageBatch[currentIndex].des}
                </Typography>
            </div>
        </div>

        {/* Right Part - Grid of Six Images */}
        <div className="right-part">
          <Grid container spacing={1}>
            {imageBatch.slice(currentIndex + 1, currentIndex + 7).map((imageObj, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <div className="small-image-container">
                  <img src={imageObj.src} alt={imageObj.name} className="small-carousel-image" />
                  <Typography variant="subtitle1" sx={{ fontFamily: 'Poppins', fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center' }}>
                    {imageObj.name}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontFamily: 'Poppins', color: '#FFFFFF', textAlign: 'center' }}>
                    {imageObj.des}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>

      {/* Arrows */}
      {!hideLeftArrow && (
        <IconButton className="arrow left-arrow" onClick={moveLeft} style={{ position: 'absolute', top: '52%', left: '0%', zIndex: 10 }}>
          <ArrowBackIosNewIcon sx={{ color: '#FFFFFF', backgroundColor: '#000000', borderRadius: '100%', padding: '10px' }} />
        </IconButton>
      )}
      {!hideRightArrow && (
        <IconButton className="arrow right-arrow" onClick={moveRight} style={{ position: 'absolute', top: '52%', right: '0%', zIndex: 10 }}>
          <ArrowForwardIosIcon sx={{ color: '#FFFFFF', backgroundColor: '#000000', borderRadius: '100%', padding: '10px' }} />
        </IconButton>
      )}
    </div>
  );
}

export default TripAnyWhere;
