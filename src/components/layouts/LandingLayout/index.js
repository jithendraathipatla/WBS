import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Layout, Menu, Icon, Typography } from 'antd'
import { ReactComponent as LogoIcon } from '@static/logo.svg'
import {Link} from 'gatsby';

const LandingLayout = ({ children }) => {
  const [collapsed, toggle] = useState(true)
  return (
    <div className='landing-layout'>
      <Layout>
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme='light' 
        >
          <div className='h-20 m-2 flex items-center justify-around'>
            <LogoIcon className='h-10 w-10 mr-2 fill-primary-color' />
            <Typography.Title
              level={4}
              className={classNames('text-primary-color', {
                hidden: collapsed,
              })}
            >
              WBS
            </Typography.Title>
          </div>
          <Menu
            theme='light'
            mode='inline'
            defaultSelectedKeys={['0']}
            className='border-0'
          >
            <Menu.Item key='1'>
              <Link to="/"><Icon type='user' />
              <span>Account</span></Link>
            </Menu.Item>
            
            <Menu.Item key='2'>
            <Link to='/videos'><Icon type='video-camera' />
              <span>Videos</span></Link>
            </Menu.Item>

            <Menu.Item key='3'>
              <Link to="/upload"><Icon type='upload' />
              <span>Upload</span></Link>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className='leading-normal ml-4 text-base'
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => toggle(!collapsed)}
            />
            <h4 className="ant-layout-header">Wellness Body Mind Soul</h4>
          </Layout.Header>
          <Layout.Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <div style={{ minHeight: '100vh' }}>{children}</div>
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  )
}

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default memo(LandingLayout)
