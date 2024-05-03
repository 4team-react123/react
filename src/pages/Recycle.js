// Recycle.js
import React from "react";
import RecycleNavbar from "../component/RecycleNavbar";

function Recycle() {
  return (
    <>
    <div>
        <h1 >플라스틱 쓰레기</h1>
            <div>

        <RecycleNavbar/>

        {/* <div>
                <input 
                    type="search"
                    name="menuname"
                    value={ searchValue }
                    onChange={ e => setSearchValue(e.target.value) }
                    />
                <button onClick={ onClickHandler }>검색</button>
            </div> */}
            </div>
    </div>
                    </>
  );
}

export default Recycle;