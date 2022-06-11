import React from 'react';
import { motion } from "framer-motion";
import './Home.css'
import img from '../../images/undraw_Educator_re_s3jk.png'


function Home() {
  return (
    <div>
      
        
      <motion.h1
      className='container'
      style={{width:"350px",color:'#6B60F4',textAlign:'center'}}
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
      >Wellcome , our students crud oppareation</motion.h1>

    <center>
      <img src={img} alt="img" />
    </center>

    </div>
  )
}

export default Home