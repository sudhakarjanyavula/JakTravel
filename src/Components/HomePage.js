import React, { useState } from 'react';
import { Typography, Button, Box, TextField, InputAdornment, Checkbox, FormControlLabel } from '@mui/material';
import { Grid2 } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TargetIcon from '@mui/icons-material/GpsFixed'; 
import HomeImg from "../Assets/HomeImg.png";
import HomeImg1 from "../Assets/HomeImg1.png";
import HomeImg2 from "../Assets/HomeImg2.png";
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import './HomePage.css'; 
import { CalendarToday } from '@mui/icons-material'; 

function HomePage() {
  const [dateRange, setDateRange] = useState([null, null]); // State to store selected date range

  return (
    <div className="homepage-container">
      <Grid2 container spacing={12}>
        {/* Left Side */}
        <Grid2 item xs={12} sm={6} className="homepage-left">
          <Typography variant="h3" component="h1" sx={{ fontFamily: 'Poppins', fontWeight: 'bold', color: 'white', textAlign: { xs: 'center', sm: 'left' } }}>
            Effortless Travel Planning!
          </Typography>
          <Typography variant="h3" component="h1" sx={{ fontFamily: 'Poppins', fontWeight: 'bold', color: 'white', textAlign: { xs: 'center', sm: 'left' } }}>
            Let AI Be Your Expert Guide.
          </Typography>
          <Typography variant="h5" component="h5" sx={{ fontFamily: 'Poppins', color: 'white', marginTop: '20px', textAlign: { xs: 'center', sm: 'left' } }}>
            Bid farewell to generic holiday packages.
          </Typography>
          <Typography variant="h5" component="h5" sx={{ fontFamily: 'Poppins', color: 'white', textAlign: { xs: 'center', sm: 'left' } }}>
            Get Your AI-Personalised Itineraries
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' }, marginTop: '20px' }}>
            <Button
              className="create-trip-button"
              sx={{
                // backgroundColor: '#ffeb3b',
                backgroundColor: '#ee4b2b',
                color: 'black',
                borderColor: '#000000',
                border: '1px solid',
                textTransform: 'none', 
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '10px',
                '&:hover': {
                  backgroundColor: '#000000', 
                  color: 'white', 
                }
              }}
            >
              Plan Itinerary For Free!
            </Button>
          </Box>

          <Grid2 container spacing={3} className="image-grid2" sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}>
            <Grid2 item xs={12} sm={4} className="image-grid2-item">
              <img src={HomeImg} alt="Travel1" className="home-image" />
              <Typography variant="h6" component="h6" sx={{ fontFamily: 'Poppins', color: 'white', textAlign: 'center', marginTop: '20px' }}>
                Free Personalized <br />
                Itineraries
              </Typography>
            </Grid2>
            <Grid2 item xs={12} sm={4} className="image-grid2-item1">
              <img src={HomeImg1} alt="Travel2" className="home-image1" />
              <Typography variant="h6" component="h6" sx={{ fontFamily: 'Poppins', color: 'white', textAlign: 'center', marginTop: '20px' }}>
                Affordable & <br />
                Flexible Bookings
              </Typography>
            </Grid2>
            <Grid2 item xs={12} sm={4} className="image-grid2-item1">
              <img src={HomeImg2} alt="Travel3" className="home-image2" />
              <Typography variant="h6" component="h6" sx={{ fontFamily: 'Poppins', color: 'white', textAlign: 'center', marginTop: '20px', marginLeft: '20px' }}>
                Zero Hidden <br />
                Charges
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>

        {/* Right Side - CTA Box */}
        <Grid2 item xs={12} sm={6} className="cta-box">
          <Box
            className="cta-content"
            sx={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'left',
              }}
            >
              Get your free travel plan now
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: 'Poppins',
                marginTop: '24px',
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'left',
              }}
            >
              What do you want to explore?
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px', 
                marginTop: '24px',
              }}
            >
              <TextField
                fullWidth
                placeholder='Departing From'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TargetIcon sx={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  ),
                  sx: {
                    padding: '8px 12px', 
                    height: '40px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    fontFamily: 'Poppins',
                  },
                }}
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: '8px',
                }}
              />

              <TextField
                fullWidth
                placeholder='Search Destinations'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon sx={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  ),
                  sx: {
                    padding: '8px 12px',
                    height: '40px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    fontFamily: 'Poppins',
                  },
                }}
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: '8px', 
                }}
              />

              <Typography
                variant="body1"
                component="p"
                sx={{
                  fontFamily: 'Poppins',
                  marginTop: '4px',
                  fontWeight: 'bold',
                  color: 'black',
                  textAlign: 'left',
                }}
              >
                When are you planning to travel?
              </Typography>

              {/* Date Range Picker */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker
                  value={dateRange}
                  onChange={(newValue) => setDateRange(newValue)}
                  renderInput={(startProps, endProps) => (
                    <Box sx={{ display: 'flex', gap: '16px', marginTop: '12px', width: '100%' }}>
                      <TextField
                        {...startProps}
                        fullWidth
                        sx={{
                          fontFamily: 'Poppins',
                          fontSize: '12px',
                          '& .MuiInputBase-root': {
                            height: '20px', // Reduces the height
                            padding: '8px 12px', // Adjusts padding inside the input
                            borderRadius: '10px',
                          },
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <CalendarToday sx={{ width: '20px', height: '20px' }} /> {/* Calendar icon */}
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        {...endProps}
                        fullWidth
                        sx={{
                          fontFamily: 'Poppins',
                          fontSize: '12px',
                          '& .MuiInputBase-root': {
                            height: '40px', // Reduces the height
                            padding: '8px 12px',
                            borderRadius: '10px',
                          },
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <CalendarToday sx={{ width: '20px', height: '20px' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  )}
                  calendars={1}
                  sx={{
                    '& .css-1jk99ih-MuiInputBase-input-MuiOutlinedInput-input': {
                      height: '0.4375rem',
                    }
                  }}
                />
              </LocalizationProvider>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                  />
                }
                label={
                  <Typography sx={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '12px' }}>
                    Not sure? Let us decide the best time for your trip.
                  </Typography>
                }
                sx={{ marginTop: '12px' }}
              />
              <Button
                className="create-trip-button"
                sx={{
                  // backgroundColor: '#ffeb3b',
                  backgroundColor: '#ee4b2b',
                  color: 'black',
                  borderColor: '#000000',
                  border: '1px solid',
                  textTransform: 'none', 
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  marginTop: '20px',
                  '&:hover': {
                    backgroundColor: '#000000', 
                    color: 'white', 
                  }
                }}
              >
                Continue
              </Button>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default HomePage;
