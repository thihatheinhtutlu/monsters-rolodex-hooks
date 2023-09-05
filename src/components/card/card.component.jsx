import './card.styles.css';

const Card = ({ monster }) => {
    const { id,name,email } = monster;

    return (
        <div className='card-container' key={id}>
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
};

export default Card;











// import { Component } from "react";
// import './card.styles.css';

// class Card extends Component {
//     render(){
//         const { id,name,email } = this.props.monsters;
        
//         return(
//             <div className="card-container" key={id}>
            
//             <img alt={`monsters ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
//             <h2> {name} </h2>
//             <p2> {email} </p2>

//                  </div>
//         )
//     }
// }

// export default Card;