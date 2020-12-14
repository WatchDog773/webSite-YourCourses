import Navbar from "../common/Navbar";
import Carousel from '../common/Carousel';
import Footer from "../common/Footer";
import CardView from '../common/CardView';
import Section from '../common/Section'

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel/>
      <Section/>
      <CardView/>
      <Footer/>
    </div>
  );
}

export default Home;
