import { useEffect, useState } from 'react';
import './App.css';
import Addcontact from './Component/Addcontact';
import Heading from './Component/Heading';
import Contactlist from './Component/Contactlist';
import uuid4 from 'uuid4';

function App() {
  const key="contact"
  const [transfer,setTransfer]=useState(()=>{
   return JSON.parse(localStorage.getItem(key))
  ||[]});
useEffect(()=>{
localStorage.setItem(key,JSON.stringify(transfer));
},[transfer])

  function addfn(data){
    setTransfer([...transfer,{id: uuid4(),data}]);
  }
  function handledelete(id){
const afterdelete=transfer.filter((val)=>{
  return val.id!==id;
})
setTransfer(afterdelete)
  }
  return (
    <>
    <Heading/>
    <Addcontact additems={addfn}/>
    <Contactlist trans={transfer} deleted={handledelete}/>
    </>
  );
}

export default App;
