import './Piece.css'
import { useRef, useEffect } from 'react'

function Piece({
    title,
    text,
    description,
    tags,
    image,
    rotateX = 0,
    rotateY = 0
}) {
    const imagesRef = useRef(null)

    useEffect(() => {
        if (!imagesRef.current) return

        imagesRef.current.style.transform = `
            perspective(800px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `
    }, [rotateX, rotateY])

    return (
        <div id="card">
            <div id="images" ref={imagesRef}>
                {image && <img id="image" src={image} />}
            </div>

            <div id="texts">
                <p className='title'>{title}</p>
                <p className='text'>{text}</p>
                <p className='description'>{description}</p>
                <p className='tags'>{tags}</p>
            </div>
        </div>
    )
}

export default Piece;
