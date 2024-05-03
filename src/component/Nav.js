import headStyle from "./headstyle.module.css"
import { NavLink } from 'react-router-dom';
function Nav(){
    return(
        
        <div className={headStyle.head}>
            <div className={headStyle.a}>
                <div className={headStyle.logo}></div>
                <span  className={headStyle.logoname}>Yegrina</span>
            
                <div className={headStyle.main1}><NavLink to="/" className={headStyle.mainname}>Main</NavLink></div>
                <div className={headStyle.recycle}><span  className={headStyle.recyclename}>Recycle</span></div>
                <div className={headStyle.event}><span  className={headStyle.eventname}>Event</span></div>
                <div className={headStyle.business}><span  className={headStyle.businessname}>Business</span></div>
            </div>
        </div>
    );

}
export default Nav;