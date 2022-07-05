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
// import Testing from "../components/Testing"
// import 'tw-elements';

export default function Home() {
  return (
    <div className=" mx-2 xl:mx-auto xl:w-[80%]">

      {/* <h1 className="bg-red-300">Hello world@!</h1> */}
      <HeaderTopBar/>
      <Header />
      <Header_smallSlider />
      <MainGalleryArea />
      <FeatureArea />
      <TrendingNewsArea />
      <PlayPostArea />
      <VideoNewsArea />
      <EntertainmentArea />
      <SportsArea/>
      <BusinessArea/>
      <Footer/>

    </div>
  )
}
