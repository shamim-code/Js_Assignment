import  { useEffect, useState } from 'react'
import Menu from '../Components/Menu'
import Card from '../Components/Card';
import Search from '../Components/search';
import "../Pages/mainContent.css";
import "../Components/search.css"
import Footer from '../Components/Footer';

export default function Home() {
    const [pros, setProducts]= useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => setProducts(json.products))
    },[])


    console.log(pros);
    
  return (
    <div>
       <Menu />
       <br /><br />

       
      <div className="searchContainer">
      <Search />
      </div>
       <div className='container'>
       {
        pros.map( pro => <Card product={pro} />)
       }
       </div>

       <Footer />
    </div>
  )
}
