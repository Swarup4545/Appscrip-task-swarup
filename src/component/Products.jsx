import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { selectProduct } from '../redux/actions/productAction';
import styles from './main.module.css';
const Products = ({showFilter,setShowFilter,item1}) => {
    const [ideal, setIdeal] = useState(false);
    const [occasion, setOcassion] = useState(false);
    const [work, setWork] = useState(false);
    const [fabrik, setFabrik] = useState(false);
    const [segment, setSegment] = useState(false);
    const [suitable, setSuitable] = useState(false);
    const [raw, setRaw] = useState(false);
    const [pattern, setPattern] = useState(false);
    const [item,setItem] =useState([]);
    const [filtermultipel,setFiltermultipel]= useState([]);
    
    const products = useSelector((state) => state.allProducts.products);
    
    console.log('homedata', products)
    function showideal() {
        setIdeal(!ideal)
    }
    function showocassion(){
        setOcassion(!occasion)
    }
    function showwork(){
        setWork(!work)
    }
    function showfabrik(){
        setFabrik(!fabrik)
    }
    function showsegment(){
        setSegment(!segment)
    }
    function showsuitable(){
        setSuitable(!suitable)
    }
    function showraw(){
        setRaw(!raw)
    }
    function showpattern(){
        setPattern(!pattern)
    }
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(selectProduct(item));
    },[item])
    
    useEffect(()=>{
        setItem(item1)
    },[item1])
    useEffect(() => {
        setItem(products); // Set item state with the products
    }, [products]); 
    
    // function handleChange1(e) {
    //     setChecked(e.target.checked);
    //     if(!checked)
    //     {
    //         filterMultipel('laptops')
    //     }
    //     else{
    //         setFiltermultipel((prevstate) =>
           
    //         prevstate.filter((val) => val !== laptops )
          
    //       );
    //         setItem(products)
    //     }
    //  }
    //  function handleChange2(e) {
    //     setChecked(e.target.checked);
    //     if(checked)
    //     {
    //         filterMultipel('smartphones')
    //     }
    //     else{
    //         setFiltermultipel((prevstate) =>
           
    //         prevstate.filter((val) => val !== smartphones )
          
    //       );
    //         setItem(products)
    //     }
    //  }
    //  function handleChange3(e) {
    //     setChecked(e.target.checked);
    //     if(!checked)
    //     {

    //         filterMultipel('groceries')

    //     }
    //     else{
    //         setFiltermultipel((prevstate) =>
           
    //        prevstate.filter((val) => val !== groceries )
         
    //      );
    //         setItem(products)
    //     }
    //  } 


    function handleCheckboxChange(cat){
        const isCategoryPresent = filtermultipel.includes(cat);

      // If the category is present, remove it; otherwise, add it
      setFiltermultipel((prevstate) =>
        isCategoryPresent
          ? prevstate.filter((val) => val !== cat)
          : [...prevstate, cat]
      );
    };
    const filterItems=()=>{
        if(filtermultipel.length>0)
        {
            let tempItems=filtermultipel.map((selectedcat)=>{
                let temp=products.filter((i)=>i.category===selectedcat)
                return temp;
            });
            setItem(tempItems.flat());
        }else{
            setItem([...products])
        }
    }
    
    useEffect(()=>{
        filterItems();
      },[filtermultipel])
      

    console.log("filtering",filtermultipel)
    const renderlist = item.map((product, index) => {
        const {
            id,
            brand,
            thumbnail,
            title,
            description,
            stock,
            discountPercentage,
            image,
            rating,
            price,
            category,
            images
        } = product;
        return (
            <div className={styles.card}>
                <div className={styles.imgin}>
                    <img src={thumbnail} className={styles.img} alt={brand}></img>
                </div>
                <ul className={styles.textbox}>
                    <li className={styles.texttitle}>{title}</li>
                    <li className={styles.textdisco}><span className={styles.textdiscoin}>DISCOUNT:-{discountPercentage}%</span></li>
                    <li className={styles.textprice}>PRICE:-{price}</li>
                    <li className={styles.rating}>RATEING:-{rating}</li>

                </ul>
            </div>
        )
    })
  return (
    <>
    <div className={styles.container}>
                <div className={showFilter ?`${styles.side}`:`${styles.hidden}`} >
                    <div className={styles.idealbox}>
                        <div className={styles.costomize}><input value="test" type="checkbox" onChange={() => handleCheckboxChange('laptops')}/>
                            <label htmlFor="" >COSTOMIZE</label><br /></div>
                        <p className={styles.hedingideal} onClick={showideal}>IDEAL FOR</p>
                        <p>All</p>
                        <div className={ideal ? `${styles.ideal}` : `${styles.hidden}`}>
                            <input value="test" type="checkbox" onChange={() => handleCheckboxChange('laptops')}/>
                            <label htmlFor="">Laptop</label><br />
                            <input value="test" type="checkbox" onChange={() => handleCheckboxChange('smartphones')}/>
                            <label htmlFor="">Mobiles</label><br />
                            <input value="test" type="checkbox" onChange={() => handleCheckboxChange('fragrances')}/>
                            <label htmlFor="">fragrances</label><br />
                            <input value="test" type="checkbox" onChange={() => handleCheckboxChange('groceries')}/>
                            <label htmlFor="">groceries</label><br />
                        </div>
                    </div>
                    <div className={styles.ocassionbox}>
                    <p className={styles.hedingideal} onClick={showocassion}>OCASSION</p>
                        <p>All</p>
                        <div className={occasion ? `${styles.ideal}` : `${styles.hidden}`}>
                            <input value="test" type="checkbox" />
                            <label htmlFor="">men</label><br />
                            <input value="test" type="checkbox" />
                            <label htmlFor="">women</label><br />
                            <input value="test" type="checkbox" />
                            <label htmlFor="">Baby & Kids</label><br />
                        </div>
                    </div>
                    <div className={styles.ocassionbox}>
                    <p className={styles.hedingideal} onClick={showwork}>WORK</p>
                        <p>All</p>
                        <div className={work ? `${styles.ideal}` : `${styles.hidden}`}>
                            <input value="test" type="checkbox" />
                            <label htmlFor="">men</label><br />
                            <input value="test" type="checkbox" />
                            <label htmlFor="">women</label><br />
                            <input value="test" type="checkbox" />
                            <label htmlFor="">Baby & Kids</label><br />
                        </div>
                    </div>
                    <div className={styles.ocassionbox}>
                    <p className={styles.hedingideal} onClick={showfabrik}>FABRIK</p>
                        <p>All</p>
                        <div className={fabrik ? `${styles.ideal}` : `${styles.hidden}`}>
                            <input value="test" type="checkbox" />
                            <label htmlFor="">men</label><br />
                            <input value="test" type="checkbox" />
                            <label htmlFor="">women</label><br />
                            <input value="test" type="checkbox" />
                            <label htmlFor="">Baby & Kids</label><br />
                        </div>
                    </div>
                    <div className={styles.ocassionbox}>
                    <p className={styles.hedingideal} onClick={showsegment}>SEGMENT</p>
                        <p>All</p>
                        <div className={segment ? `${styles.ideal}` : `${styles.hidden}`}>
                            <input value="test" type="checkbox" />
                            <label htmlFor="">men</label><br />
                            <input value="test" type="checkbox" />
                            <label htmlFor="">women</label><br />
                            <input value="test" type="checkbox" />
                            <label htmlFor="">Baby & Kids</label><br />
                        </div>
                    </div>
                    <div className={styles.ocassionbox}>
                    <p className={styles.hedingideal} onClick={showsuitable}>SUITABLE FOR</p>
                        <p>All</p>
                        <div className={suitable ? `${styles.ideal}` : `${styles.hidden}`}>
                            <input value="test" type="checkbox" />
                            <label htmlFor="">men</label><br />
                            <input value="test" type="checkbox" />
                            <label htmlFor="">women</label><br />
                            <input value="test" type="checkbox" />
                            <label htmlFor="">Baby & Kids</label><br />
                        </div>
                    </div>
                    <div className={styles.ocassionbox}>
                    <p className={styles.hedingideal} onClick={showraw}>RAW MATERIALS</p>
                        <p>All</p>
                        <div className={raw ? `${styles.ideal}` : `${styles.hidden}`}>
                            <input value="test" type="checkbox" />
                            <label htmlFor="">men</label><br />
                            <input value="test" type="checkbox" />
                            <label htmlFor="">women</label><br />
                            <input value="test" type="checkbox" />
                            <label htmlFor="">Baby & Kids</label><br />
                        </div>
                    </div>
                    <div className={styles.ocassionbox}>
                    <p className={styles.hedingideal} onClick={showpattern}>PATTERN</p>
                        <p>All</p>
                        <div className={pattern ? `${styles.ideal}` : `${styles.hidden}`}>
                            <input value="test" type="checkbox" />
                            <label htmlFor="">men</label><br />
                            <input value="test" type="checkbox" />
                            <label htmlFor="">women</label><br />
                            <input value="test" type="checkbox" />
                            <label htmlFor="">Baby & Kids</label><br />
                        </div>
                    </div>
                </div>
                <div className={styles.main}>
                    {renderlist}
                </div>
            </div>
    </>
  )
}

export default Products