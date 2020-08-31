import React from 'react'

export default ({ history }) => {
  return (
    <footer>
      <ul>
        <li>
          &copy; {new Date().getFullYear()}{' '}
          <a href="https://jamestarpey.com">James Tarpey</a>
        </li>
      </ul>
    </footer>
  )
}
