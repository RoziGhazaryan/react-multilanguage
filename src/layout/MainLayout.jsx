import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import dob from '../assets/images/dob.jpg';
import dobAndGirl from '../assets/images/dob-and-girl.jpg';
import reading from '../assets/images/reading.jpg';
import abstract from '../assets/images/abstract.jpg';
import lama from '../assets/images/lama.jpg';
import birthVenus from '../assets/images/birth-of-venus.jpg';
import creationAdam from '../assets/images/adam-creation.jpg';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  SettingOutlined,
  PushpinOutlined,
} from '@ant-design/icons';
import MenuItem from "antd/es/menu/MenuItem";
import LanguageSelector from "../components/language-selector/LanguageSelector";
import {useTranslation} from "react-i18next";
import './MainLayout.css';

const { Header, Sider, Content } = Layout;

function MainLayout() {
  const { t } = useTranslation(["global", "sidebar"]);
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    if(collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              {t("sidebar:home")}
            </Menu.Item>
            <Menu.Item key="2" icon={<SettingOutlined />}>
              {t("sidebar:settings")}
            </Menu.Item>
            <Menu.Item key="3" icon={<PushpinOutlined />}>
              {t("sidebar:my_pins")}
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {collapsed ? <MenuUnfoldOutlined className='trigger' onClick={toggle} /> : 
            < MenuFoldOutlined className='trigger' onClick={toggle} />}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <div className="images-container">
              <div className="image-block">
                <img src={dob} alt="dob"/>
                <p>{t("global:sleeping_doberman")}</p>
              </div>
              <div className="image-block">
                <img src={lama} alt="lama" style={{objectPosition: "bottom"}}/>
                <p>{t("global:lama")}</p>
              </div>
              <div className="image-block">
                <img src={birthVenus} alt="venus"/>
                <p>{t("global:venus_birth")}</p>
              </div>
              <div className="image-block">
                <img src={creationAdam} alt="dob"/>
                <p>{t("global:adam_creation")}</p>
              </div>
              <div className="image-block">
                <img src={dobAndGirl} alt="dob"/>
                <p>{t("global:photo_shoot")}</p>
              </div>
              <div className="image-block">
                <img src={reading} alt="dob"/>
                <p>{t("global:reading")}</p>
              </div>
              <div className="image-block">
                <img src={abstract} alt="dob"/>
                <p>{t("global:abstract")}</p>
              </div>
              <div className="image-block">
                <img src={dob} alt="dob"/>
                <p>{t("global:sleeping_doberman")}</p>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
}

export default MainLayout;