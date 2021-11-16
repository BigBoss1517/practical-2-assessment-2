import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
import {Router} from './../../routes/router'
import { getStore } from "../../redux/store"
import reducer from './../../redux/reducers'
import * as styles from './styles.module.scss'





const editItem = function(params) { 

    const template = `
    <section class="${styles.edit_page}">
     <h1>Edit To Do Item</h1>

     <form>
            <div class="${styles.form_container}">
                    <div>
                        <label for="id">ID</label>
                    </div>
                    <div>
                        <input type="text" id="id" name="id">
                    </div>
            </div>

            <div class="${styles.form_container}">
                    <div>
                        <label for="category">Category</label>
                    </div>
                    <div>
                        <input type="text" id="category" name="category">
                    </div>
            </div>

            <div class="${styles.form_container}">
                    <div>
                        <label for="title">Title</label>
                    </div>
                    <div>
                        <input type="text" id="title" name="title">
                    </div>
            </div>

            <div class="${styles.form_container}">
                    <div>
                        <label for="sdate">Start Date</label>
                    </div>
                    <div>
                        <input type="text" id="sdate" name="sdate">
                    </div>
            </div>

            <div class="${styles.form_container}">
                    <div>
                        <label for="stime">Start Time</label>
                    </div>
                    <div>
                        <input type="text" id="stime" name="stime">
                    </div>
            </div>

            <div class="${styles.form_container}">
                    <div>
                        <label for="edate">End Date</label>
                    </div>
                    <div>
                        <input type="text" id="edate" name="edate">
                    </div>
            </div>

            <div class="${styles.form_container}">
                    <div>
                        <label for="etime">End Time</label>
                    </div>
                    <div>
                        <input type="text" id="etime" name="etime">
                    </div>
            </div>

            <div class="${styles.form_buttons}">
                <button type="button" class="confirm">Confirm</button>
                <button type="button" class="cancel">Cancel</button>
            </div>
     </form>
     </section>
    `


    const cancelButton = document.querySelector(".cancel")

    function cleanUp() {
        cancelButton.removeEventListener('click', onCancelEdit)
    }
    
    function onCancelEdit(e) {
        cleanUp()
        Router('/directory')
    }

    const pageInfo = makeElement(template)
    pageInfo.querySelector('section').innerHTML = ''
    cancelButton.addEventListener('click', onCancelEdit)
    pageInfo.querySelector('.cancel').append(cancelButton)
    
    return pageInfo
}

export default editItem