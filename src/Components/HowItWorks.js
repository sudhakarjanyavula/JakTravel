import React from 'react';
import { Typography, Button } from '@mui/material';
import { Grid2 } from '@mui/material';
import How1 from '../Assets/How1.png';
import How2 from '../Assets/How2.png';
import How3 from '../Assets/How3.png';
import How4 from '../Assets/How4.png';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <div className="how-it-works-container">
        <Typography variant="h3" component="h1" sx={{ fontFamily: 'Poppins', fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
          How It Works?
        </Typography>
      <Grid2 container spacing={2} justifyContent="center">
        {/* Each Grid2 item represents one part */}
        <Grid2 item xs={12} md={3} lg={4}>
          <img src={How1} alt="How It Works Step 1" className="how-it-works-image" />
          <Typography variant="h6" component="h6" sx={{ fontFamily: 'Poppins', color: 'black', textAlign: 'center',fontWeight: 'bold' }}>
            Handpick Your Selection
          </Typography>
          <Typography sx={{ fontFamily: 'Poppins', color: 'black', textAlign: 'center', fontSize: '14px'  }}>
            From solo travel to workcation, <br></br> honeymoon to family travel, tell us <br></br> about your mood, budget & timeline.
          </Typography>
        </Grid2>
        <Grid2 item xs={12} md={3}>
          <img src={How2} alt="How It Works Step 2" className="how-it-works-image" />
          <Typography variant="h6" component="h6" sx={{ fontFamily: 'Poppins', color: 'black', textAlign: 'center',fontWeight: 'bold' }}>
          Unleash AI's Itinerary Wizardry!
          </Typography>
          <Typography sx={{ fontFamily: 'Poppins', color: 'black', textAlign: 'center', fontSize: '14px'  }}>
            Get a unique itinerary completely <br></br> personalized for you, with all <br></br> bookings in one place.
          </Typography>
        </Grid2>
        <Grid2 item xs={12} md={3}>
          <img src={How3} alt="How It Works Step 3" className="how-it-works-image" />
          <Typography variant="h6" component="h6" sx={{ fontFamily: 'Poppins', color: 'black', textAlign: 'center',fontWeight: 'bold' }}>
            Easy Bookings with 24x7 Concierge
          </Typography>
          <Typography sx={{ fontFamily: 'Poppins', color: 'black', textAlign: 'center', fontSize: '14px'  }}>
            From your stays to activities, book-it-all <br></br> in one click, and enjoy 24x7 <br></br> assistance while you explore.
          </Typography>
        </Grid2>
        <Grid2 item xs={12} md={3}>
          <img src={How4} alt="How It Works Step 4" className="how-it-works-image" />
          <Typography variant="h6" component="h6" sx={{ fontFamily: 'Poppins', color: 'black', textAlign: 'center',fontWeight: 'bold' }}>
          No Commissions - Pay for what you get
          </Typography>
          <Typography sx={{ fontFamily: 'Poppins', color: 'black', textAlign: 'center', fontSize: '14px'  }}>
            No hidden charges during & after <br></br> bookings. Pay For What You Get.
          </Typography>
        </Grid2>
      </Grid2>
      <Button
        className="create-trip-button-HowItWorks"
        sx={{
            // backgroundColor: '#ffeb3b',
            backgroundColor: '#ee4b2b',
            color: 'black',
            borderColor: '#000000',
            border: '1px solid',
            textTransform: 'none', 
            fontWeight: 'bold',
            padding: '10px 80px',
            borderRadius: '10px',
            marginTop: '60px',
            fontSize: '16px',
            '&:hover': {
            backgroundColor: '#000000', 
            color: 'white', 
            }
        }}
        >
        Plan Itinerary for Free
        </Button>
    </div>
  );
}

export default HowItWorks;
