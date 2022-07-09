import Header from "../components/Header"
import Header_smallSlider from "../components/Header_smallSlider"
import MainGalleryArea from "../components/MainGalleryArea"
import FeatureArea from "../components/FeatureArea"
import TrendingNewsArea from "../components/TrendingNewsArea"
import PlayPostArea from "../components/PlayPostArea"
import VideoNewsArea from "../components/VideoNewsArea"
import Footer from "../components/Footer"
import BusinessArea from "../components/BusinessArea"
import EntertainmentArea from "../components/EntertainmentArea"
import SportsArea from "../components/SportsArea"
import TrendingSidebar from "../components/TrendingSidebar"
import HeaderTopBar from "../components/HeaderTopBar"
import Weather from "../components/Weather"
// import Testing from "../components/Testing"
// import 'tw-elements';

export default function Home() {
  return (
    <div >
      {/* <h1 className="bg-red-300">Hello world@!</h1> */}
      {/* <Weather/> */}
      <HeaderTopBar/>
      <Header />
      <Header_smallSlider />
      <MainGalleryArea />
      {/* <FeatureArea /> */}
      {/* <TrendingNewsArea /> */}
      {/* <PlayPostArea /> */}
      {/* <VideoNewsArea /> */}
      {/* <EntertainmentArea /> */}
      {/* <SportsArea/> */}
      {/* <BusinessArea/> */}
      {/* <Footer/> */}

    </div>
  )
}
