import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { pre_edit_update, pre_single_state } from '../../redux/action/action';
import { useSelector } from 'react-redux/es/exports';

function Single() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.crud.user)
    
    useEffect(() => {
        dispatch(pre_single_state(id))
    },[])

    const [edit,setEdit] = useState({
        name:'',
        roll:'',
        birth:'',
        phone:'',
        editress:''
    })
    useEffect(()=> {
        if(user) {
            setEdit({...edit && user})
        }
    },[user])

    const edithandler = () => {
        dispatch(pre_edit_update(id,edit))
        navigate('/read')
    }
  return (
    <div>
        
            <center className='mt-2'><h2>edit student..</h2></center>
            <div style={{width:400,margin:'0 auto'}} className='mt-5'>
            <div className="input-group mb-3">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Student Name" 
                aria-label="Username"
                value={edit.name ||""}
                onChange= {(e) => setEdit({...edit,name:e.target.value})}
                />
            </div>
            <div className="input-group mb-3">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Roll no" 
                aria-label="Username"
                value={edit.roll ||""}
                onChange= {(e) => setEdit({...edit,roll:e.target.value})}
                />
            </div>

            <div className="input-group mb-3">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Birth-date" 
                aria-label="Username"
                value={edit.birth ||""}
                onChange= {(e) => setEdit({...edit,birth:e.target.value})}
                />
            </div>

            <div className="input-group mb-3">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Phone" 
                aria-label="Username"
                value={edit.phone ||""}
                onChange= {(e) =>  setEdit({...edit,phone:e.target.value})}
                />
            </div>

            <div className="input-group mb-3">
                <input 
                type="text" 
                className="form-control" 
                placeholder="editress" 
                aria-label="Username"
                value={edit.address ||""}
                onChange= {(e) => setEdit({...edit,address:e.target.value})}
                />
            </div>

            <button onClick={() => edithandler()} type="button" className="btn btn-primary">Update</button>
            </div>
    </div>
  )
}

export default Single