import React, { Component } from 'react';
import { fetchIndexData } from './fetch';
import PageButton from './pageButton';
import Item from './items';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],//拿到所有的数据
      totalNum: '',//总的条数
      current: 1, //当前页
      pageSize: 10, //每一页条数
      totalPage: 0,//总页数
      indexList: []
    }
    this.setPage = this.setPage.bind(this);

  }

  // fetchData() {
  //   fetch("https://cnodejs.org/api/v1/topics")
  //     .then((res) => {
  //       return res.json()
  //     }).then((res) => {


  //       let len = res.data.length,
  //         totalPage = Math.ceil(len / this.state.pageSize);

  //       //根据当前页数，再indexList中存入数据
  //       let current = this.state.current,
  //         indexList = this.state.indexList,
  //         pageSize = this.state.pageSize;
  //       // data = this.state.data;
  //       //每一次开始都应该是空
  //       indexList = [];
  //       for (let i = (current - 1) * pageSize; i < current * pageSize; i++) {
  //         indexList.push(res.data[i]);
  //       };
  //       //debugger;
  //       const param = {
  //         data: res.data,
  //         totalNum: len,
  //         totalPage: totalPage,
  //         indexList: indexList
  //       }
  //       console.log(param);
  //       return param;
  //     })
  // }


  componentDidMount() {
    // 获取数据并进行初始操作(因为fetchIndexData异步函数，所以会在最后执行)
    // fetch("https://cnodejs.org/api/v1/topics")
    //   .then((res) => {
    //     return res.json()
    //   }).then((res) => {

    fetchIndexData().then((res) => {
      // let len = res.data.length,
      //   totalPage = Math.ceil(len / this.state.pageSize);

      //根据当前页数，再indexList中存入数据
      // let current = this.state.current,
      //   indexList = this.state.indexList,
      //let   pageSize = this.state.pageSize;
      // // data = this.state.data;
      // //每一次开始都应该是空
      // indexList = [];
      // for (let i = (current - 1) * pageSize; i < current * pageSize; i++) {
      //   indexList.push(res.data[i]);
      // };
      //debugger;
      const { pageSize } = this.state;
      this.setState({
        data: res.data,
        totalPage: Math.ceil(res.data.length / pageSize), //拿到数据后计算总页数
        indexList: res.data.slice(0, pageSize)
      })
      //console.log(this.state);
    });
  }

  //根据页码重新获取indexList中的数据
  setPage(pageNumber) {
    //console.log('this.state: ', this.state);
    //  //debugger;
      const  {pageSize}  = this.state;
      const startIndex = (pageNumber - 1) * pageSize;

      this.setState({
        indexList: this.state.data.slice(startIndex, startIndex + pageSize),

      })
  }


  render() {

    return (
      <div>

        <div className="list">
          <Item data={this.state.indexList} />
          {/* <PageButton current={this.state.current} totalPage={this.state.totalPage} nextPage={this.nextPage} /> */}
          <PageButton {...this.state} setPage={this.setPage} />



        </div>
      </div>
    );
  }
}


export default List