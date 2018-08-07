import React, { Component } from 'react';
import Replies from './replies';
class Detail extends Component {

    constructor(){
        super()
        this.state = {
            data : {},
            current : ''
        }
    }
    componentDidMount(){
       
        let id = this.props.match.params.id,
            current = this.props.match.params.current;
        fetch(`https://cnodejs.org/api/v1/topic/${id}`)
        .then((res) => {
              return res.json()
         }).then((res)=>{
            
              this.setState({
                data : res.data,
                current 
              })
  
               //console.log(this.state.data);
        })   
       

    }

    render(){
      
        return(
            <div>
                <button onClick={this.handleBack.bind(this)} className="goback">返回首页</button>
                <p className="title">{this.state.data.title}</p>
                 <div className="detail">
              
               <div dangerouslySetInnerHTML={{ __html:this.state.data.content}} ></div>
               {/* <pre>{this.state.data.content}</pre> */}
                <Replies data={this.state.data}/>
           </div>
            </div>
              
            
        )
    }
    handleBack(e){
        e.preventDefault();
        window.history.back();
        //let current = this.props.match.params.current;
       // console.log(this.state.current);

    }
}

export default Detail