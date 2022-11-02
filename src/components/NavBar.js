function NavBar(){
    return(
        <nav className = "NavBar">
            {/* <h2 class="logo">Port<span>Folio</span></h2> */}
            <ul className="NavBut">
                <li><a href>Home</a></li>
                <li><a href>About</a></li>
                <li><a href>Skills</a></li>
                <li><a href>Contact</a></li>
                
            </ul>
            {/* <a href="/documents/resume.pdf" download="resume" class="btn">Download CV</a> */}
        </nav>
    )
}
export default NavBar;