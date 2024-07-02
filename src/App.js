// import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout";
import { ThemeProvider } from "@mui/material/styles";
import{theme} from "./Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Layout></Layout>
    </div>
    </ThemeProvider>
  );
}

export default App;
// this is final branch