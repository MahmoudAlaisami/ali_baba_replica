import React from 'react'
import styles from "../styles/navbar.module.css"
import { useNavigate } from "react-router-dom";
import { Button, Input, Select, Space } from 'antd';
import {
  CameraOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined,GlobalOutlined
} from "@ant-design/icons";


const Navbar = () => {
  const navigate = useNavigate();

  const options = [
    {
      value: 'products',
      label: 'Products',
    },
    {
      value: 'manufacturers',
      label: 'Manufacturers',
    },
    {
      value: 'suppliers',
      label: 'Suppliers',
    }
  ];

  return (
    <div className={styles.navbar}>
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

        <div className={styles.deliveryContainer}>
          <span className={styles.deliveryText}>Deliver to</span>
          <span className={styles.deliveryMenu}>flag</span>
        </div>

        <div className={styles.language}><GlobalOutlined /> US</div>
        <div onClick={()=>navigate('my_cart')} className={styles.cart}><ShoppingCartOutlined /></div>
        <div onClick={()=>navigate('signin')} className={styles.signin}><UserOutlined /> Sign in</div>
        <div onClick={()=>navigate('signup')} className={styles.signup}>Sign up</div>
    </div>
  )
}

export default Navbar