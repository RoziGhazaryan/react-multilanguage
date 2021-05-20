import React from "react";
import { useTranslation } from "react-i18next";
import {Menu, Dropdown, Button, message, Space, Tooltip, Select} from 'antd';
import enFlag from '../../assets/images/flags/en.png'; // Tell webpack this JS file uses this image
import amFlag from '../../assets/images/flags/arm.png'; // Tell webpack this JS file uses this image
import ruFlag from '../../assets/images/flags/ru.png'; // Tell webpack this JS file uses this image
import './LanguageSelector.css';

function LanguageSelector() {
    const {Option} = Select;

    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">
                1st menu item
            </Menu.Item>
            <Menu.Item key="2">
                2nd menu item
            </Menu.Item>
            <Menu.Item key="3">
                3rd menu item
            </Menu.Item>
        </Menu>
    );
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

    function handleChange(value) {
        if(value === 'am') {
            changeLanguage("am");
        } else if(value === 'ru') {
           changeLanguage("ru");
        } else {
            changeLanguage("en");
        }
    }

  return (
    <div className="LanguageSelector">
        <Select defaultValue="am" style={{ width: 120 }} onChange={handleChange} className="language-flags">
            <Option value="am">
                <div className="flag">
                    <img src={amFlag} alt="flag"/>
                </div>
            </Option>
            <Option value="en">
                <div className="flag">
                    <img src={enFlag} alt="flag"/>
                </div>
            </Option>
            <Option value="ru">
                <div className="flag">
                    <img src={ruFlag} alt="flag"/>
                </div>
            </Option>
        </Select>
    </div>
  );
}

export default LanguageSelector;