import Quote from "./Quote";
import "../utils/styles.css";
import React, { useState } from 'react';
import { colorRan, numQuoteRan } from "../utils/random";
 
 const QuoteBox = () => {
     
    const [{quote ,author}, setQuote] = useState(numQuoteRan)
    const [color,setColor] = useState(colorRan)
        
   
        document.body.style = `background: ${color}  `;
       const style = {
           color:`${color}`,
           
       }
     return <div >

         <div className="app " style={style}>
             
             <Quote  quote={quote} name={author } color={color} setColor={setColor} setQuote={setQuote}/>
         </div>
       
        </div>
 }
  
 export default QuoteBox;