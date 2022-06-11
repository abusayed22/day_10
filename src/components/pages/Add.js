import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { pre_add_data } from '../../redux/action/action'


function Add() {
  const dispatch = useDispatch()
  const [add,setAdd] = useState({
        name:'',
        roll:'',
        birth:'',
        phone:'',
        address:''
  })

  const addhandler = () => {
    dispatch(pre_add_data(add));
    setAdd({
        name:'',
        roll:'',
        birth:'',
        phone:'',
        address:''
    })
  }
  return (
    <div>
      <center className='mt-2'><h2>Add student..</h2></center>
        <div style={{width:400,margin:'0 auto'}} className='mt-5'>
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Student Name" 
              aria-label="Username"
              value={add.name}
              onChange= {(e) => setAdd({...add,name:e.target.value})}
            />
          </div>
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Roll no" 
              aria-label="Username"
              value={add.roll}
              onChange= {(e) => setAdd({...add,roll:e.target.value})}
            />
          </div>

          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Birth-date" 
              aria-label="Username"
              value={add.birth}
              onChange= {(e) => setAdd({...add,birth:e.target.value})}
            />
          </div>

          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Phone" 
              aria-label="Username"
              value={add.phone}
              onChange= {(e) => setAdd({...add,phone:e.target.value})}
            />
          </div>

          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Address" 
              aria-label="Username"
              value={add.address}
              onChange= {(e) => setAdd({...add,address:e.target.value})}
            />
          </div>

          <button onClick={() => addhandler()} type="button" className="btn btn-primary">Add</button>
        </div>
    </div>
  )
}

export default Add