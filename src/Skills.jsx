import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import "./Skills.css";

export default function Skills() {
  return <>
  <ul className='icons'>
  <li><FontAwesomeIcon icon={faHtml5} /> </li>
  <li><FontAwesomeIcon icon={faCss3Alt} /> </li>
  <li> <FontAwesomeIcon icon={faJs} /> </li>
  <li><FontAwesomeIcon icon={faReact} /> </li>
  <li><FontAwesomeIcon icon={faVuejs} /> </li>
  </ul>
  </>;
}
