
import './styles/formularioStyles.css'



const UserCard = ({ user, deleteUserById, setUpdateInfo, setIsFormClose, }) => {

    const handleDelete = ()=>{
        deleteUserById('/users', user.id)
       
    }

    const handleUpdate =()=>{
        setUpdateInfo(user)
        setIsFormClose(false)
    }

  return (
   
      <div className="card">
        <article className="content__card">
      <h2 className="card__title">{`${user.first_name} ${user.last_name}`}</h2>
      <hr className="card__hr"/>
      <ul className="card__items">
        <li className="card__list">
          <span className="card__subtitle">Correo:</span> 
          <span className="card__data">{`${user.email}`}</span>
        </li>
        <li className="card__list">
          <span className="card__subtitle">Cumpleaños:</span>
         
          <span className="card__fecha">{`${user.birthday}`}</span>
        </li>
      </ul>
      <hr className="card__hr"/>
   <div className="btn_card">
   <button className='card__btn' onClick={handleDelete}><i className='bx bx-trash'></i></button>
     <button className="card__btn update" onClick={handleUpdate}><i className='bx bx-edit'></i></button>
   </div>
    </article>
      </div>
   
  );
};

export default UserCard;
