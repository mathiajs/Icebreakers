import React from 'react'
import { useAuth } from '../../AuthContext'
import { Link } from 'react-router-dom';
import './MinSide.css'

const MinSide = () => {
  const { logout , isAdmin } = useAuth();

  const handleLogout = () => {
    logout();
  }

  return (
    <>
      <div className='MPContainer'> 
        <div className='TitleDiv'> 
          <h1>
            Min Side
          </h1>
        </div>
        <div className='MyPageDiv'>
          <div className='FavoritesDiv'>
            <div className='HeaderInDiv'>
              <h1>
                Favoritter <span role="img" aria-label="Heart">❤️</span>
              </h1>
            </div>
          </div>
          <div className='QueueDiv'>
            <div className='HeaderInDiv'>
            <h1>
              Kø
            </h1>
            </div>
          </div>
        </div>
        <div className='LogoutDiv'>
          <button className= 'LogoutButton' type='button' onClick={handleLogout}>Logg ut</button>
        </div>

        {isAdmin ? (
        <div className='RapportedUsersDiv'>
          <div className='HeaderInDiv'>
            <h1>Rapporterte spillere</h1>
          </div>
        </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  )
}

export default MinSide