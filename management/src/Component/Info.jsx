import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// used for click one button u can go to next url
import './inv.css'
const Info = () => {
const [name, setname] = useState("")
const [order, setorder] = useState("")
const [issue, setissue] = useState("")
const [place, setplace] = useState("")
const [depart,setdepart] =useState("")
const [data, setdata] = useState("")

const[mainTask,setmainTask] = useState([])



const submitHandler =(e)=>{
  e.preventDefault();
  setmainTask([...mainTask,{name,order,issue,place,depart}])
  setname("")
  setdepart("")
  setissue("")
  setorder("")
  setplace("")
}
const handleedit=()=>{}

const deleteHandler =(i)=>{
  let copytask =[...mainTask]
  copytask.splice(i,1) //removed through index
  setmainTask(copytask)
  }
 
 let renderTask =<h2>-</h2>
  if(mainTask.length>0){
  renderTask= mainTask.map((t,i)=>{
    return(
      <li key={i} className='flex '>
       
      <table className='flexe'>

        <tr>
        <td className='des'>{t.name}</td>
        
        < td className='des'>{t.order}</td>
        
        <td className='des'>{t.issue}</td>
        <td className='des'>{t.place}</td>
        <td className='des'>{t.depart}</td>
      <button onClick={handleedit(i)}>Edit</button>
      <button onClick ={()=>{
        deleteHandler(i)
      }} className='dele'>Delete</button>
      </tr>
       
       </table> 
      </li>
     
    )
    
  })

}


  return (
    <>
    <div className='Inf'>
    <div className='info'>
    <h1>Information Technology</h1>
    <p>Manager: Vinayak Pise
    <br></br>
    Number:4545454545
    </p>
    </div>
    <div className='text'>
    <form onSubmit={submitHandler}>
     <input type="text" id="elementName" name="elementName" placeholder="Enter the element name"
     value={name}
     onChange={(e)=>{
      setname(e.target.value)
     }}/>
  
   <input type="text" id="orderId" name="orderId" placeholder="Enter order ID"
  value={order}
  onChange={(e)=>{
   setorder(e.target.value)}}/>
  
  <input type="text" id="orderPlaceDate" name="orderPlaceDate" placeholder="Enter order place date"
  value={issue}
     onChange={(e)=>{
      setissue(e.target.value)}}/>
  
  <input type="text" id="issueDate" name="issueDate" placeholder="Enter issue date"
  value={place}
     onChange={(e)=>{
      setplace(e.target.value)}}/>
  
  <input type="text" id="department" name="department" placeholder="Enter department"
  value={depart}
     onChange={(e)=>{
      setdepart(e.target.value)}}/>
  
  <button type='Submit'>Submit</button>
</form>

    </div>
    <div className='ren'>
      <tr>
      <ul>{renderTask}</ul>
      </tr>
    </div>
    </div>
    </>
  )
}

export default Info