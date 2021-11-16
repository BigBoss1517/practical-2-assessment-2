import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
import {Router} from './../../routes/router'
import { getStore } from "../../redux/store"
import reducer from './../../redux/reducers'

const addNewItem = function() {
    const template = `
        <h1>This is the add new item page</h1>
    `

    return makeElement(template)
}

export default addNewItem