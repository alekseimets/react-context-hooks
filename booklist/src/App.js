import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContex';

function App() {
  return (
    <div className="App">
    <BookContextProvider>
      <Navbar />
      <BookList />
    </BookContextProvider>
    </div>
  );
}

export default App;
