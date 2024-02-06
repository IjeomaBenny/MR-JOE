import classes from './nav.module.css'
import Link from 'next/link'
function Nav(){
    return(
        <div className={classes.nav}>
        <img src="percentage.png" alt="" />
        <p>One percent Engineering</p>
            
         <ul>
            <li> <Link href='/'>HOME</Link></li>
            <li><Link href='/about'>ABOUT</Link></li>
            <li><Link href='/services'>SERVICES</Link></li>
            <li><Link href='/contact'>CONTACT</Link></li>
            
        
            
        </ul>

        <button>Join Us Today</button>

        </div>
    )
}
export default Nav