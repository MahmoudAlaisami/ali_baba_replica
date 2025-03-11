import React from 'react'
import styles from "../styles/navbar.module.css"
import { useNavigate } from "react-router-dom";
import { Button, Input, Select, Space, Dropdown, Drawer } from 'antd';
import {
  CameraOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined,GlobalOutlined, MenuOutlined
} from "@ant-design/icons";
import country from 'country-list-js';
import { navbarOptions as options } from '../utils/constants';


const Navbar = () => {
  const [selectedCountry, setSelectedCountry] = React.useState("United States");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  let country_names = country.names();
  const countries = country_names.map((country, index) => ({
    key: index + 1,
    label: (<span>{country}</span>),
    onClick: () => setSelectedCountry(country)
  }));

  return (
    <div className={styles.navbar}>
      <Button
        icon={<MenuOutlined />}
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(true)}
      />
      <div className={styles.titleContainer}>
        <img src="./logo-512.png" alt="AliBaba Logo"/>
        <span><span style={{fontWeight: 'bold'}}>Alibaba</span>.com</span>
      </div>

        <Space.Compact className={styles.searchCompact}>
          <Select className={styles.searchSelect} defaultValue="Products" options={options} />
          <Input className={styles.searchInput} suffix={
            <div className={styles.searchButtonsContainer}>
              <Button icon={<CameraOutlined />} className={styles.imageSearch}/>
              <div className={styles.searchButtonInnerContainer}>
                <SearchOutlined className={styles.searchButton}/>
                <span className={styles.searchText}>Search</span>
              </div>
            </div>
            }
          />
        </Space.Compact>

        <Dropdown menu={{ items: countries }} trigger={"click"}>
          <div className={styles.deliveryContainer}>
            <span className={styles.deliveryText}>Deliver to</span>
            <span className={styles.deliveryMenu}>{selectedCountry}</span>
          </div>
        </Dropdown>
        <div className={styles.language}><GlobalOutlined /> US</div>
        <div onClick={()=>navigate('my_cart')} className={styles.cart}><ShoppingCartOutlined /></div>
        <div onClick={()=>navigate('signin')} className={styles.signin}><UserOutlined /> Sign in</div>
        <div onClick={()=>navigate('signup')} className={styles.signup}>Sign up</div>

        <Drawer
        title="Alibab.com"
        placement="left"
        onClose={() => setIsMenuOpen(false)}
        open={isMenuOpen}
        className={styles.drawer}
      >
        <Dropdown menu={{ items: countries }} trigger={["click"]}>
          <div className={styles.drawerDeliveryContainer}>
            <span className={styles.drawerDeliveryText}>Deliver to</span>
            <span className={styles.drawerDeliveryMenu}>{selectedCountry}</span>
          </div>
        </Dropdown>

        <div className={styles.drawerLanguage}><GlobalOutlined /> US</div>
        <div onClick={() => navigate('my_cart')} className={styles.drawerCart}><ShoppingCartOutlined /> My Cart</div>
      </Drawer>
    </div>
  )
}

export default Navbar