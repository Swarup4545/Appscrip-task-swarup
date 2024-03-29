import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { selectProduct } from '../redux/actions/productAction';//this file is redux action file.
import styles from './main.module.css';//css file
const Products = ({showFilter,setShowFilter,item1}) => {
    const [ideal, setIdeal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [occasion, setOcassion] = useState(false);
    const [work, setWork] = useState(false);
    const [fabrik, setFabrik] = useState(false);
    const [segment, setSegment] = useState(false);
    const [suitable, setSuitable] = useState(false);
    const [raw, setRaw] = useState(false);
    const [pattern, setPattern] = useState(false);
    const [item,setItem] =useState([]);
    const [filtermultipel,setFiltermultipel]= useState([]);
    
    //get data from redux store using useSelectore hook.
    const products = useSelector((state) => state.allProducts.products);

    //check data is available or not
    console.log('homedata', products)

    //show and hide ideal
    function showideal() {
        setIdeal(!ideal)
    }
    //show and hide ocassion
    function showocassion(){
        setOcassion(!occasion)
    }
    //show and hide work
    function showwork(){
        setWork(!work)
    }
    //show and hide fabrik
    function showfabrik(){
        setFabrik(!fabrik)
    }
    //show and hide segment
    function showsegment(){
        setSegment(!segment)
    }
    //show and hide suitable
    function showsuitable(){
        setSuitable(!suitable)
    }
    //show and hide eaw matterial
    function showraw(){
        setRaw(!raw)
    }
    //show and hide pattern
    function showpattern(){
        setPattern(!pattern)
    }
    // we have call Dispatch hook for storing data in redux store.
    const dispatch = useDispatch();
    // our data from async fnction so we need handle that so we useEffect when data come or change in item that time only store data in redux store. 
    useEffect(()=>{
        dispatch(selectProduct(item));
    },[item])
    
    //when we select filter from toggle that time set data 
    useEffect(()=>{
        setItem(item1)
    },[item1])

    useEffect(()=>{
        if(products.length>0)
        {
            setLoading(!loading)
        }
    },[products])
    console.log('loading',loading)
    useEffect(() => {
        setItem(products); // Set item state with the products
    }, [products]); 
    

    //here we handle multiple filtering when user click on any option of  filter that time its add in filtermultipel array and that filter category alredy present then we remove that category.
    function handleCheckboxChange(cat){
        const isCategoryPresent = filtermultipel.includes(cat);

      // If the category is present, remove it; otherwise, add it
      setFiltermultipel((prevstate) =>
        isCategoryPresent
          ? prevstate.filter((val) => val !== cat)
          : [...prevstate, cat]
      );
    };
    //here we filter categories which we stored in our filtermultipel array with item menas our main data.
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
    //execute only filtermultipel change
    useEffect(()=>{
        filterItems();
      },[filtermultipel])
      

    console.log("filtering",filtermultipel)
    //here we dispaly all data from api using map method. 
    const renderlist = item.map((product, index) => {
        //here we destructure
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
    {/*here we create Employed conditional rendering in React to dynamically display components based on the availability of API data*/}
    {loading? (<div className={styles.container}>
                {/*here we used conditional rendring and string interpolation*/}
                <div className={showFilter ?`${styles.side}`:`${styles.hidden}`} >
                    <div className={styles.idealbox}>
                        <div className={styles.costomize}><input value="test" type="checkbox" onChange={() => handleCheckboxChange('laptops')}/>
                            <label htmlFor="" >COSTOMIZE</label><br /></div>
                        <p className={styles.hedingideal} onClick={showideal}>IDEAL FOR</p>
                        <p>All</p>
                        {/*here we used conditional rendring and string interpolation*/}
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
                        {/*here we used conditional rendring and string interpolation*/}
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
                       {/*here we used conditional rendring and string interpolation*/}
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
                        {/*here we used conditional rendring and string interpolation*/}
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
                       {/*here we used conditional rendring and string interpolation*/}
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
                        {/*here we used conditional rendring and string interpolation*/}
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
                        {/*here we used conditional rendring and string interpolation*/}
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
                        {/*here we used conditional rendring and string interpolation*/}
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
                    {/*here we add cards from map api data.*/}
                    {renderlist}
                </div>
            </div>):(<div className={styles.loadingmain}><p className={styles.loading}>Loading</p></div>)
    }        
    </>
  )
}

export default Products