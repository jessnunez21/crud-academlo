
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [isFormClose, setIsFormClose] = useState(true)


const urlBase = 'https://users-crud.academlo.tech/'

const [  users, getAllUsers, createNewUser, deleteUserById, updateUserById ] = useFetch(urlBase)

useEffect(() => {
 getAllUsers('/users')
}, [])

const handleOpenForm =()=>{
  setIsFormClose(false)
}

  return (
    <>
    
    <div className="hero">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4169e1" fillOpacity="1" d="M0,224L80,197.3C160,171,320,117,480,128C640,139,800,213,960,224C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
   
    </div>
    <div className='header'>
      <h1 className='header__title'>User Manager</h1>
     <div className='header__section'>
     <span className='header__subtitle'>Create a new user</span>
      <button className='header__btn' onClick={handleOpenForm }>Open Form</button>
     </div>
      <div className={`form__container ${isFormClose && 'form__close'}`}>
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        setIsFormClose={setIsFormClose}
        />
      </div>
        <div className='card'>
          {
            users?.map(user => (
              <UserCard
                key={user.id}
                user={user}
                deleteUserById={deleteUserById}
                setUpdateInfo={setUpdateInfo}
                setIsFormClose={setIsFormClose}
                
              />
            ))
          }
          
        </div>
    </div>
   
    </>
  )
}

export default App
