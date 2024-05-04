import { useState, useEffect } from 'react';
import { getMenuList } from '../../apis/MenuAPI';
import MenuItem from '../../component/recycle/RecycleItem';
import boxStyle from './Menu.module.css';
import { useNavigate } from 'react-router-dom';
import RecycleHeader from '../../component/recycle/RecycleHeader';
import RecycleNavbar from '../../component/recycle/RecycleNavbar';

function Plastic() {

    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();

    useEffect(
        () => {
            setMenuList(getMenuList());
        },
        []
    );

    const onClickHandler = () => {

        /* 
            쿼리스트링 형태로 검색어를 전달 
            /menu/search?menuName=밥
        */
        navigate(`/plastic/search?menuName=${searchValue}`);
    }

    console.log(menuList);

    return (
        <>
            <div>
                <RecycleHeader />
                <div class={boxStyle.pd}>
                    <h1 class="center">플라스틱 쓰레기</h1>
                    <div>

                        <RecycleNavbar />
                    </div>
                    <h1>판매 메뉴 목록</h1>
                    <div>
                        <input
                            type="search"
                            name="menuname"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <button onClick={onClickHandler}>검색</button>
                    </div>
                    <div className={boxStyle.MenuBox}>
                        {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu} />)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Plastic;