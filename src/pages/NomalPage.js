import React, { useState, useEffect } from 'react';
import MenuItem from '../component/Recycle/RecycleItem';
import boxStyle from './Menu.module.css';
import { useNavigate } from 'react-router-dom';
import RecycleHeader from '../component/Recycle/RecycleHeader';
import RecycleNavbar from '../component/Recycle/RecycleNavbar';
import RecycleWriteForm from '../component/Recycle/RecycleWrite/WriteForm';
import { getCategoryMenuList,getNextMenuCode } from '../apis/MenuAPI';

function Nomal() {
    const [menuList, setMenuList] = useState([]); // API로부터 불러온 기본 메뉴 리스트
    const [addedMenus, setAddedMenus] = useState([]); // 로컬 스토리지에 추가된 메뉴 리스트
    const [searchValue, setSearchValue] = useState('');
    const [showWriteForm, setShowWriteForm] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        // API에서 기본 메뉴 리스트 불러오기
        const initialMenuList = getCategoryMenuList('일반'); 
        setMenuList(initialMenuList);
    
        // 로컬 스토리지에서 추가된 메뉴 불러오기
        const storedAddedMenus = localStorage.getItem('addedMenus');
        if (storedAddedMenus) {
            const filteredMenus = JSON.parse(storedAddedMenus).filter(menu => menu.categoryName === '일반'); 
            setAddedMenus(filteredMenus);
        }
    }, []);
    
    // 글 작성 버튼을 눌렀을 때 RecycleWriteForm으로 category 전달
    const onClickWriteHandler = () => {
        const userPassword = prompt('비밀번호를 입력하세요:');
        // 비밀번호가 '1234'와 일치하는 경우에만 글 작성 폼을 보여줌
        if (userPassword === '1234') {
    
            // 글 작성 폼을 열 때 카테고리 정보를 함께 전달합니다.
            
            setShowWriteForm('일반'); 
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    }
    
    const addNewMenu = async (newMenuData, category) => {
        // 로컬 스토리지에서 현재 저장된 메뉴 목록을 불러옵니다.
        const storedMenus = localStorage.getItem('addedMenus');
        const menus = storedMenus ? JSON.parse(storedMenus) : [];
        
        let maxCode = 0;
        if (menus.length > 0) {
            // 로컬 스토리지에 메뉴가 있으면 그 중 최대 menuCode를 찾습니다.
            maxCode = menus.reduce((max, item) => Math.max(max, item.menuCode), 0);
        } else {
            // 로컬 스토리지에 메뉴가 없으면 API를 통해 최대 menuCode를 가져옵니다.
            maxCode = await getNextMenuCode();  // getNextMenuCode() 함수가 비동기라고 가정합니다.
        }
        
        // 새 메뉴 아이템에 대해 menuCode를 설정합니다.
        const newMenu = { ...newMenuData, menuCode: maxCode + 1 };
        
        // 새로운 메뉴를 추가하여 기존 메뉴와 함께 저장합니다.
        const updatedMenus = [...menus, newMenu];
        localStorage.setItem('addedMenus', JSON.stringify(updatedMenus));
        
        // 추가된 메뉴가 속한 카테고리에 따라 메뉴 리스트를 업데이트합니다.
        if (category === '일반') { 
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
                <h1 className={boxStyle.center}>일반 쓰레기</h1> 
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
            {showWriteForm && <RecycleWriteForm categoryName="일반" onPostSubmit={addNewMenu} />}
        </div>
    );
}

export default Nomal;