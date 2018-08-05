import React, { Component } from 'react';

class PageButton extends Component {
    // constructor(){
    //     super()
       
    // }

    // componentDidMount(){
    //     let curr = this.props.current;
    //     console.log(curr);  
    // }

    render(){    
         let curr = this.props.current,//当前页
            totalPage = this.props.totalPage;//总页数
            console.log(curr,totalPage);

        return( 
         

            <div className="page">
                <span>上一页</span>
                <span>第{curr}/{totalPage}页</span>
                <span onClick={this.handleNext.bind(this)}>下一页</span>
            </div>
     )   
     }
     //下一页
    handleNext(){
       let curr = this.props.current;
        if(curr > this.props.totalPage){
            curr = this.props.totalPage;
        }else{
            curr ++;
        }

        this.props.nextPage(curr);
    }
    
}

export default PageButton