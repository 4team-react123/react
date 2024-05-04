import { NavLink } from 'react-router-dom';

function RecycleNavbar() {

    const activeStyle = {
        backgroundColor: 'orangered'
    };

    return (
        <div>
            <ul>
                <li><NavLink to="/" style={ ({ isActive }) => isActive? activeStyle: undefined }>HOME</NavLink></li>
                <li><NavLink to="/normal" style={ ({ isActive }) => isActive? activeStyle: undefined }>일반</NavLink></li>
                <li><NavLink to="/paper" style={ ({ isActive }) => isActive? activeStyle: undefined }>종이</NavLink></li>
                <li><NavLink to="/plastic" style={ ({ isActive }) => isActive? activeStyle: undefined }>플라스틱</NavLink></li>
                <li><NavLink to="/Food" style={ ({ isActive }) => isActive? activeStyle: undefined }>음식물</NavLink></li>
                <li><NavLink to="/etc" style={ ({ isActive }) => isActive? activeStyle: undefined }>기타</NavLink></li>
            </ul>
        </div>

    );
}

export default RecycleNavbar;