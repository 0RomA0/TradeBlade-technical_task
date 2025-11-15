// import style "./App.module.css";

import AboutCompany from '../AboutCompany/AboutCompany';
import Deals from '../Deals/Deals';
import DoitNow from '../DoitNow/DoitNow';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Numbers from '../Numbers/Numbers';
import Pricing from '../Pricing/Pricing';
import Question from '../Question/Question';
import TradebladeIt from '../TradebladeIt/TradebladeIt';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Numbers />
      <Deals />
      <AboutCompany />
      <TradebladeIt />
      <Pricing />
      <Question />
      <DoitNow />
      <Footer />
    </>
  );
}

export default App;
