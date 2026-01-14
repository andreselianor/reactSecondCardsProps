import './styles/App.css'
import { useEffect, useState } from 'react'
import Piece from './components/Piece/Piece'

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
    <div id="content">
      <main>        
        <Piece
          title="·Mahjong·"
          text="Juego del Mahjong"
          description=""
          tags="#mahjong #fichas #combinaciones #inteligencia #destreza #historia #asia"
          image="./src/assets/pieceInitial.png"
          rotateX={rotation.x * 0.3}
          rotateY={rotation.y * 0.3}
        />

        <Piece
          title="· Dragon ·"
          text="Dragon Rojo"
          description=""
          tags="#dragon #reino animal #fuego interior #emocion"
          image="./src/assets/redDragon.png"
          rotateX={rotation.x * 0.4}
          rotateY={rotation.y * 0.4}
        />

        <Piece
          title="· Dragon ·"
          text="Dragon Verde"
          description=""
          tags="#dragon #fuerza de la naturaleza #supervivencia #reino vegetal #prosperar"          
          image="./src/assets/greenDragon.png"
          rotateX={rotation.x * 0.5}
          rotateY={rotation.y * 0.5}
        />

        <Piece
          title="· Dragon ·"
          text="Dragon Blanco"
          description=""
          tags="#dragon #reino espiritual #cero neutro #nuevo comienzo"          
          image="./src/assets/whiteDragon.png"
          rotateX={rotation.x * 0.6}
          rotateY={rotation.y * 0.6}
        />
        
        <Piece
          title="·Endgame·"
          text="Final de partida"
          description=""
          tags="#ganadores #competicion #suma de puntos #suma de leyendas #mejor historia"
          image="./src/assets/pieceFinal.png"
          rotateX={rotation.x * 0.8}
          rotateY={rotation.y * 0.8}
        />
      </main>
    </div>
  )
}

export default App;
