import Link from 'next/prefetch'

export default () => {
  return (
    <div className='unauthorized-card'>
      <div className='header'>
        <h2 style={{color: 'white', marginTop: '12px'}}>Unauthorized</h2>
      </div>
      <h3 style={{padding: '20px'}}>
        It appears you do not have access to the page you are trying to access.
        Please be sure you are authorized to view this content. If you believe
        you should be able to access this content, please navigate to the help section.
      </h3>
      <Link href='/'>
        <a>
          Return Home
        </a>
      </Link>
      <style jsx>{`
        .unauthorized-card {
          margin-left: auto;
          margin-right: auto;
          margin-top: 80px;
          width: 50%;
          height: 300px;
          background-color: #eceff1;
          border-radius: 5px;
        }
        .header {
          height: 80px;
          padding: 10px;
          background-color: #ef9a9a;
          justify-content: center;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
        a {
          padding: 20px;
          float: right;
        }
      `}</style>
    </div>
  )
}
