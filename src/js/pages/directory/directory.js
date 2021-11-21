import makeElement from "../../utils/makeElement"
import directory from "../../components/cards/directory"
import employee from "../../components/cards/employee"
import { getStore } from "../../redux/store"
import { Router } from "../../routes/router"
 
 
 
let createPage = true;
 
 

const employeeDirectory = function(){

  const page = document.createElement('div')
  const employeeContainer = directory(); 


  function cleanUp( ){
     const employees = employeeContainer.querySelectorAll('aside') 
     employees.forEach((employee)=>{
          employee.removeEventListener('click', onDeleteToDoItem)
     })
  }


 // EVENT HANDLER FUNCTION FOR REMOVING AN EMPLOYEE
  function onDeleteToDoItem (e){
        const employeeId = e.currentTarget.dataset.key
        const employee = getStore().filter((employee) => employee.id === employeeId)
        cleanUp()
        Router('/delete', employee[0])

  }

  function onEditToDoItem (e) {
    const employeeId = e.currentTarget.dataset.key
    const employee = getStore().filter((employee) => employee.id === employeeId)
    cleanUp()
    Router('/editPage', employee[0])
  }

  function addNewToDoItem (e) {
    const employeeId = e.currentTarget.dataset.key
    const employee = getStore().filter((employee) => employee.id === employeeId)
    cleanUp()
    Router('/addNewItem', employee[0])
  }

   function render (){ 
      const employees = getStore()
      const div =  employeeContainer.querySelector('#employees')       
      // create li from the store data
      const employeeElements =  getStore().map(emp=> employee(emp))
      employeeElements.forEach(element => {        
        element.querySelector('#delete').addEventListener('click', onDeleteToDoItem)
        element.querySelector('#edit').addEventListener('click', onEditToDoItem)
        element.querySelector('#add').addEventListener('click', addNewToDoItem)
        div.append(element)
      });
       page.append(employeeContainer)
   
  
   }

  
  

      render()
      
    return page
     
     
  
    
     
   
     
    
}

export default employeeDirectory


 