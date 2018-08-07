import React, { Component } from 'react';
import { fetchIndexData } from './fetch';
import PageButton from './pageButton';
import Item from './items';
import { TYPE } from './type';

class List extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],//拿到所有的数据
      // totalNum: '',//总的条数
      current: 1, //当前页
      pageSize: 10, //每一页条数
      type: TYPE[0]
    }
    this.setPage = this.setPage.bind(this);

  }

  fetchData(type, current, pageSize) {

    this.props.history.push(`/list/${type}/${current}/${pageSize}`);
    fetchIndexData(type, current, pageSize).then((res) => {
      this.setState({
        data: res.data,
        type :type,
        current:current,
        pageSize:pageSize
      });
      // console.log("fetch",this.state.type);

    });
  }


  componentDidMount() {
    const current = this.props.match.params.current || 1;
    const pageSize = this.props.match.params.pageSize || 10;
    const type = this.props.match.params.type || 'all';


    this.fetchData(type, current, pageSize);
    //console.log("didmount", this.state);

  }

//设置当前页
  setPage(type,pageNumber) {
    this.setState({
      current: pageNumber
    })

    this.fetchData(type, pageNumber, this.state.pageSize);
    //console.log(this.state.type)
  }
  //改变每一页的条数，pageSize
  changePage(pageSize){
    //console.log("list",pageSize);
    this.fetchData(this.state.type,this.state.current,pageSize);
  }
  ////改变分类
  handleFilterChange = (value) => {

    this.setPage(value,1);
    
  }

  render() {
    // console.log(this.state.type);
    return (
      <div>
        <div className="type">
          {
            TYPE.map(filter => (<div
              className={"filter-item" + (this.state.type === filter ? ' active' : '')}

              key={filter}
              onClick={() => this.handleFilterChange(filter)}>
              {filter}
            </div>))
          }

        </div>
        <div className="list">
          <Item data={this.state.data} current={this.state.current}/>
          <PageButton {...this.state} setPage={this.setPage}  changePage={this.changePage.bind(this)}/>
        </div>
      </div>
    );
  }
}


export default List