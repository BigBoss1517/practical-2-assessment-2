
import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
import {Router} from './../../routes/router'
import { getStore } from "../../redux/store"
import reducer from './../../redux/reducers'
import * as styles from './styles.module.scss'
 
 

const cancelButton = button("cancel")
const editButton = button("Edit")

 
const editPage = function(props){
        
    // Create A Container for the page
    // Styles either with modules.scss or styles.module.css
    const page = document.createElement('div') 

    // Component Clean Up Function
    // Remove The Listeners from the Page
    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelDelete)  
        editButton.removeEventListener('click', onRemoveEmployee) 
    }
 
    //Cancel Delete Event Handler
    // Call the cleanUp method
    function onCancelDelete (e){
        cleanUp()
        Router('/directory')
    }

    // DELETE EMPLOYEE EVENT HANDLER
    function onRemoveEmployee (e){ 
     
      
           if(props !== null){           
            Router('/directory')
               const removeEmployee = props
               const index = getStore().findIndex(employee => employee.id === removeEmployee.id)
               const action  = {
                type:"Edit",
                payload:{index},
                cb:()=> Router('/directory')
            }
            reducer(action)
            cleanUp()
           }
    
       

       
        
    }
    
    let headerTemplate = `
    <section class="${styles.edit_page}">
    <h1>Edit To Do Item</h1>
    <form>
           <section class="${styles.form_container}">
                   <section>
                       <label for="id">ID</label>
                   </section>
                   <section>
                       <input type="text" id="id" name="id">
                   </section>
           </section>

           <section class="${styles.form_container}">
                   <section>
                       <label for="category">Category</label>
                   </section>
                   <section>
                       <input type="text" id="category" name="category">
                   </section>
           </section>

           <section class="${styles.form_container}">
                   <section>
                       <label for="title">Title</label>
                   </section>
                   <section>
                       <input type="text" id="title" name="title">
                   </section>
           </section>

           <section class="${styles.form_container}">
                   <section>
                       <label for="sdate">Start Date</label>
                   </section>
                   <section>
                       <input type="text" id="sdate" name="sdate">
                   </section>
           </section>

           <section class="${styles.form_container}">
                   <section>
                       <label for="stime">Start Time</label>
                   </section>
                   <section>
                       <input type="text" id="stime" name="stime">
                   </section>
           </section>

           <section class="${styles.form_container}">
                   <section>
                       <label for="edate">End Date</label>
                   </section>
                   <section>
                       <input type="text" id="edate" name="edate">
                   </section>
           </section>

           <section class="${styles.form_container}">
                   <section>
                       <label for="etime">End Time</label>
                   </section>
                   <section>
                       <input type="text" id="etime" name="etime">
                   </section>
           </section>

           <div class="${styles.form_buttons}">
           </div>
    </form>
    </section>
    `
    const pageHeader = makeElement(headerTemplate) 
    pageHeader.querySelector('div').innerHTML = ''
    cancelButton.addEventListener('click', onCancelDelete)  
    editButton.addEventListener('click', onRemoveEmployee) 
    pageHeader.querySelector('div').append(cancelButton, editButton)
    page.append(pageHeader)

  
    return page
    
    
}

export default editPage