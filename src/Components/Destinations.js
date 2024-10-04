import React, { useState } from 'react';
import './Destinations.css';
import { Typography, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Grid, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Goa from '../Assets/Goa.png';
import Andaman from '../Assets/Andaman.png';
import Arunacha from '../Assets/Arunacha.png';
import Assam from '../Assets/Assam.png';
import Hp from '../Assets/Hp.jpg';
import JK from '../Assets/J&K.png';
import Kerala from '../Assets/kerala.png';
import Ladak from '../Assets/ladak.png';
import Megalaya from '../Assets/Megalaya.png';
import Rajastan from '../Assets/Rajastan.png';
import Sikkim from '../Assets/Sikkim.png';
import Uttarakhand from '../Assets/Uttarakhand.png';

function Destinations() {
    const images = [
        { src: Goa, name: 'Goa', des: "Peael of the Orient" },
        { src: Andaman, name: 'Andaman', des: 'Tropical Paradese' },
        { src: Arunacha, name: 'Arunachal Pradesh', des: 'From ₹1,400/- per day' },
        { src: Assam, name: 'Assam', des: 'From ₹3,554/- per day'  },
        { src: Hp, name: 'Himachal Pradesh', des: 'From ₹4,337/- per day' },
        { src: JK, name: 'Jammu & Kashmir', des: 'From ₹11,295/- per day' },
        { src: Kerala, name: 'Kerala', des: 'From ₹6,551/- per day' },
        { src: Ladak, name: 'Ladakh', des: 'From ₹6,133/- per day' },
        { src: Megalaya, name: 'Meghalaya', des: 'From ₹6,555/- per day' },
        { src: Rajastan, name: 'Rajasthan', des: 'From ₹6,916/- per day' },
        { src: Sikkim, name: 'Sikkim', des: 'From ₹4,810/- per day' },
        { src: Uttarakhand, name: 'Uttarakhand', des: 'From ₹7,008/- per day' },
      ];    

  const chunkedImages = [];
  for (let i = 0; i < images.length; i += 6) {
    chunkedImages.push(images.slice(i, i + 6));
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
        <Typography variant="h4" component="h4" className='carousel-title' sx={{ fontFamily: 'Poppins', fontWeight: 'bold', color: 'black', textAlign: 'left'  }}>Plan as per the best destinations in India
        </Typography>
      {currentIndex > 0 && (
        <IconButton
          className="arrow left-arrow"
          onClick={moveLeft}
          style={{ position: 'absolute', top: '50%', left: '-1%', zIndex: 10 }}
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
                <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                    <div className="image-container">
                    <img src={imageObj.src} alt={imageObj.name} className="carousel-image" />
                    <Typography
                        variant="subtitle1"
                        className="image-caption"
                        sx={{ fontFamily: 'Poppins', fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center', lineHeight: 9.75,
         
                         }}
                    >
                        {imageObj.name}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        className="image-description"
                        sx={{ fontFamily: 'Poppins', color: '#FFFFFF', textAlign: 'center', lineHeight: 8.75,
                         }}
                    >
                        {imageObj.des}
                    </Typography>
                    <Button
                        className="create-trip-button1"
                        sx={{
                            backgroundColor: '#baff39',
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
                        Plane a Trip
                    </Button>
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
          style={{ position: 'absolute', top: '50%', right: '-1%', zIndex: 10 }}
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
    </div>
  );
}

export default Destinations;
