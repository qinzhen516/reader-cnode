import React, { Component } from 'react';

class Detail extends Component {

    constructor(){
        super()
        this.state = {
            data : {}
        }
    }
    componentDidMount(){
       
        let id = this.props.match.params.id;
           // console.log(id);
        fetch(`https://cnodejs.org/api/v1/topic/${id}`)
        .then((res) => {
              return res.json()
         }).then((res)=>{
            
              this.setState({
                data : res.data
              })
  
               //console.log(this.state.data);
        })   
       

    }

    render(){
        
    
      
        return(
            <div>
                <button onClick={this.handleBack.bind(this)}>返回首页</button>
                <p className="title">{this.state.data.title}</p>
                 <div className="detail">
              
               <div dangerouslySetInnerHTML={{ __html:this.state.data.content}} ></div>
               {/* <pre>{this.state.data.content}</pre> */}

           </div>
            </div>
              
            
        )
    }
    handleBack(e){
        e.preventDefault();
        window.history.back();
    }
}

export default Detail