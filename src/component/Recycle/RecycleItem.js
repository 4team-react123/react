import itemStyle from './MenuItem.module.css';
import { Link } from 'react-router-dom';

function RecycleItem({ menu }) {

    return (
        <div class={itemStyle.subDiv}>
            <div class={itemStyle.sudContent}>
                <div class={itemStyle.sub}>
                    {/* <Link to={`/menu/${menu.menuCode}`}> */}
                        <div className={itemStyle.MenuItem}>
                            <img src={menu.detail.image} />
                            <h3> {menu.menuName}</h3>
                            <h4> {menu.detail.description}</h4>
                        </div>
                    {/* </Link> */}
                </div>
            </div>
        </div>

    );
}

export default RecycleItem;