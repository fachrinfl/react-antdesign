import React from 'react';
import { Layout, Button, Table, Divider, Tag} from 'antd';
import 'antd/dist/antd.css';


class App extends React.Component {

  render() {
    const {Content} = Layout;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Hobby',
        dataIndex: 'hobby',
        key: 'hobby',
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
        <a href="javascript:;">Edit</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
        ),
      }
    ];

    const data = [
      {
        key: '1',
        name: 'Sonie',
        hobby: 'Mobile Legend',
        category: 'Game',
      },
      {
        key: '2',
        name: 'Isgie',
        hobby: 'Futsal',
        category: 'Olahraga',
      }
    ];
    return (
        <Layout className="layout">
          <Content style={{ padding: '50px' }}>
            <div style={{marginBottom: '20px'}}>
              <Button type="primary">Add</Button>
            </div>
            <div>
              <Table columns={columns} dataSource={data} pagination={false} style={{background: '#ffffff'}}/>
            </div>
          </Content>
        </Layout>
    );
  }
}

export default App;
