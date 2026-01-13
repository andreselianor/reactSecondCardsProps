import './Piece.css'
function Piece(props) {
    return (
        <div id="card">
            <div>
                <img id="image" src={props.image} />
            </div>
            <div id="texts">
                <p className='title'>{props.title}</p>
                <p className='text'>{props.text}</p>
                <p className='description'>{props.description}</p>
                <p className='tags'>{props.tags}</p>
            </div>
        </div >
    )
}

export default Piece;