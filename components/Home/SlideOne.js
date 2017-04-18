import BorderedButton from '../BorderedButton/BorderedButton'
import Link from 'next/link'
import React from 'react'

const SlideOne = () => {
  return (
    <div>
      <div>
        <h1 className="text-padding">
          Task Management in the Most Simplistic Form, <br />
          Welcome to <i>Plate</i>!
        </h1>
      </div>
      <div>
        <h5 className="text-padding">
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
      <style jsx>
        {`
          .text-padding {
            margin-bottom: 25px;
          }
        `}
      </style>
    </div>
  )
}

export default SlideOne
