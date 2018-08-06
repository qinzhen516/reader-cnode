import React, { Component } from 'react';

class PageButton extends Component {

    constructor(props) {
        super(props);
        this.setNext=this.setNext.bind(this);
        this.setUp=this.setUp.bind(this);
        this.state={
            // pageNumber: 0,  //跳转页码
            current:this.props.current, //存储当前页页码
           
        }
       
    }

    //下一页
    setNext(){
        if( this.state.current < this.props.totalPage){
            this.setState({
                current:this.state.current + 1 //点击下一页，当前页码+1
            },function () {
                this.props.setPage(this.state.current);
            })
        }
    }

    //上一页
    setUp(){
        if(this.state.current > 1){
            this.setState({
                current:this.state.current - 1 //点击上一页，当前页码-1
            },function () {
                this.props.setPage(this.state.current);
            })
        }
    }
    render() {
        console.log(this.state);
        return (
            <div className="page">
                <span onClick={ this.setUp } >上一页</span>
                <span>{ this.state.current }页/ { this.props.totalPage }页</span>
                <span onClick={ this.setNext }>下一页</span>
            </div>
        );
    }
}


export default PageButton