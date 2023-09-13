import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import './Footer.css'

export default function Footer() {

    return(
        <>
        <ul className='container'>
        <li className='icons'><a href="https://www.linkedin.com/in/douglas-jonesiii/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li className='icons'><a href="https://github.com/DougJones866" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
        </ul>
        </>
    )
}