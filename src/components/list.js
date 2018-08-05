import React, { Component } from 'react';

import PageButton from './pageButton';
import Item from './items';

class List extends Component {

    constructor(){
        super();
        this.state = {
          data : [],
          current :1, //当前页
          pageSize :10, //每一页条数
        //   totalData : this.state.data.length,//
          goValue :0,
          totalPage:0,//总页数
          indexList :[]
        }
      }

      componentWillMount(){

        fetch("https://cnodejs.org/api/v1/topics")
              .then((res) => {
                return res.json()
              }).then((res)=>{
              
                this.setState({
                  data : res.data
                })
                console.log(this.state.data.length);
              })
        //设置总页数
        this.setState({
            totalPage:Math.ceil( this.state.data.length/this.state.pageSize),
        })
        this.pageNext(this.state.goValue)
        console.log(this.state.data.length);

    }

    setPage(num){
        this.setState({
            indexList:this.state.data.slice(num,num+this.state.pageSize)
        })
    }


    pageNext (num) {
        this.setPage(num)
    }


       componentDidMount(){
    
         fetch("https://cnodejs.org/api/v1/topics")
              .then((res) => {
                return res.json()
              }).then((res)=>{
              
                this.setState({
                  data : res.data
                })
    
                // console.log(this.state.data[0]);
              })
              
    
       }
    
      render() {
    
        return (
          <div>
            
            <div className="list">
                  <Item data={this.state.data}/>
                  <PageButton { ...this.state } pageNext={this.pageNext} />
                  
            </div>
          </div>
        );
      }
    }


export default List