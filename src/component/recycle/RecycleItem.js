import itemStyle from './MenuItem.module.css';
import { Link } from 'react-router-dom';

function RecycleItem({ menu }) {

    return (
        <div class="subDiv">
            <div class="sudContent">
                <div class="sub">
                    <Link to={`/menu/${menu.menuCode}`}>
                        <div className={itemStyle.MenuItem}>
                            <img src={menu.detail.image} />
                            <h3>이름 : {menu.menuName}</h3>
                            <h4>내용 : {menu.detail.description}</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default RecycleItem;