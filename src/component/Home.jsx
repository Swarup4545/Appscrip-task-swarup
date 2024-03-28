import React, { useState } from 'react'
import { useSelector } from "react-redux";
import styles from './main.module.css';
import Products from './Products';
const Home = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log('homedata', products)
    const [showFliter,setShowFilter]=useState(false);
    const [showToggle, setShowToggle] = useState(false);
    const [item1,setItem]=useState([]);
    const products1 = useSelector((state) => state.slectedProducts.products);
    console.log("original",products1)
    const showfilter = () => {
        setShowFilter(!showFliter);
    };

    const handleMouseEnter = () => {
        setShowToggle(true);
    };

    const handleMouseLeave = () => {
        setShowToggle(false);
    };
    function recomended1(disco){
        let temp=products.filter((i)=>i.discountPercentage > disco)
        setItem(temp)
        console.log('temp',temp)        
    }
    function recomended2(rate){
        let temp=products.filter((i)=>i.rating>rate)
        setItem(temp)
        console.log('temp',temp)        
    }
    function recomended3(price){
        let temp=products.filter((i)=>i.price>price)
        setItem(temp)
        console.log('temp',temp)        
    }
    function recomended4(price){
        let temp=products.filter((i)=>i.price<price)
        setItem(temp)
        console.log('temp',temp)        
    }
    
    return (
        <>
            <div className={styles.toppart} onMouseLeave={handleMouseLeave}>
                <div className={styles.topin} onMouseLeave={handleMouseLeave}>
                    <h1 className={styles.hedding}>DISCOVER OUR PRODUCTS</h1>
                    <p className={styles.para1}>Welcome to our shopping app, where convenience meets style! Explore our curated collection and discover your next favorite finds with just a click.</p>
                </div>
            </div>
            <div className={styles.filterbar} onMouseLeave={handleMouseLeave}>
                <div className={styles.box}>
                    <p className={styles.filterno}>{products1.length}</p>
                    <p className={styles.filter} onClick={showfilter} >{showFliter? `<HIDE FILTER`:`>SHOW FILTER`}</p>
                    <p className={styles.deffilter} onMouseEnter={handleMouseEnter} >default filter</p>
                </div>
                <div className={`${showToggle ? styles.toggle : styles.hidden}`} onMouseLeave={handleMouseLeave}>
                    <p className={styles.toggle1} >RECOMENED</p>
                    <p className={styles.toggle2} onClick={()=>recomended1(10)}>DISCOUNT FROM 10%</p>
                    <p className={styles.toggle3} onClick={()=>recomended2(4.10)}>4 STAR +</p>
                    <p className={styles.toggle4} onClick={()=>recomended3(1000)}>PRICE:HIGH</p>
                    <p className={styles.toggle5} onClick={()=>recomended4(1000)}>PRICE:LOW</p>
                </div>
            </div>
            <div onMouseLeave={handleMouseLeave}>
            <Products showFilter={showFliter} setShowFilter={setShowFilter} item1={item1}/>
            </div>
            
        </>
    )
}

export default Home