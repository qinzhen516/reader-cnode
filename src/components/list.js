import React, { Component } from 'react';

import PageButton from './pageButton';
import Item from './items';

class List extends Component {

  constructor() {
    super();
    this.state = {
      data: [],//拿到所有的数据
      totalNum: '',//总的条数
      current: 1, //当前页
      pageSize: 10, //每一页条数
      goValue: '',
      totalPage: 0,//总页数
      indexList: []
    }

  }

// fetchData()


  componentWillMount() {

   fetch("https://cnodejs.org/api/v1/topics")
      .then((res) => {
        return res.json()
      }).then((res) => {


        let len = res.data.length,
          totalPage = Math.ceil(len / this.state.pageSize);

        //根据当前页数，再indexList中存入数据
        let current = this.state.current,
          indexList = this.state.indexList,
          pageSize = this.state.pageSize;
        // data = this.state.data;
        //每一次开始都应该是空
        indexList = [];
        for (let i = (current - 1) * pageSize; i < current * pageSize; i++) {
          indexList.push(res.data[i]);
        };


        this.setState({
          data: res.data,
          totalNum: len,
          totalPage: totalPage,
          indexList: indexList
        })
       // console.log(this.state);
      })
      // .then((curr) =>{
      //   this.setState({
      //       current : curr
      //   })
      // })
  }

  
//下一页
  nextPage(curr){
    // // let _this = this;
     console.log(curr);
    // this.setState(
    //   {current : curr},
    //   () => {
    //     console.log(this.state.data)
    //   }
    // )
    return curr;
  }

  render() {

    console.log(this.state.indexList);
    return (
      <div>

        <div className="list">
          <Item data={this.state.indexList} />
          <PageButton current={this.state.current} totalPage={this.state.totalPage} nextPage={this.nextPage}/>




        </div>
      </div>
    );
  }
}


export default List