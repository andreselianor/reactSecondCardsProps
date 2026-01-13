import './styles/App.css';
import Piece from './components/Piece/Piece';

function App() {
  return (
    <div id="content">
      <main>
        <Piece
          title="Dragon"
          text="Dragon Rojo"
          description="Es una historia donde la valentia adopta la forma de un dragon, que baja surcando los cielos anaranjados "
          tags="#dragon"
          image="./src/assets/redDragon.png"
        />
        <Piece
          title="Dragon"
          text="Dragon Verde"
          description="Si giras, giras, giras, tal y como ballarina. Alla en los cielos veras dragones verdes, volando alrededor, de los hombres mosqueteros, que ademas son trompeteros."
          tags="#dragon"
        />
        <Piece
          title="Dragon"
          text="Dragon Blanco"
          description="El pequeño saltamontes no sabe donde tiene el bonete."
          tags="#dragon"
        />
      </main>
    </div>
  )
}

export default App;
