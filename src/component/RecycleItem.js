import itemStyle from './MenuItem.module.css';
import { Link } from 'react-router-dom';

function RecycleItem({ menu }) {

    return (
        <Link to={ `/menu/${menu.menuCode}`}>
            <div className={ itemStyle.MenuItem }>
                {/* <h3>이미지 : { menu.menuPrice }</h3> */}
                <h3>이름 : { menu.menuName }</h3>
                <h4>내용 : { menu.detail }</h4>
            </div>
        </Link>
    );
}

export default RecycleItem;