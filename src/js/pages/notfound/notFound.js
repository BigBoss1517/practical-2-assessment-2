import makeElement from "../../utils/makeElement"
import link from "../../components/ui/link"
import * as styles from './styles.module.scss'

const notFound = function(){
    console.log(styles)
    const page = document.createElement('div')  
    let headerTemplate = `
        <header class="center-in-page">
           <div class=${styles.notfound}>
             <span>404</span>
             <div>
             <h1>The page you are looking for could not be found<a href="/directory">Return to directory</a> </h1>
            
             </div>
            </div>

        
        </header>
    `
    const pageHeader = makeElement(headerTemplate)
   

    
    page.append(pageHeader)

    return page
}

export default notFound