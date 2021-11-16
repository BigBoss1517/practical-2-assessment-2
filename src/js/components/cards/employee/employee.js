import makeElement from "../../../utils/makeElement";
import * as styles from "./styles.module.scss";

const employee = function ({ id, category, title, startDate, startTime, endDate, endTime }) {
   
 
  const template = `       
          <aside class="${styles.employee}" data-key="${id}">
          <div class="${styles[category.toLowerCase()]} ${styles.team} ">${category}</div>
          <header>

             
          <h2>${title}</h2>
          </header>
          <ul>
             
              <li><span>Category</span><p>${category}</p></li>
              <li><span>Due</span><p>${endDate}</p></li>
          </ul>

          <footer data-key="${id}">
            <button id="delete" data-key="${id}" >delete</button>
            <span></span>
            <button id="edit" data-key="${id}">edit</button>
          </footer>
        </aside>  
  `;
  return makeElement(template);
};

export default employee;
