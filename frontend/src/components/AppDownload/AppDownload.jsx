import { assets } from "../../assets/frontend_assets/assets";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>
        For a better experience, Download <br /> Tomato App
      </p>
      <div className='app-download-platforms'>
        <img src={assets.play_store} alt='' />
        <img src={assets.app_store} alt='' />
      </div>
    </div>
  );
};

export default AppDownload;
