import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMenu } from '../apis/MenuAPI';
import boxStyle from './Menu.module.css';
import MenuItem from '../component/Recycle/RecycleItem';
import RecycleHeader from '../component/Recycle/RecycleHeader';
import RecycleNavbar from '../component/Recycle/RecycleNavbar';

function MenuSearchResult() {

    const [searchParams] = useSearchParams();

    const [menuList, setMenuList] = useState([]);

    const menuName = searchParams.get('menuName');

    useEffect(
        () => {
            setMenuList(searchMenu(menuName));
        },
        [menuName]
    );

    // console.log(menuList);

    return (
        <div>
            <RecycleHeader />
            <h1 >플라스틱 쓰레기</h1>
            <div>

                <RecycleNavbar />
            </div>
            <h1>검색된 메뉴</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu} />)}
            </div>
        </div>
    );
}

export default MenuSearchResult;