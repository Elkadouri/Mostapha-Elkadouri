
import './footer.css'

function Footer(){

    return (

        <footer className="flex">
            
            <ul className="flex">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
               
            </ul>

            <p> &copy; {new Date().getFullYear()} El Kadouri. All rights reserved.</p>

        </footer>

    )

}

export default Footer