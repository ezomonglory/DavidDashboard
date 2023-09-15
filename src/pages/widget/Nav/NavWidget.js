import React from 'react'

function NavWidget() {
  return (
    <div>
         <nav>
            <div className="nav-wrapper  cyan darken-4">
                <a href="#!" className="brand-logo p-16">
                    Dashboard
                </a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down  cyan darken-4">
                    <li className=' cyan darken-4'>
                        <a href="sass.html">
                            <i className='material-icons'>account_circle</i>
                        </a>
                    </li>
                    
            </ul>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
        </ul>

    </div>
  )
}

export default NavWidget