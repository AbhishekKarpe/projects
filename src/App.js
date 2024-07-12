import NavBar from './components/NavBar/NavBar';
import logo from './logo.svg';
import Hero from './components/Hero/Hero';
//import './App.css';
import Title from './components/title/Title';
import Programs from './components/programs/Programs';
import About from './components/about/About';
import Campus from './components/campus/Campus';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container">
      <Title subTitle='Our Program' Title='What we offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' Title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' Title='What student says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' Title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
