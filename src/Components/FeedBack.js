import React from 'react';
import { Typography, Grid, Button, Rating } from '@mui/material';
import Haapy1 from "../Assets/FeedBack/Happy1.jpg";
import Haapy2 from "../Assets/FeedBack/Happy2.jpg";
import Haapy3 from "../Assets/FeedBack/Happy3.jpg";
import Haapy4 from "../Assets/FeedBack/Happy4.jpg";

const imageBatch = [
    { src: Haapy1, name: 'The Tarzan way team I can’t thank you enough for helping me plan my trip. You guys are amazing. Janhavi & Devyani and the entire team kept checking on me. The entire team was so responsive & planned everything really well. I will definitely recommend TTW for any trip. Kudos to you guys. Lots of Love❤️❤️', des: 'Nisarga Gauda', days: '5 Days • Kashmir' },
    { src: Haapy2, name: 'Thank you The Tarzan Way...It was an experience to remember and very moderate experience cost..Love the way they handled things. Perfect hotels, rich experience and memories to collect. Thanks TTW.. will definitely look forward to the next trip..', des: 'Prasenjit Sharma', days: '6 Days • Kashmir' },
    { src: Haapy3, name: 'Thank you for the trip plan TTW. We had a lot of fun. Please convey our gratitude for the cab driver. He was very humble, polite and helpful.', des: 'Nisarga Gauda', days: '10 Days • Meghalaya' },
    { src: Haapy4, name: 'Devayani and her team have been amazing from their meticulous attention to detail, to answering all my queries and their unwavering support via chat and call throughout our journey. Our trip was memorable thanks to the team at The Tarzan Way. I cannot recommend them enough!', des: 'Nisarga Gauda', days: '8 Days • North East' },
];

function FeedBack() {
  return (
    <div className="carousel-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
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
          Happy Community of The Tarzan Way
        </Typography>
        <Grid container spacing={4} sx={{ marginTop: '10px' }}>
          {imageBatch.map((item, index) => (
            <Grid item xs={12} sm={6} key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid container spacing={2} sx={{ padding: '10px' }}>
                <Grid item xs={4}>
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '10px',
                      objectFit: 'cover',
                    }}
                    src={item.src}
                    alt="Happy"
                  />
                </Grid>
                <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      color: 'black',
                      textAlign: 'left',
                      fontSize: { xs: '12px', sm: '14px', md: '16px' }
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      color: 'black',
                      fontWeight: 'bold',
                      textAlign: 'left',
                      fontSize: { xs: '12px', sm: '14px', md: '16px' }
                    }}
                  >
                    {item.des}
                  </Typography>
                  <Rating
                    value={5}
                    readOnly
                    sx={{
                      color: '#ee4b2b',
                      marginTop: '10px',
                      fontSize: { xs: '16px', sm: '20px', md: '24px' }
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      color: 'black',
                      fontWeight: 400,
                      textAlign: 'left',
                      marginTop: '10px',
                      fontSize: { xs: '12px', sm: '14px', md: '16px' }
                    }}
                  >
                    {item.days}
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: '#ee4b2b',
                      color: 'black',
                      borderColor: '#000000',
                      border: '1px solid',
                      padding: '5px 10px',
                      textTransform: 'none',
                      marginTop: '10px',
                      width: { xs: '150px', sm: '180px', md: '180px' },
                      '&:hover': {
                        backgroundColor: '#000000',
                        color: 'white',
                      },
                    }}
                  >
                    See Itinerary
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <Button
          sx={{
            backgroundColor: '#FFFFFF',
            color: 'black',
            borderColor: '#000000',
            border: '1px solid',
            padding: '5px 10px',
            textTransform: 'none',
            marginTop: '50px',
            width: { xs: '150px', sm: '180px', md: '180px' },
            '&:hover': {
              backgroundColor: '#000000',
              color: 'white',
            },
          }}
        >
          View All
        </Button>
      </div>
    </div>
  );
}

export default FeedBack;