import headStyle from "./headstyle.module.css"
import {Link} from "react-router-dom";

function Nav(){
    return(
        
        <div className={headStyle.head}>
            <div className={headStyle.a}>
                <div className={headStyle.logo}></div>
                <div className={headStyle.flex}>
                    <div>

                <span  className={headStyle.logoname}>Yegrina</span>
                    </div>
                <div className={headStyle.mainList}>
                    <div className={headStyle.pd}><Link to="/" className={headStyle.mainname}>Main</Link></div>
                    <div className={headStyle.pd}><Link to="/nomal" className={headStyle.recyclename}>Recycle</Link></div>
                    <div className={headStyle.pd}><Link to="/event"  className={headStyle.eventname}>Event</Link></div>
                    <div className={headStyle.pd}><span  className={headStyle.businessname}>Business</span></div>
                </div>
                </div>
            </div>
                {/* <div className={headStyle.main1}><span className={headStyle.mainname}>Main</span></div>
                <div className={headStyle.recycle}><Link to="/recycle" className={headStyle.recyclename}>Recycle</Link></div>
                <div className={headStyle.event}><span  className={headStyle.eventname}>Event</span></div>
                <div className={headStyle.business}><span  className={headStyle.businessname}>Business</span></div>
            </div> */}
        </div>
    );

}
export default Nav;