import React, { Component } from 'react';
import './items.css';
import { Link} from "react-router-dom";
class Item extends Component {

    // constructor(){
    //     super()
    // }

    render(){
       let Item = this.props.data.map((element,index) => {
            return <li key={index} ><Link to={`/detail/${element.id}`}><span>{element.reply_count}/{element.visit_count}</span>{element.title}</Link></li>
       })
        return(
            <ul className="item">
                {Item}
            </ul>

        )
    }
}

export default Item