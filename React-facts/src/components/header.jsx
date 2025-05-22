function Header() {
  return (
    <header>
      <img src="src/assets/react-logo.png" alt="React Logo" className='logo'/>
      <nav>
        <ul className='nav-list'>
          <li>Pricing </li>
          <li>About</li>
          <li>Contact</li>
        </ul>  
      </nav>
    </header>
  )
}

export default Header