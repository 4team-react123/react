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
            <div className={boxStyle.pd2}>
                <div class={boxStyle.mainContent2}>
                    <div>
                        <RecycleNavbar />
                    </div>
                    <div class={boxStyle.flex2}>
                        <div className={boxStyle.center10}>
                            <h1>검색된 메뉴</h1>
                            <div className={boxStyle.menuBox2}>
                                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuSearchResult;