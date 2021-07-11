import React from "react";
import st from "./search.module.css";



function Search(){
  return (
   <form className={st.search} >   
      <svg width="14" height="14" viewBox="0 0 14 14">
        <path d="M12.3089 13.5222L7.78456 8.99705C5.77188 10.428 2.99849 10.078 1.40442 8.19187C-0.189656 6.30579 -0.072608 3.51285 1.67368 1.76676C3.41951 0.0199057 6.21272 -0.0976491 8.09916 1.49634C9.98559 3.09033 10.3358 5.86399 8.90477 7.87684L13.4291 12.402L12.3097 13.5214L12.3089 13.5222ZM5.03193 1.95833C3.5307 1.958 2.23552 3.0118 1.93056 4.48173C1.62559 5.95166 2.39466 7.43373 3.77214 8.03062C5.14961 8.62751 6.75689 8.17517 7.62087 6.94747C8.48486 5.71977 8.36807 4.05414 7.34122 2.95901L7.82018 3.43401L7.28027 2.89568L7.27077 2.88618C6.67843 2.29019 5.8722 1.95607 5.03193 1.95833Z" />
      </svg>
      <input placeholder="Search" type="search"  />
    </form>
  )
}

export default Search;