import { NavLink } from 'react-router-dom';

function RecycleNavbar() {

    const activeStyle = {
        backgroundColor: '#3e5d4d', // 배경색 초록색
        color: 'white' // 글자색 하얀색
    };

    return (
        <div className="flex">
            <ul>
                <li>
                    <NavLink to="/" activeStyle={activeStyle}>
                        <button style={window.location.pathname === '/' ? activeStyle : null}>HOME</button>
                    </NavLink>
                </li>
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
                    <NavLink to="/food" activeStyle={activeStyle}>
                        <button style={window.location.pathname === '/food' ? activeStyle : null}>음식물</button>
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
