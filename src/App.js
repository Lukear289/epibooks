import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './MyNav';
import MyFooter from './MyFooter';
import AllTheBooks from './AllTheBooks';
import Welcome from './Welcome';

function App() {
  return (
    <div className="bg-secondary ">
      <header>
        <MyNav />
      </header>
      <section>
        <Welcome />
      </section>
      <main>
        <AllTheBooks />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
