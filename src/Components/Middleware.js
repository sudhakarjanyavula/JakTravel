import React, { useState } from 'react';
import './Destinations.css';
import { Typography, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Grid, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Middleware({ title, countries, button }) {
  const chunkedImages = [];
  for (let i = 0; i < countries.length; i += 5) {
    chunkedImages.push(countries.slice(i, i + 5));
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const moveLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + chunkedImages.length) % chunkedImages.length);
  };

  const moveRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % chunkedImages.length);
  };

  return (
    <div className="carousel-container">
      <Typography variant="h4" component="h4" className='carousel-title' sx={{ fontFamily: 'Poppins', fontWeight: 'bold', color: 'black', textAlign: 'left' }}>
        {title}
      </Typography>

      {currentIndex > 0 && (
        <IconButton
          className="arrow left-arrow"
          onClick={moveLeft}
          style={{ position: 'absolute', top: '40%', left: '0%', zIndex: 10 }}
        >
          <ArrowBackIosNewIcon
            sx={{
              color: '#FFFFFF',
              backgroundColor: '#000000',
              borderRadius: '100%',
              padding: '10px',
            }}
          />
        </IconButton>
      )}

      <Carousel
        selectedItem={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        {chunkedImages.map((imageGroup, groupIndex) => (
          <div key={groupIndex} className="image-group">
            <Grid container spacing={2}>
              {imageGroup.map((imageObj, index) => (
                <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                  <div className="image-container">
                    <img src={imageObj.src} alt={imageObj.name} className="carousel-image" />
                    <Typography
                      variant="subtitle1"
                      className="image-caption"
                      sx={{ fontFamily: 'Poppins', fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center', lineHeight: 9.75 }}
                    >
                      {imageObj.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      className="image-description"
                      sx={{ fontFamily: 'Poppins', color: '#FFFFFF', textAlign: 'center', lineHeight: 8.75 }}
                    >
                      {imageObj.des}
                    </Typography>
                    
                    <div className="button-wrapper" style={{ position: 'relative' }}>
                      <Button
                        variant="caption"
                        sx={{
                          position: 'absolute',
                          bottom: '300px',
                          left: '-20px',
                          color: '#FFFFFF',
                          fontFamily: 'Poppins',
                          fontWeight: 'bold',
                          // border: '1px solid',
                          borderRadius: '10px',
                          padding: '1px 8px',
                          fontSize: '10px',
                          backgroundColor: '#000000',
                        }}
                      >
                        {imageObj.time}
                      </Button>
                      <Button
                        className="create-trip-button1"
                        sx={{
                          backgroundColor: '#ee4b2b',
                          color: 'black',
                          borderColor: '#000000',
                          border: '1px solid',
                          borderRadius: '10px',
                          padding: '6px 50px',
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: '#000000',
                            color: 'white',
                          },
                        }}
                      >
                        Plan a Trip
                      </Button>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </Carousel>

      {currentIndex < chunkedImages.length - 1 && (
        <IconButton
          className="arrow right-arrow"
          onClick={moveRight}
          style={{ position: 'absolute', top: '40%', right: '0%', zIndex: 10 }}
        >
          <ArrowForwardIosIcon
            sx={{
              color: '#FFFFFF',
              backgroundColor: '#000000',
              borderRadius: '100%',
              padding: '10px',
            }}
          />
        </IconButton>
      )}

      {/* Button container to center the button */}
      <div className="center-button-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <Button
          className="create-trip-button-HowItWorks1"
          sx={{
            backgroundColor: '#FFFFFF',
            textAlign: 'center',
            color: 'black',
            borderColor: '#000000',
            border: '1px solid',
            textTransform: 'none',
            fontWeight: 'bold',
            padding: '10px 80px',
            borderRadius: '10px',
            fontSize: '16px',
            '&:hover': {
              backgroundColor: '#000000',
              color: 'white',
            },
          }}
        >
          {button}
        </Button>
      </div>
    </div>
  );
}

export default Middleware;