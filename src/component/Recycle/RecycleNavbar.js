import { NavLink } from 'react-router-dom';
import itemStyle from './MenuItem.module.css';

function RecycleNavbar() {

    const activeStyle = {
        backgroundColor: '#3e5d4d', // 배경색 초록색
        color: 'white' // 글자색 하얀색
    };

    return (
        <div className={itemStyle.flex}>
            <ul className='pdTop'>
                <li>
                    <NavLink to="/nomal" activeStyle={activeStyle}>
                        <button style={window.location.pathname === '/nomal' ? activeStyle : null}>일반</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/paper" activeStyle={activeStyle}>
                        <button style={window.location.pathname === '/paper' ? activeStyle : null}>종이</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/plastic" activeStyle={activeStyle}>
                        <button style={window.location.pathname === '/plastic' ? activeStyle : null}>플라스틱</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/etc" activeStyle={activeStyle}>
                        <button style={window.location.pathname === '/etc' ? activeStyle : null}>기타</button>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default RecycleNavbar;