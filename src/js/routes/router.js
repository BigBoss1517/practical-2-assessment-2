
import homePage from '../pages/home'
import employeeDirectory from "../pages/directory";
import deletePage from "../pages/delete/";
import addNewItem from '../pages/addNewItem/addNewItem';
import editItem from '../pages/editPage/editPage';
import notFound from "../pages/notfound";


/* 
     Route is a path to something .....file or function
     key value
     route   page.js ()
     pathname is one of the routes you set up.....
*/

const routes = {
    "/": homePage,
    "/directory":employeeDirectory,
    "/delete":deletePage,
    "/addNewItem": addNewItem,
    "/editPage": editItem,
    "/*":notFound,
}
// params that is page data......
const Router =  function (pathname, params=null)   {

   const isValidRoute =   Object.keys(routes).find(key => key===pathname)
    
   
     
   
    // loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
     
        // app.appendChild(routes[window.location.pathname]())
        if(isValidRoute === undefined || isValidRoute ===''){
            app.appendChild(notFound())
        }else{

            app.appendChild(routes[isValidRoute](params) ) 
        }
       
    

}



 
export { Router}