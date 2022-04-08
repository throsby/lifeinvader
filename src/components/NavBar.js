const NavBar = () => {

    return(
        <nav className="navbar">
            <div>
                <a href="#" className="home-link">Poe-T🥔</a>
            </div>
            <div>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search"></input>
            </div>
            <div>
                <i class="fa-duotone fa-potato"></i>
            </div>
        </nav>
    )
}

export default NavBar;