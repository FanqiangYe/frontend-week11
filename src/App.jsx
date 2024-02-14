import './App.css'
import Button from "./components/buttons.jsx";
import Product from "./components/product.jsx";
import bag1 from "././assets/bag_1.png"
import bag2 from "././assets/bag_2.png"
import bag3 from "././assets/bag_3.png"
import bag4 from "././assets/bag_4.png"
import story from "././assets/our_story.png"
import brand from "././assets/brand.png"
import Tile from "./components/tile.jsx";
function App() {
  return (<>

      <h1>Handbags & Purses</h1>
      <nav>
          <Button
              text="to the collection"
              disabled={false}/>
          <Button
              text="shop all bags"
              disabled={false}/>
          <Button
              text="pre-orders"
              disabled={true}/>
      </nav>
          <main>
              <Product
                  label={"Best seller"}
              image={bag1} imageAlt={"bag product picture"}
              nameBag={"The handy bag"}
                  price={"€400"}/>
              <Product
                  label={"Best seller"}
                  image={bag2} imageAlt={"bag product picture"}
                  nameBag={"The stylish bag"}
                  price={"€250"}/>
              <Product
                  label={"New collection"}
                  image={bag3} imageAlt={"bag product picture"}
                  nameBag={"The simple bag"}
                  price={"€300"}/>
              <Product
                  label={"New collection"}
                  image={bag4} imageAlt={"bag product picture"}
                  nameBag={"The trendy bag"}
                  price={"€150"}/>
          </main>
          <footer>
              <Tile title="THE BRAND">
                  <p> Willekeurige tekst voor de paragrafen. Willekeurige tekst voor de paragrafen.
                      Willekeurige tekst voor de paragrafen. Willekeurige tekst voor de paragrafen.
                  </p>
                  <p>
                      Nog meer willekeurige tekst voor de paragrafen. Nog meer willekeurige tekst voor de paragrafen.
                      Nog meer willekeurige tekst voor de paragrafen.
                  </p> </Tile>

              <Tile image={brand} imageAlt="Logo"/>
              <Tile image={story} imageAlt="Story"/>
              <Tile title="OUR STORY">
                  <p> Willekeurige tekst voor de paragrafen. Willekeurige tekst voor de paragrafen.
                      Willekeurige tekst voor de paragrafen. Willekeurige tekst voor de paragrafen.
                  </p>
                   </Tile>



          </footer>

      </>
  )
}

export default App
