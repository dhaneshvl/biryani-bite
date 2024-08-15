import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, Menu, MenuItem, Tooltip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GpsFixedIcon from '@mui/icons-material/GpsFixed'; // GPS icon

const locations = [
  { name: 'Medavakkam, Chennai', value: 'medavakkam' },
  { name: 'Adyar, Chennai', value: 'adyar' },
  { name: 'Velachery, Chennai', value: 'velachery' }
  // Add more locations as needed
];

const LocationCard = ({ onLocationChange }) => {
  const [location, setLocation] = useState('Fetching location...');
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation('Medavakkam, Chennai'); // Replace with actual location if needed
          setLoading(false);
        },
        (error) => {
          setLocation('Location access denied');
          setLoading(false);
        }
      );
    } else {
      setLocation('Geolocation not supported');
      setLoading(false);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (selectedLocation) => {
    setLocation(selectedLocation);
    setAnchorEl(null);
    if (onLocationChange) onLocationChange(selectedLocation);
  };

  const handleRefreshLocation = () => {
    fetchLocation();
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          borderRadius: '8px',
          padding: '4px 10px',
          backgroundColor: '#fff',
          boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s, box-shadow 0.3s',
          '&:hover': {
            backgroundColor: '#f5f5f5',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
          },
          marginRight: 2,
          fontSize: '14px',
        }}
        onClick={handleMenuOpen}
      >
        <LocationOnIcon sx={{ mr: 0.5, fontSize: 20, color: '#1976d2' }} />
        <Typography variant="body2" color="textPrimary" sx={{ flexGrow: 1 }}>
          {loading ? <CircularProgress size={16} color="inherit" /> : location}
        </Typography>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <Tooltip title="Refresh location" arrow>
          <MenuItem onClick={handleRefreshLocation}>
            <GpsFixedIcon sx={{ mr: 1, fontSize: 20, color: '#1976d2' }} /> Current Location
          </MenuItem>
        </Tooltip>
        {locations.map((loc) => (
          <MenuItem
            key={loc.value}
            onClick={() => handleMenuClose(loc.name)}
          >
            {loc.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LocationCard;
