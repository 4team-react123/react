import menus from '../data/recycleMenu-detail.json';

/* 전체 메뉴 리스트 조회 */
export function getMenuList() {

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