import Card from '../card/card.component';
import "./card-list.styles.css";

const CardList = ({ monsters }) => {
    return ( 
    <div className="card-list">
        {monsters.map((monster) => {
            return <Card monster={monster} />;
        })}
    </div> 
            );
    };

export default CardList;












// import { Component } from "react";
// import Card from "../card/card.component";
// import "./card-list.styles.css";

// class CardList extends Component {
//     render(){
//        const { monsters } = this.props;
       
//        return (
//             <div className="card-list">
//                {monsters.map(monsters => {
//                 return (
//                 <Card monsters={monsters}/>
//                        )
//                })};
               
//             </div>
//         )
//     };
// };

// export default CardList;