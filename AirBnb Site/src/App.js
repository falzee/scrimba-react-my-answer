import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Info from './Components/Info';
import Card from './Components/Card';

function App() {
  const cards = Info.map(item => {
        return (
            <Card 
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                country={item.country}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
        )
    })        
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
