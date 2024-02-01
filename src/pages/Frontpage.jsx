import React from 'react'
import { Link } from 'react-router-dom'

const Frontpage = () => {
  return (
    <div className="Container">
            <div className="Wrapper">
                <span className="logo">Chat Space</span>
                <span className="tittle">WELCOME</span>
                <form >
                    <Link className='button' to='/login'><button>Masuk</button></Link>
                    <Link to='/register'><button>Daftar</button></Link>
                    
                </form>
            </div>
        </div>
  )
}

export default Frontpage