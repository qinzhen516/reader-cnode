import React, { Component } from 'react';

class Replies extends Component {
    // constructor(props){
    //     super(props)


    // }
    render() {
        // console.log(this.props.data);
        let replie = this.props.data.replies,
            html;
        if (replie) {
            html = replie.map((element,index) => {
                
                return <div className="rep" key={index}>
                        <span className="rep_name">{element.author.loginname}</span>
                        <span className="time">{element.create_at}</span>
                        <div dangerouslySetInnerHTML={{ __html:element.content}} className="content"></div>
                        
                </div>
            })
        }

        return (
            <div className="replies">
            <p className="title">评论</p>
                {html}
            </div>
        )
    }
}
export default Replies