import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import Clock from "../Assets/PlaneWithUs/Clock-Photoroom.jpg";
import Earth from "../Assets/PlaneWithUs/Earth.jpeg";
import Money from "../Assets/PlaneWithUs/Money.jpeg";
import palm from "../Assets/PlaneWithUs/palm-tree.jpg";
import Peocock from "../Assets/PlaneWithUs/Pecock-Photoroom.jpg";
import Phone from "../Assets/PlaneWithUs/Phone.jpeg";

function PlaneWith() {
  const imageBatch = [
    { src: Clock, name: '24x7 Live Assistance as you explore', des: '24x7 support that keeps you swinging all day and night, no monkey business!' },
    { src: Earth, name: 'Best Real-Time Negotiated Bookings', des: 'Dedicated travel experts negotiate the best prices within your budget' },
    { src: Money, name: 'Transparent Pricing - No Commissions', des: 'Transparent pricing with no hidden fees - pay only a small service fee!' },
    { src: palm, name: 'Personalization in seconds', des: 'Personalized and flexible itineraries crafted by our AI-powered planner' },
    { src: Peocock, name: 'Offbeat Experiences, curated for you', des: 'Discover offbeat adventures, activities & experiences.' },
    { src: Phone, name: 'Book-it-all in one click', des: 'Book all your personalized and flexible travel needs in just one click' },
  ];

  const leftItems = imageBatch.slice(0, 3);
  const rightItems = imageBatch.slice(3, 6);

  return (
    <div className="carousel-container">
      <Typography
        component="h4"
        sx={{
          fontFamily: 'Poppins',
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'left',
          marginBottom: '20px',
          fontSize: { xs: '20px', sm: '24px', md: '30px' }
        }}
      >
        Plan your trip anywhere in the world
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        {/* Left side - 3 items */}
        <Grid item xs={12} md={6}>
          {leftItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                marginBottom: '20px',
                alignItems: 'center'
              }}
              className={`image-box-image-${index}`}
            >
              <img
                style={{
                  width: "12%",
                  height: "12%",
                  objectFit: 'cover', // Ensures the image fits within the box
                }}
                src={item.src}
                alt={item.name}
                className="icon"
              />
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                <Typography
                  component="h5"
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 'bold',
                    color: 'black',
                    marginTop: '10px',
                    textAlign: 'left',
                    fontSize: { xs: '12px', sm: '16px', md: '18px' }
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  component="h6"
                  sx={{
                    fontFamily: 'Poppins',
                    color: 'black',
                    marginTop: '5px',
                    textAlign: 'left',
                    fontSize: { xs: '10px', sm: '12px', md: '14px' }
                  }}
                >
                  {item.des}
                </Typography>
              </div>
            </Box>
          ))}
        </Grid>

        {/* Right side - 3 items */}
        <Grid item xs={12} md={6}>
          {rightItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                marginBottom: '20px',
                alignItems: 'center'
              }}
              className={`image-box-image-${index}`}
            >
              <img
                style={{
                    width: "12%",
                    height: "12%",
                    objectFit: 'cover', 
                }}
                src={item.src}
                alt={item.name}
                className="icon"
              />
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                <Typography
                  component="h5"
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 'bold',
                    color: 'black',
                    marginTop: '10px',
                    textAlign: 'left',
                    fontSize: { xs: '12px', sm: '16px', md: '18px' }
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  component="h6"
                  sx={{
                    fontFamily: 'Poppins',
                    color: 'black',
                    marginTop: '5px',
                    textAlign: 'left',
                    fontSize: { xs: '10px', sm: '12px', md: '14px' }
                  }}
                >
                  {item.des}
                </Typography>
              </div>
            </Box>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default PlaneWith;
