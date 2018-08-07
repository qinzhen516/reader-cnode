import React, { Component } from 'react';

class PageButton extends Component {

    constructor(props) {
        super(props);
        this.setNext=this.setNext.bind(this);
        this.setUp=this.setUp.bind(this);
        this.state={
            // pageNumber: 0,  //跳转页码
            current:this.props.current,//存储当前页页码
            pageSize:this.props.pageSize
           
        }
       
       
    }

    //下一页
    setNext(){
      
            this.setState({
                current:+this.props.current + 1 //点击下一页，当前页码+1
            },function () {
                this.props.setPage(this.props.type,this.state.current);
            })   
    
    }

    //上一页
    setUp(){

        if(this.props.current > 1){
            this.setState({
                current:+this.props.current - 1 //点击上一页，当前页码-1
            },function () {
                this.props.setPage(this.props.type,this.state.current);
            })
        }
    }
    handleChange(e){
        e.preventDefault();
       
       let  pageSize = e.target.value;
    //    this.setState({
    //        pageSize:pageSize
    //    })
       //console.log(e.target.value);
        this.props.changePage(pageSize);
    }
    render() {
        //console.log("button",this.props.type,"sta",this.state.type);
       // console.log("fu",this.props.pageSize);
        return (
            <div className="page">
                <span onClick={ this.setUp } >上一页</span>
                <span>第{ this.props.current }页</span>
                <span onClick={ this.setNext }>下一页</span>
                每一页
                <select  onChange={this.handleChange.bind(this)}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                </select>条
            </div>
        );
    }
   
}


export default PageButton