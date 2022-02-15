 import './App.css';
import {React,useState,useEffect} from "react";
import Multiselect from "multiselect-react-dropdown"

function App() {
const initStat ={username:"" ,primary_products:"",secondary_product_service_offered:"",business_area:"",establishment_area:"",customers:"",suppliers:"",age_of_establishment:""};



const initOptionStat=()=>{
  const value="";
  return value;
}
const[value,setValue] = useState(initOptionStat);
const[offered_to,setOffered_to] = useState(initOptionStat);
const [skill_training,setSkill_training] = useState((initOptionStat));
const [business_locality,setBusiness_locality] = useState(initOptionStat);
const [infra_ownership,setInfra_ownership] = useState(initOptionStat);

const [market_research,setMarket_research] = useState(initOptionStat);

const [primary_market,setPrimary_market] = useState(initOptionStat);
const [seasonality,setSeasonality] = useState(initOptionStat);
const [competition,setCompetition] = useState(initOptionStat);
const optionHandleChange=(e)=>{
setValue(e.target.value);
console.log(value);
}

const optionHandleChange1=(e)=>{
  setOffered_to(e.target.value);
  console.log(offered_to);
}

const optionHandleChange2=(e)=>{
setSkill_training(e.target.value);
console.log(skill_training);
}
const optionHandleChange3=(e)=>{
setBusiness_locality(e.target.value);
console.log(business_locality);
}

const optionHandleChange4=(e)=>{
  setInfra_ownership(e.target.value)
}
const optionHandleChange5=(e)=>{
  setMarket_research(e.target.value);

}
const optionHandleChange6=(e)=>{
  setPrimary_market(e.target.value);

}
const [formvalue,setFormValue] = useState(initStat);
const [formError,setFormError] = useState({});
const [isSubmit,setSubmit] = useState(false);
const data =["the entrepreneur's experience in this field",
"innovative product/service",
  "high profit margin",
  "high growth potential",
  "Superior customer support",
  "quality and affordable products/service",
  "high demand in the target market",
  "abundant supply of raw materials",
  "wide range of products/services",
  "robust value-chain of the business",
"frequency of customer visits"
]
// const location=[
//   {data:""}]
const market=["Distribution of marketing material(Pamphlets/flyers)","storefront/business branding","Seasonal discountsand offers","Cross-promotions","Digital Marketing","Word of mouth"]
const scaleUp1=["Increasing the variety of product/service offering.","expanding the current offering to other geographies","Opening more oulets","growing the scale of operations","building value-chain integration","other allied revenue streams"]

const locations=["Nearness to market","Good Footfall","Nearness to source of raw materials","Nearness to targeted customer demographics","Lesser competition around","Access to permit/license of operate","Nearness to suppliers","Affordability","No rental overheads","others such factors"]

 const [location,setLocation]=useState(locations);
 const [reasonLocation,setreasonLocation]=useState([]);


const [scaleup_potential,setScaleup_potential] =useState(scaleUp1);
const [scale_avenues,setScaleUp] = useState([]);
const[marketstate,setMarketstate] = useState(market);



const[market_search,setMarket] = useState([])
const [state,setState]=useState(data);
const [select,setSelect]= useState([]);



const handleChange=(e)=>{
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
;
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
<select value={value} onChange={optionHandleChange} name="Business_stage">
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
  <select id="offered" name="offered_to" value={offered_to} onChange={optionHandleChange1}>
  <option></option>
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
   <select id="skill"  name="Skill"  value={skill_training} onChange={optionHandleChange2}>
   <option value="No formal skill training">No formal skill training</option>
   <option value="Has formal skill training and certificate">Has formal skill training and certificate</option>
</select>
</div>

<div className="field">
  <label>Unique Selling Proposition</label>
   <Multiselect isObject={false} onRemove={(e)=> {console.log(e)}} onSelect={(e)=> {setSelect([...select,e]) }}  options={state}  />
   </div>
 <h1>Location</h1>
 <div className="field">
    <label>Establishment type</label>
   <select id="type" value={business_locality} onChange={optionHandleChange3}>
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
    <select id="Locality" name="Locality of business" value={business_locality} onChange={optionHandleChange3}>
<option value="Urban">Urban</option>
<option value="Rural">Rural</option>
<option value="Semi-urban">Semi-urban</option>
<option value="Slum">Slum</option>
</select>
</div>
<div className="field">
  <label>Ownership of infrastructure</label>
    <select id="ownership" name="Infra-Ownership" value={infra_ownership} onChange={optionHandleChange4}>
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
  <Multiselect isObject={false} onRemove={(e)=> {console.log(e)}} onSelect={(e)=> {setreasonLocation([e]) }}  options={location} />
 </div>


<h1>Target Market</h1>

<div className="field">
  <label>Market research</label>
    <select name="market-research" value={market_research} onChange={optionHandleChange5}>
      <option value="Not Conducted">Not Conducted</option>
      <option value="Market research has been conducted">Market research has been conducted</option>
      
    </select>
</div>
<div className="field">
  <label>Primary market</label>
    <select name="primary-market" value={primary_market} onChange={optionHandleChange6}>
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
    <select name="seasonality" value={seasonality} onChange={(e)=>setSeasonality(e.target.value)}>
      <option value="Consistent sales across all seasons">Consistent sales across all seasons</option>
      <option value="Higher sales in festive seasons">Higher sales in festive seasons</option>
      <option value="High sales in cropping/cultivation season">High sales in cropping/cultivation season</option>
      <option value="High sales in peak seasons,etc">High sales in peak season,etc</option>     
    </select>
</div>

<div className="field">
  <label>Competition</label>
  <select id="competition" name="Competition" value={competition} onChange={(e)=>setCompetition(e.target.value)}>
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
  <Multiselect isObject={false} onRemove={(e)=> {console.log(e)}} onSelect={(e)=> {setMarket([...market_search,e]) }}  options={marketstate}  />
</div>

<div className="field">
  <label>Aveneus of scaling up in future</label>
  <Multiselect isObject={false} onRemove={(e)=> {console.log(e)}} onSelect={(e)=> {setScaleUp([...scale_avenues,e]) }}  options={scaleup_potential} />
</div>
{/* <button className="fluid ui button blue" >Submit</button> */}
</div>
     </form>
    </div>
    <div className="container-right">
    <p> <span>{formvalue.username}</span>- is looking to <span>{value}</span>their business of business_idea</p> 
    <p>This enterprise has been operational since <span>{formvalue.age_of_establishment}</span>years and has been serving its customers since then</p>     
<p>This establishment offers products/services like <span>{formvalue.primary_products}</span> to <span>{offered_to}</span></p>
<p>In addition, the enterprise shall also be invloved in <span>{formvalue.secondary_product_service_offered}</span></p>
<p>other products of the enterprise shall include in<span>{formvalue.processed_products}</span></p>
<p><span>{formvalue.username}</span> has relevant experience of <span>{formvalue.relevant_experience}</span> years in the field </p>
<p>The entrepreneur <span>{skill_training}</span> in this field of work</p>
<p>The enterprise is uniquely positioned because of its{select.map((e,i)=>{
  return (
<>
<span><p key={i}>{e}</p></span>
</>
)})}</p>
<p>The <span>{business_locality}</span>is located in  area of<span>{formvalue.business_area}</span> in a <span>{infra_ownership}</span> property</p>
<p>The size of the establishment is<span>{formvalue.establishment_area}</span>  sq ft</p>
<p>This locality is selected because of {reasonLocation.map((e,i)=>{return(
  <>
  <span><p key={i}>{e}</p></span>
  </>
)})}</p>
<p><span>{market_search}</span> and the range of products and target market has been identified after that.
<p>The enterprise shall focus on offering its products/services to <span>{primary_market}</span> markets</p>

<p>Our customers shall include -<span>{formvalue.customers}</span> </p>

<p>The nature of the business is such that we expect <span>

{seasonality}</span></p>.
<p>Regarding competition, there are <span>{competition}</span>.</p>

<p>The enterprise shall procure goods/raw materials from <span>{formvalue.suppliers}</span></p>.
<p>Our marketing avenues to reach the targeted customers shall include- {market_search.map((e,i)=>{return(
  <>
    <span><p key={i}>{e}</p></span>
  </>
)})}.</p>
<p>The various foreseeable aveneus of scaling up and growing the business in the foreseeable future include {scale_avenues.map((e,i)=>{return(
  <>
   <span> <p key={i}>{e}</p></span>
  </>
)})}
</p></p>



</div>
    </div>
    );
}

export default App;
