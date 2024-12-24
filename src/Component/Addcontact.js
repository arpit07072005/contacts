import React, { useState } from 'react'

const Addcontact = (props) => {
  const [initial, setInitial]= useState({name:"",email:""})
  function update(e){
    if(e.target.name=="name"){
      setInitial({...initial,name:e.target.value}) 
    }
    else{
      setInitial({...initial,email:e.target.value}) 
    }
  }
  function handleadd(e){
if (initial.name==="" ||initial.email===""){
  alert("please fill all the data");
}
else{

  props.additems(initial);
  setInitial({name:"",email:""})
}
  }
  return (
    <div>
      <h2>Add Contact</h2>
      <form action="">
        <div className='containerform'>
      <label htmlFor="">Name</label>
      <input type="text" placeholder='enter name' className='input' name='name' value={initial.name} onChange={update}/>
      </div>
      <div className='containerform'>
      <label htmlFor="">Email</label>
      <input type="text" placeholder='enter Email' name='email' value={initial.email} onChange={update}/>
      </div>
      </form>
      <button onClick={handleadd}>Add contact</button>
    </div>
  )
}

export default Addcontact
