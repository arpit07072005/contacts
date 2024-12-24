import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const Contactlist = (props) => {
  const {trans,deleted}= props
    const printcontact=trans.map((item)=>{
        return(
            <div className='containerlist'>
                <div className='name'>
                    <h3>{item.data.name}</h3>
                </div>
                <div>
                    {item.data.email}
                </div>
                <span onClick={()=>deleted(item.id)} className='delete'><DeleteIcon/></span>
            </div>
        )
    })
  return (
    <div>
      <h2>Contactlist</h2>
      <div>{printcontact}</div>
      
    </div>
  )
}

export default Contactlist
