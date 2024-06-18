import Header from './Header';
import Index from './Index';
import ContactMe from './ContactMe';
import Footer from './Footer';

function App() {
  return (
    <>
      <div class="flex justify-center">
        <div class="max-w-5xl">
          <Header></Header>
          <Index></Index>
          <ContactMe></ContactMe>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App
