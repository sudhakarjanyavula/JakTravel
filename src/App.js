import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/poppins';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

function App() {
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
        <Router>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
