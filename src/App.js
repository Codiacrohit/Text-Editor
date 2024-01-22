
import './App.css';
import Navbar from './Navbar.js';
import Form from './Formcomp.js';


// createcard("An element with position: sticky; is positioned based on the user's scroll position.", "10:05", "JodBot", "100k", "1", "WALLPAPER/cube.jpg");
// createcard("An element with position: sticky; is positioned based on the user's scroll position.", "10:05", "JodBot", "100k", "1", "WALLPAPER/cube.jpg");

function App() {
 
  return (
    <>
      <Navbar title="The text Editor" about="About Us"/> 
      <Form title = "Uppercase Converter"/>
    </>
  );
}

export default App;
