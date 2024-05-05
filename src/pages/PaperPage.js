import React, { useState, useEffect } from 'react';
import MenuItem from '../component/Recycle/RecycleItem';
import boxStyle from './Menu.module.css';
import { useNavigate } from 'react-router-dom';
import RecycleHeader from '../component/Recycle/RecycleHeader';
import RecycleNavbar from '../component/Recycle/RecycleNavbar';
import RecycleWriteForm from '../component/Recycle/RecycleWrite/WriteForm'; // RecycleWriteForm 컴포넌트 임포트
import { getCategoryMenuList, getNextMenuCode } from '../apis/MenuAPI';

function Paper() {
    const [menuList, setMenuList] = useState([]); // API로부터 불러온 기본 메뉴 리스트
    const [addedMenus, setAddedMenus] = useState([]); // 로컬 스토리지에 추가된 메뉴 리스트
    const [searchValue, setSearchValue] = useState('');
    const [showWriteForm, setShowWriteForm] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        
        const initialMenuList = getCategoryMenuList('종이'); 
        setMenuList(initialMenuList);
    
        // 로컬 스토리지에서 추가된 메뉴 불러오기
        const storedAddedMenus = localStorage.getItem('addedMenus');
        if (storedAddedMenus) {
            const filteredMenus = JSON.parse(storedAddedMenus).filter(menu => menu.categoryName === '종이'); 
            setAddedMenus(filteredMenus);
        }
    }, []);
    
   
    const onClickWriteHandler = () => {
        const userPassword = prompt('비밀번호를 입력하세요:');
        // 비밀번호가 '1234'와 일치하는 경우에만 글 작성 폼을 보여줌
        if (userPassword === '1234') {
            setShowWriteForm('종이'); 
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    }
    
    const addNewMenu = async (newMenuData, category) => {
        // 로컬 스토리지에서 현재 저장된 메뉴 목록을 불러옵니다.
        const storedMenus = localStorage.getItem('addedMenus');
        const menus = storedMenus ? JSON.parse(storedMenus) : [];
        
        let maxCode = 0; // menuCode(식별자로 사용) 를 가져오는 로직
        if (menus.length > 0) {
           
            maxCode = menus.reduce((max, item) => Math.max(max, item.menuCode), 0);
        } else {
           
            maxCode = await getNextMenuCode();  
        }
        
        const newMenu = { ...newMenuData, menuCode: maxCode + 1 };
        
        // 새로운 메뉴를 추가하여 기존 메뉴와 함께 저장합니다.
        const updatedMenus = [...menus, newMenu];
        localStorage.setItem('addedMenus', JSON.stringify(updatedMenus));
        if (category === '종이') { 
            setAddedMenus(updatedMenus);
        }
    };
    
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
                <h1 className={boxStyle.center}>종이 쓰레기</h1> {/* "기타"를 "종이"로 변경 */}
                <div className={boxStyle.mainContent}>
                    <div>
                        <RecycleNavbar />
                    </div>
                    <div className={boxStyle.flex}>
                        <div className={boxStyle.center2}>
                            <input className={boxStyle.searchInput}
                                type="search"
                                name="menuname"
                                value={searchValue}
                                onChange={e => setSearchValue(e.target.value)}
                            />
                            <button onClick={onClickSearchHandler}>전체 검색</button>
                            <button onClick={onClickWriteHandler}>글 작성</button>
                        </div>
                        {/* API에서 받은 메뉴 리스트 표시 */}
                        <div className={boxStyle.flexrow}>
                            {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu} />)}
                        </div>
                        {/* 로컬 스토리지에 추가된 메뉴 리스트 표시 */}
                        <div className={boxStyle.flexrow}>
                            {addedMenus.map(menu => <MenuItem key={menu.menuCode} menu={menu} />)}
                        </div>
                    </div>
                </div>
            </div>
            {showWriteForm && <RecycleWriteForm categoryName="종이" onPostSubmit={addNewMenu} />}
        </div>
    );
}

export default Paper;