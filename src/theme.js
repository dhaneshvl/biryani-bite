import { createTheme } from '@mui/material/styles';

// Define your custom colors
const customPrimaryColor = {
  main: '#FF5733',  // Main color (e.g., a mix of orange and red)
  light: '#FFC300', // Light variant (yellow)
  dark: '#C70039',  // Dark variant (darker red)
  contrastText: '#FFFFFF', // Contrast text color
};

const theme = createTheme({
  palette: {
    primary: customPrimaryColor,
    secondary: {
      main: '#4CAF50', // You can define a secondary color if needed
    },
  },
  // Additional theme customization can go here
});

export default theme;
