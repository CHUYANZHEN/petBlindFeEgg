import React, { Component } from 'react';

// ${root}/app/web/component/layout.jsx 通过 webpack alias 配置 component
import Layout from 'component/layout.jsx';
// 页面列表 List 组件
import List from './componets/list';
import './index.css';

export default class HomeIndex extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    return <Layout>
      <div className="main">
        <div className="page-container page-component">
          <List list={this.props.message}></List>
        </div>
      </div>
    </Layout>;
  }
}