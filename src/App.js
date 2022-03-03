import { BrowserRouter, Switch, Route } from "react-router-dom";
import CardContainer from '../src/components/common/CardContainer/CardContainer';
import Header from '../src/components/layout/Header/Header';
import Footer from '../src/components/layout/Footer/Footer';
import Nav from '../src/components/common/Nav/Nav';
import SearchBar from '../src/components/common/SearchBar/SearchBar';
function App() {
  return (

    <BrowserRouter>
      <Nav />
      <Header />
      <SearchBar />
      <CardContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

