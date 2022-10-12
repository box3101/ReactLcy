import './css/style.css';
import Header from './components/Layout';
import Footer from './components/Footer';
import Panels from './components/Panels';


function App() {

  const arr = ['Blizzards', 'Calm', "Dusty_Road", "Escape", "Payday", "Retreat", "Seasonal", "Vespers"];
  const deg = 360 / arr.length;


  return (
    <figure>
      <button onClick={() => { console.log("you clicked!") }}>버튼</button>
      <Header />

      <section>
        {
          arr.map((data, index) => {
            return <Panels key={index} num={index} txt={data} deg={deg} />
          })
        };
      </section>


      <Footer />
    </figure>

  );
}

export default App;
