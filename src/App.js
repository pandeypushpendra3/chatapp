 import './App.css';
import {React,useState,useEffect} from "react";
import {multiSelect} from "multiselect-react-dropdown"

function App() {
const initStat ={username:"",email:"", password:"" ,primary_products:"",secondary_product_service_offered:"",business_area:"",establishment_area:"",customers:"",suppliers:"",age_of_establishment:""};
const [formvalue,setFormValue] = useState(initStat);
const [formError,setFormError] = useState({});
const [isSubmit,setSubmit] = useState(false);


const handleChange=(e)=>{
//  console.log(e.target.value);

 const {name,value} = e.target;
 setFormValue({...formvalue,[name]:value})
console.log(formvalue);
}
const handleSubmit=(e)=>{
e.preventDefault();
setFormError(validate(formvalue));
setSubmit(true);
}
useEffect(()=>{
  console.log(formError);
  if(Object.keys(formError).length===0 && isSubmit){
console.log(formvalue);
  }
},[formError])
const validate=(formvalue)=>{
const error ={};

if(!formvalue.username){
  error.username="Username is required";

}
if(!formvalue.email){
  error.email="Please Enter a valid Email";

}
if(!formvalue.password){
  error.password="Password is required";

}
else if(formvalue.password<4){
  error.password="Password must be contained more than 4 characters";

}
else if(formvalue.password>10){
  error.password="Password cannot be exceed more than 10 characters";

}
return error
}

return (
    <div className="main-container">
 <div className="container-left">
    
    <form onSubmit={handleSubmit}>
  <h1>Business form</h1>
  <div className="ui divider"></div>
  <div className="ui form">
  <div className="field">
    <label>Name</label>
    <input type="text" name="username" placeholder="Name" value={formvalue.username} onChange={handleChange}/>
  </div>
  <p>{formError.username}</p>
  <div className="field">
    <label>Stage of business</label>
<select id="stage" name="Business_stage">
<option value="Start-up">Start-up</option>
<option value="Scale-up">Scale-up</option>
</select>

    {/* <input type="email" name="email" placeholder=""
      value={formvalue.email} onChange={handleChange}
    /> */}
  </div>
  {/* <p>{formError.email}</p> */}
  <div className="field">
  <label>Age of establishment</label>
    <input type="number" min="1" max="100" name="age_of_establishment" value={formvalue.age_of_establishment} placeholder="Age of establishment"  onChange={handleChange}/>
</div>
 <div className="field">
  <label>Primary Products/Services offfered</label>
    <input type="text" name="primary_products" value={formvalue.primary_products} placeholder="Primary Products/Services offfered"  onChange={handleChange}/>
</div>
<div className="field">
  <label>Offfered to</label>
  <select id="offered" name="Offered to">
<option value="End customers">End customers</option>
<option value="Wholesalers">Wholesalers</option>
<option value="Distributors">Distributors</option>
<option value="Retailers">Retailers</option>
</select>
</div>
 <div className="field">
  <label>Secondary Products/Services offfered</label>
    <input type="text" placeholder="Secondary Products/Services offfered" name="secondary_product_service_offered" value={formvalue.secondary_product_service_offered} onChange={handleChange}/>
</div>
<div className="field">
  <label>Processed Products</label>
    <input type="text" placeholder="Processed Products"  name="processed_products" value={formvalue.processed_products} onChange={handleChange}/>
</div>
<div className="field">
  <label>Years of relevant experience in this field</label>
    <input type="number" name="relevant_experience" value={formvalue.relevant_experience} placeholder="Relevant Experience"  onChange={handleChange}/>
</div>
<div className="field">
  <label>Skill training</label>
   <select id="skill"  name="Skill" >
   <option value="No formal skill training">No formal skill training</option>
   <option value="Has formal skill training and certificate">Has formal skill training and certificate</option>
</select>
</div>

<div className="field">
  <label>Unique Selling Proposition</label>
   <select id="skill"  name="usp" multiple>
   <option value="the entrepreneur's experience in this field">the entrepreneur's experience in this field</option>
   <option value=" innovative product/service"> innovative product/service</option>
   <option value="high profit margin">high profit margin</option>
   <option value="high growth potential">high growth potential</option>
   <option value="Superior customer support">Superior customer support</option>
   <option value="quality and affordable products/service">quality and affordable products/service</option>
   <option value="high demand in the target market">high demand in the target market</option>

   <option value="abundant supply of raw materials">abundant supply of raw materials</option>
   <option value="wide range of products/services">wide range of products/services</option>
   <option value="robust value-chain of the business">robust value-chain of the business</option>
   <option value="frequency of customer visits">frequency of customer visits</option>
</select>
</div>
 <h1>Location</h1>
 <div className="field">
    <label>Establishment type</label>
   <select id="type">
     <option value="Factory">Factory</option>
     <option value="Mill">Mill</option>
     <option value="Workshop">Workshop</option>
     <option value="Boutique">Boutique</option>
     <option value="Vehicle">Vehicle</option>
     <option value="Center">Center</option>
     <option value="Store">Store</option>
     <option value="Farm">Farm</option>
     <option value="Plant">plant</option>
     <option value="Processing Unit">Processing Unit</option>
     <option value="Shop">Shop</option>
     <option value="Vending cart">Vending cart</option>
     <option value="Manufacturing unit">Manufacturing unit</option>
   </select>
  </div>

  <div className="field">
  <label>Name of the area</label>
    <input type="text" name="business_area" 
    value={formvalue.business_area} placeholder="Business area" onChange={handleChange} />
</div>
<div className="field">
  <label>Locality of business</label>
    <select id="Locality" name="Locality of business">
<option value="Urban">Urban</option>
<option value="Rural">Rural</option>
<option value="Semi-urban">Semi-urban</option>
<option value="Slum">Slum</option>
</select>
</div>
<div className="field">
  <label>Ownership of infrastructure</label>
    <select id="ownership" name="Infra-Ownership">
<option value="Rented">Rented</option>
<option value="Leased">Leased</option>
<option value="Self-owned">Self-owned</option>
</select>
</div>
<div className="field">
  <label>Establishment area (in square feet)
  <br></br>(Enter 0 if the establishment area is irrelevant)</label>
  <input type="number" 
  name="establishment_area"
   value={formvalue.establishment_area} placeholder="Establishment area" onChange={handleChange}/>
</div>

<div className="field">
  <label>Reason for selecting this location</label>

  <select name="reason for location">
    <option value="Nearness to market">Nearness to market</option>
    <option value="Good Footfall">Good Footfall</option>
    <option value="Nearness to source of raw materials">Nearness to source of raw materials</option>
    <option value="Nearness to targeted customer demographics">Nearness to target customer demographics</option>

<option value='Lesser competition around'>Lesser competition around</option>
<option value='Access to permit/license of operate'>Access to permit/license of operate</option>
<option value="Nearness to suppliers">Nearness to suppliers</option>
<option value="Affordability">Affordability</option>
<option value="No rental overheads">No rental overheads</option>
<option value="others such factors">others such factors</option>
</select>
</div>


<h1>Target Market</h1>

<div className="field">
  <label>Market research</label>
    <select name="market-research" id="market-research">
      <option value="Not Conducted">Not Conducted</option>
      <option value="Market research has been conducted">Market research has been conducted</option>
      
    </select>
</div>
<div className="field">
  <label>Primary market</label>
    <select name="primary-market" id="primary-market">
      <option value="Local">Local</option>
      <option value="Regional">Regional</option>
      <option value="National">National</option>
      <option value="International">International</option>      
    </select>
</div>
<div className="field">
  <label>Customers</label>
  <input type="text" name="customers" value ={formvalue.customers} placeholder="Customers" onChange={handleChange}/>
   
</div>
<div className="field">
  <label>Seasons of high sales</label>
    <select name="seasonality" id="seasonality">
      <option value="Consistent sales across all seasons">Consistent sales across all seasons</option>
      <option value="Higher sales in festive seasons">Higher sales in festive seasons</option>
      <option value="High sales in cropping/cultivation season">High sales in cropping/cultivation season</option>
      <option value="High sales in peak seasons,etc">High sales in peak season,etc</option>     
    </select>
</div>

<div className="field">
  <label>Competition</label>
  <select id="competition" name="Competition" >
      <option value="No similar good/service provider in this locality">No similar good/service provider in this locality</option>
      <option value="Only a few similar goods/service providers in this locality">Only a few similar goods/service providers in this locality</option>
      <option value="Many similar good/service providers in this locality">Many similar good/service providers in this locality</option>

  </select>
</div>

<div className="field">
<label>Suppliers</label>
<input type="text" name="suppliers" value={formvalue.suppliers} placeholder="Suppliers" onChange={handleChange}/>
</div>

<div className="field">
  <label>Market avenues</label>
    <select name="Market avenues" id="Market-avenues" multiple>
      <option value="Distribution of marketing material(Pamphlets/flyers)">Distribution of marketing material(Psticks/flyers)</option>
      <option value="storefront/business branding">storefront/business branding</option>
      <option value="Seasonal discountsand offers">Seasonal discountsand offers</option>
      <option value="Cross-promotions">Cross-promotion</option>      
      <option value="Digital Marketing">Digital Marketing</option>
      <option value="Word of mouth">Word of mouth</option>
    </select>
</div>
<div className="field">
  <label>Market avenues</label>
    <select name="Market avenues" id="Market-avenues" multiple>
      <option value="Increasing the variety of product/service offering."></option>
      <option value="expanding the current offering to other geographies">expanding the current offering to other geographies</option>
      <option value="Opening more oulets">Opening more outlets</option>
      <option value="growing the scale of operations">growing the scale of operations</option>      
      <option value="building value-chain integration">building value-chain integration</option>
      <option value="other allied revenue streams">other allied revenue streams</option>
    </select>
</div>
{/* <button className="fluid ui button blue" >Submit</button> */}
</div>
     </form>
    </div>
    <div className="container-right">
    <p> {formvalue.username}----- is looking to {/*{business_stage} */}their business of {/*{business_idea}*/}</p> 
    <p>This enterprise has been operational since {formvalue.age_of_establishment}years and has been serving its customers since then</p>     
<p>This establishment offers products/services like {formvalue.primary_products} to {/*{$offered_to}*/}</p>
<p>Other products of the enterprise shall include-{/*{processed_}*/}</p>
<p>In addition, the enterprise shall also be invloved in {formvalue.secondary_product_service_offered}</p>
<p>other products of the enterprise shall include in{formvalue.processed_products}</p>
<p>{formvalue.username} has relevant experience of {formvalue.relevant_experience} years in the field </p>
<p>The entrepreneur {/*{skill_training}*/} in this field of work</p>
<p>The enterprise is uniquely positioned because of its</p>
<p>The {/*{establishment_type}*/} is located in {/*{business_locality}*/} area of{formvalue.business_area} in a {/*{infra_ownership}*/} property</p>
<p>The size of the establishment is{formvalue.establishment_area}sq ft</p>
<p>This locality is selected because of {/*{reason_for_location}*/}</p>
<p>{/*{market_research}*/} and the range of products and target market has been identified after that.<br/>The enterprise shall focus on offering its products/services to {/*{primary_market}*/}markets<br/>Our customers shall include -{formvalue.customers}<br/>The nature of the business is such that we expect {/*{$seasonality}*/}.Regarding competition, there are {/*{$competition}*/}.The enterprise shall procure goods/raw materials from {formvalue.suppliers}.Our marketing avenues to reach the targeted customers shall include- {/*{$marketing_avenues}*/}.The various foreseeable aveneus of scaling up and growing the business in the foreseeable future include {/*{scaleup_potential}*/}
</p>



</div>
    </div>
    );
}

export default App;
