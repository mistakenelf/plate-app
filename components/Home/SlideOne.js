import BorderedButton from '../BorderedButton/BorderedButton'
import Link from 'next/link'
import React from 'react'

const SlideOne = () => {
  return (
    <div>
      <div>
        <h1 style={{ marginBottom: 25 }}>
          Task Management in the Most Simplistic Form, <br />
          Welcome to <i>Plate</i>!
        </h1>
      </div>
      <div>
        <h5 style={{ marginBottom: 25 }}>
          Create multiple plates and customize your very own task layout.
          <br />
          Register now
          to begin managing your tasks!
        </h5>
      </div>
      <div>
        <Link prefetch href="/register">
          <a>
            <BorderedButton type="button" label="Register Now" color="white" />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SlideOne
