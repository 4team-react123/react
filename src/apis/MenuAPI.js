import menus from '../data/recycleMenu-detail.json';

/* 전체 메뉴 리스트 조회 */
export const getMenuList = ()=> {

    return menus;

}


// 마지막 메뉴의 menuCode를 확인하고 +1한 값을 반환
export function getNextMenuCode() {
    const lastMenu = menus[menus.length - 1];
    return lastMenu.menuCode + 1;
}
export function getMenuDetail(menuCode) {

    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0]
}

export function searchMenu(menuName) {

    return menus.filter(menu => menu.menuName.match(menuName));
}
// getCategoryMenuList 함수 추가
export const getCategoryMenuList = (categoryName) => {
    const menuList = getMenuList();
    // 카테고리에 따라 필요한 메뉴 데이터만 필터링하여 반환
    return menuList.filter(menu => menu.categoryName === categoryName);
}

// 로컬 스토리지에서 메뉴 리스트를 가져오는 함수
export function getMenuListFromStorage() {
    const storedMenuList = localStorage.getItem('menuList');
    return storedMenuList ? JSON.parse(storedMenuList) : [];
}

// 메뉴 리스트를 로컬 스토리지에 저장하는 함수
export function setMenuListToStorage(menuList) {
    localStorage.setItem('menuList', JSON.stringify(menuList));
}
