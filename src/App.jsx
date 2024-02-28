//import { Accordion } from "./Components/Accordion";
//import { ImageSliderJSON } from "./Components/Image-Slider-JSON";
import { ImageSliderApi } from "./Components/Image-Slider-API/Index";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <ImageSliderJSON /> */}
      <ImageSliderApi
        url="https://picsum.photos/v2/list"
        page={"1"}
        limit={"7"}
      />
    </div>
  );
}

export default App;
