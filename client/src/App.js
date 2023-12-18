import {
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DineLocation from "./screens/DineLocation";
import Order from "./screens/Order";
import Review from "./screens/Review";
import SelectPayment from "./screens/SelectPayment";
import PaymentScreen from "./screens/PaymentScreen";
import CompleteScreen from "./screens/CompleteScreen";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#3f51b5",
    },
    
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper>
            <Routes>
              <Route path="/" Component={HomeScreen} />
              <Route path="/DineLocation" Component={DineLocation} />
              <Route path="/Order" Component={Order} />
              <Route path="/review" Component={Review} />
              <Route path="/select-payment" Component={SelectPayment} />
              <Route path="/payment" Component={PaymentScreen} />
              <Route path="/complete" Component={CompleteScreen} />
            </Routes>
          </Paper>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
