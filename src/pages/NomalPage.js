import React, { useState, useEffect } from 'react';
import MenuItem from '../component/Recycle/RecycleItem';
import boxStyle from './Menu.module.css';
import { useNavigate } from 'react-router-dom';
import RecycleHeader from '../component/Recycle/RecycleHeader';
import RecycleNavbar from '../component/Recycle/RecycleNavbar';
import RecycleWriteForm from '../component/Recycle/RecycleWriteForm'; // RecycleWriteForm 컴포넌트 임포트
import { getMenuList } from '../apis/MenuAPI'; // getMenuList 함수 임포트

function Nomal() {
    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showWriteForm, setShowWriteForm] = useState(false); // 글 작성 폼을 보여줄지 여부
    const navigate = useNavigate();

    useEffect(() => {
        setMenuList(getMenuList());
    }, []);

    // 글 작성 버튼 클릭 시 비밀번호 확인 후 RecycleWriteForm 표시
    const onClickWriteHandler = () => {
        const userPassword = prompt('비밀번호를 입력하세요:');
        // 비밀번호가 '1234'와 일치하는 경우에만 글 작성 폼을 보여줌
        if (userPassword === '1234') {
            setShowWriteForm(true);
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    }

    // 새로운 메뉴를 추가하는 함수
    const addNewMenu = (newMenuData) => {
        // 새로운 메뉴에 menuCode 부여
        const menuWithCode = { ...newMenuData, menuCode: menuList.length + 1 };
        // 메뉴 리스트 업데이트
        setMenuList(prevMenuList => [...prevMenuList, menuWithCode]);
    }

    // 검색 버튼 클릭 시 검색 결과 페이지로 이동
    const onClickSearchHandler = () => {
        // 검색어가 있는 경우에만 이동
        if (searchValue.trim() !== '') {
            navigate(`/plastic/search?menuName=${searchValue}`);
        }
    }

    return (
        <div>
            <RecycleHeader />
            <div className={boxStyle.pd}>
            <h1 class={boxStyle.center}>일반 쓰레기</h1>
            <div class={boxStyle.mainContent}>

                <div>
                    <RecycleNavbar />
                </div>
                <div class={boxStyle.flex}>
                <div className={boxStyle.center2}>
                    <input className={boxStyle.searchInput}
                        type="search"
                        name="menuname"
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                    />
                    <button onClick={onClickSearchHandler}>검색</button>
                    {/* 글 작성 버튼 추가 */}
                    <button onClick={onClickWriteHandler}>글 작성</button>
                </div>
                <div className={boxStyle.flexrow}>
                    {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu} />)}
                </div>
            </div>
            {/* 글 작성 폼을 보여줄지 여부에 따라 조건부 렌더링 */}
            {showWriteForm && <RecycleWriteForm onPostSubmit={addNewMenu} />}
        </div>
        </div>
        </div>
        
    );
}

export default Nomal;
