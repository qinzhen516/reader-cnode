import React, { Component } from 'react';

class Detail extends Component {

    constructor(){
        super()
        this.state = {
            data : {}
        }
    }
    componentDidMount(){
        let url = window.location.href.split("/"),
            id = url[url.length - 1];
        // let newUrl = `https://cnodejs.org/api/v1/topic/${id}`
        // console.log(newUrl);
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
        
     // console.log(this.state.data.content);
     
      if(this.state.data.content){
        document.querySelector(".detail").innerHTML = this.state.data.content ;
      }
      
        return(
            <div>
                <button onClick={this.handleBack.bind(this)}>返回首页</button>
                <p className="title">{this.state.data.title}</p>
                 <div className="detail">
              
               {/* <pre dangerouslySetInnerHTML={{ __html: JSON.stringify(this.state.data.content, null, 2) }} /> */}
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