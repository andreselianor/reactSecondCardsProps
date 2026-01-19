import './styles/App.css'
import { useEffect, useState } from 'react'
import Piece from './components/Piece/Piece'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1

      setRotation({
        x: y * -50,
        y: x * 50
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <Header />
      <div id="content">
        <main>
          <Piece
            title="·Mahjong·"
            text="🐉 juego del mahjong"
            description="El mahjong es un juego de origen milenario que combina estrategia, observación y un toque de azar, donde cada partida es diferente. Con fichas llenas de simbolismo y decisiones constantes, invita tanto a principiantes como a curiosos."
            tags="#mahjong #fichas #combinaciones #inteligencia #destreza #historia #asia"
            image="./src/assets/pieceInitial.png"
            rotateX={rotation.x * 0.3}
            rotateY={rotation.y * 0.3}
          />

          <Piece
            title="· Dragon ·"
            text="🀄 dragon rojo"
            description="Una ficha poderosa que simboliza la suerte y la energía en el mahjong, fácil de reconocer y emocionante de jugar. Representa esos momentos clave en los que una sola jugada puede cambiar toda la partida."
            tags="#dragon #reino animal #fuego interior #emocion"
            image="./src/assets/redDragon.png"
            rotateX={rotation.x * 0.4}
            rotateY={rotation.y * 0.4}
          />

          <Piece
            title="· Dragon ·"
            text="🀅 dragon verde"
            description="Asociado al crecimiento y la estrategia, el Dragón Verde añade un toque de misterio y equilibrio al juego. Es una pieza que premia la paciencia y hace que cada decisión se sienta importante."
            tags="#dragon #fuerza de la naturaleza #supervivencia #reino vegetal #prosperar"
            image="./src/assets/greenDragon.png"
            rotateX={rotation.x * 0.5}
            rotateY={rotation.y * 0.5}
          />

          <Piece
            title="· Dragon ·"
            text="🀆 dragon blanco"
            description="Minimalista y elegante, el Dragón Blanco destaca por su simplicidad y simboliza la claridad mental y la precisión. Perfecto para quienes disfrutan de un juego donde el ingenio vale más que la fuerza."
            tags="#dragon #reino espiritual #cero neutro #nuevo comienzo"
            image="./src/assets/whiteDragon.png"
            rotateX={rotation.x * 0.6}
            rotateY={rotation.y * 0.6}
          />

          <Piece
            title="·Endgame·"
            text="🀙 final de partida"
            description="El final de una partida de mahjong es el momento en que toda la tensión acumulada cobra sentido y las estrategias se revelan. Entre expectación y emoción, una última ficha puede definir al ganador y dejar a todos con ganas de volver a jugar."
            tags="#ganadores #competicion #suma de puntos #suma de leyendas #mejor historia"
            image="./src/assets/pieceFinal.png"
            rotateX={rotation.x * 0.8}
            rotateY={rotation.y * 0.8}
          />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App;
