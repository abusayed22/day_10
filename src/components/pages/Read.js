import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom';
import { pre_delete_data, pre_get_data } from '../../redux/action/action';
function Read() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(state => state.crud.users);
  useEffect(() => {
    dispatch(pre_get_data())
  },[users])

  const deletehandler = (id) => {
    dispatch(pre_delete_data(id))
  }
  return (
    <div>
        <div className='container' style={{width:850}}>
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Roll</th>
                <th scope="col">Name:</th>
                <th scope="col">Birth-Date</th>
                <th scope="col">Contact-Number</th>
                <th scope="col">Adress</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
          {users && users.map((obj) => 
            <tbody key={obj.id}>
                <tr>
                <th scope="row">{obj.roll}</th>
                <td>{obj.name}</td>
                <td>{obj.birth}</td>
                <td>{obj.phone}</td>
                <td>{obj.address}</td>
                <td>
                    <button onClick={() => deletehandler(obj.id)} type="button" className="btn btn-warning mr-2">Delete</button>
                    <button onClick={() => navigate(`/single/${obj.id}`)} type="button" className="btn btn-secondary">edit</button>
                </td>
                </tr>
            </tbody>
            )}
        </table>
      </div>
    </div>
  )
}

export default Read