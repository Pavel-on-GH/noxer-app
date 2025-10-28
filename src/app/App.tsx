import { Header } from '../widgets/Header/Header';
import { Footer } from '../widgets/Footer/Footer';
import { useAppSelector } from '../app/redux';
import { selectIsSearching } from './store/ui/selectors';
import { Home } from '../pages/Home/Home';
import { Search } from '../features/Search/Search';

function App() {
  const isSearching = useAppSelector(selectIsSearching);
  return (
    <>
      <Header />
      {isSearching ? <Search /> : <Home />}
      <Footer />
    </>
  );
}

export default App;
