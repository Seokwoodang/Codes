import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const menulist = [
        '여성',
        'Divided',
        '남성',
        '신생아/유아',
        '아동',
        'H&M Home',
        'Sale',
        '지속가능성'
    ];
    return (
        <div className='controltower'>
            <div>
                <div class="login-button">
                    <FontAwesomeIcon icon={faUser}/>
                    <div>로그인</div>
                </div>
            </div>
            <div className="nav-section">
                <img
                    width={50}
                    src="https://w.namu.la/s/76f0c11b86089e4d43eafcc5baa3d6d8b2edb5cd6e75e744126223f7c4519d4162c62a93885897fcbb105c899c800f24731f64e1793109cbbbd2115db9e3598773a71b4b4921502603c2f729afac99afb45c9de897d62d9fb761a71fc0480359"/>
            </div>
            <div className='navbox'>
                <div className='menu-area'>
                    <ul className='menu-list'>
                        {
                            menulist.map(menu =>< li > {
                                menu
                            }</li>)
                        }
                    </ul>
                </div>
                <div className='searchbox'>

                    <FontAwesomeIcon icon={faSearch}/>
                    <input placeholder='제품검색' className='search' type="text"/>

                </div>
            </div>
        </div>
    )
}

export default Navbar