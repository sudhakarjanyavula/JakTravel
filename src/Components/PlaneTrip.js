import React from 'react';
import './PlaneTrip.css';
import { Typography, Grid, Box, Button } from '@mui/material';
import Img1 from "../Assets/PlaneTrip/Img1.jpg";
import Img2 from "../Assets/PlaneTrip/Img2.jpg";
import Img3 from "../Assets/PlaneTrip/Img3.jpg";
import Img4 from "../Assets/PlaneTrip/Img4.jpg";

const imageBatch = [
    { src: Img1, name: 'Offbeat Trip Planner', des: 'Explore', className: 'image-1' },
    { src: Img2, name: 'Road Trip Planner', des: 'Explore', className: 'image-2' },
    { src: Img3, name: 'Workcation Trip Planner', des: 'Explore', className: 'image-3' },
    { src: Img4, name: 'Volunteer Trip Planner', des: 'Explore', className: 'image-4' },
];

function PlaneTrip() {
    return (
        <div className="carousel-container">
            <Typography
                variant="h4"
                component="h4"
                className='carousel-title'
                sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'left',
                    marginTop: '20px',
                }}
            >
                Plan your trip anywhere in the world
            </Typography>
            <Grid container spacing={1} sx={{ marginTop: '20px' }}>
                <Grid item xs={6}>
                    {imageBatch.slice(0, 1).map((image, index) => (
                        <Box key={index} className={`image-box ${image.className}`}>
                            <img
                                src={image.src}
                                alt={image.name}
                            />
                            <Box className="overlay">
                                <Typography variant="h6">{image.name}</Typography>
                                <Typography variant="body2">{image.des}</Typography>
                            </Box>
                        </Box>
                    ))}
                    {/* Only display this box after Img2 */}
                    {imageBatch.slice(1, 2).map((image, index) => (
                        <Box key={index} className={`image-box ${image.className}`} sx={{ position: 'relative' }}>
                            <img
                                src={image.src}
                                alt={image.name}
                            />
                            <Box className="overlay">
                                <Typography variant="h6">{image.name}</Typography>
                                <Typography variant="body2">{image.des}</Typography>
                            </Box>
                            <Box
                                  sx={{
                                      border: '1px solid black',
                                      padding: '10px',
                                      textAlign: 'center',
                                      height: '222px',
                                      position: 'absolute',
                                      top: '5px',
                                      right: { xs: '10px', sm: '-4px' }, 
                                      // width: { xs: '200px', sm: '232px' }, 
                                      width: "32%",
                                      left: "60%",
                                      // left: { xs: 'auto', sm: '390px' }, 
                                      borderRadius: '10px',
                                      marginLeft: { xs: '0px', sm: '12px' }, 
                                      // transform: { xs: 'none', sm: 'translateX(-50%)' }, 
                                  }}
                              >
                                <Typography sx={{ fontWeight: 'bold', marginTop: '32px' }} variant="h3">
                                    65K+
                                </Typography>
                                <Typography sx={{ fontWeight: 500, marginTop: '10px' }} variant="h5">
                                    Trips Planned <br /> so far.
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Grid>
                <Grid item xs={6}>
                    {imageBatch.slice(2, 4).map((image, index) => (
                        <Box key={index} className={`image-box ${image.className}`}>
                            <img
                                src={image.src}
                                alt={image.name}
                            />
                            <Box className="overlay">
                                <Typography variant="h6">{image.name}</Typography>
                                <Typography variant="body2">{image.des}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Grid>
            <div className="center-button-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
              <Button
                className="create-trip-button-HowItWorks1"
                sx={{
                  backgroundColor: '#ee4b2b',
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
                Create your free itinerary
              </Button>
            </div>
        </div>
    );
}

export default PlaneTrip;
