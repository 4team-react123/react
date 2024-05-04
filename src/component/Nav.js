import headStyle from "./headstyle.module.css"
function Nav(){
    return(
        
        <div className={headStyle.head}>
            <div className={headStyle.a}>
                <div className={headStyle.logo}></div>
                <span  className={headStyle.logoname}>Yegrina</span>
            
                <div className={headStyle.main1}><span className={headStyle.mainname}>Main</span></div>
                <div className={headStyle.recycle}><span  className={headStyle.recyclename}>Recycle</span></div>
                <div className={headStyle.event}><span  className={headStyle.eventname}>Event</span></div>
                <div className={headStyle.business}><span  className={headStyle.businessname}>Business</span></div>
            </div>
        </div>
    );

}
export default Nav;