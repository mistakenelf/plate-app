import { Dimmer } from 'semantic-ui-react'
import Link from 'next/prefetch'

export default ({ open, closeMenu }) => (
  <div>
    <Dimmer active={open}
      onClickOutside={closeMenu}
      page
    >
      <div className='fade fadeIn'>
        <div className='menu-items'>
          <h1 onClick={closeMenu}>
            <Link href='/'>
              <a>
                Home
              </a>
            </Link>
          </h1>
          <h1 onClick={closeMenu}>
            <Link href='/login'>
              <a>
                Login
              </a>
            </Link>
          </h1>
          <h1 onClick={closeMenu}>
            <a>Logout</a>
          </h1>
          <h1 onClick={closeMenu}>
            <Link href='/dashboard'>
              <a>
                Dashboard
                </a>
            </Link>
          </h1>
        </div>
      </div>
    </Dimmer>
    <style jsx>{`
      .menu-items{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        cursor: pointer;
      }

      a:hover {
        color: #00ffff;
        cursor: pointer;
      }

      .fade {
        animation-duration: 500ms;
        animation-fill-mode: both;
      }

      @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 0.8;}
      }

      .fadeIn {
        animation-name: fadeIn;
      }
    `}</style>
  </div>
)
