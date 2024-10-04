import React, { useState, useRef, useEffect } from 'react';
import Logo from '../Assets/logo.png';
import { TextField, MenuItem, Button, IconButton, Hidden, Typography, Avatar, Menu, MenuItem as MuiMenuItem } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './NavBar.css';

const NavBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null); // For profile dropdown
  const searchInputRef = useRef(null);
  const dropdownRef = useRef(null);
  const countries = [
    'Sikkim', 'Kerala', 'Jammu & Kashmir', 'Italy', 'Switzerland', 'Australia', 'America', 'Antarctica',
  ];

  const handleSearchClick = () => {
    setShowDropdown(true);
  };

  const handleCountrySelect = (country) => {
    setSearchValue(country);
    setShowDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current && 
      !dropdownRef.current.contains(event.target) &&
      searchInputRef.current && 
      !searchInputRef.current.contains(event.target)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const dropdownStyle = {
    width: searchInputRef.current ? "500px" : '500px',
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo1" />
      </div>
      <div className="search-container">
        <Hidden smDown>
          <TextField
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onClick={handleSearchClick}
            placeholder="Search destination"
            variant="outlined"
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
            fullWidth
            className="search-input"
            inputRef={searchInputRef}
          />
        </Hidden>
        <Hidden mdUp>
          <IconButton onClick={handleSearchClick} className="search-icon">
            <SearchIcon />
          </IconButton>
        </Hidden>
        {showDropdown && (
          <div className="dropdown" style={dropdownStyle} ref={dropdownRef}>
            {countries.map((country) => (
              <MenuItem
                key={country}
                onClick={() => handleCountrySelect(country)}
                className="dropdown-item"
              >
                <LocationOnIcon className="location-icon" />
                {country}
              </MenuItem>
            ))}
          </div>
        )}
      </div>
     <div className="button-profile-container">
        <Button
            className="create-trip-button"
            sx={{
                backgroundColor: '#ee4b2b',
                // backgroundColor: '#baff39',
                color: 'black',
                borderColor: '#000000',
                border: '1px solid',
                padding: '10px 20px',
                textTransform: 'none', 
                '&:hover': {
                backgroundColor: '#000000', 
                color: 'white', 
                }
            }}
        >
            Create a Trip
        </Button>

        {/* Profile Icon */}
        <IconButton
            edge="end"
            color="inherit"
            onClick={handleProfileMenuOpen}
            className="profile-icon"
        >
            <AccountCircleIcon />
        </IconButton>
    </div>

      <Menu
        anchorEl={profileAnchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'middle',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'middle',
        }}
        open={Boolean(profileAnchorEl)}
        onClose={handleProfileMenuClose}
      >
        <MuiMenuItem onClick={handleProfileMenuClose}>Login</MuiMenuItem>
      </Menu>
    </div>
  );
};

export default NavBar;
