import FlatButton from 'material-ui/FlatButton'
import Link from 'next/link'

export default () => (
  <Link prefetch href='/'>
    <a>
      <FlatButton
        type='submit'
        label='Home'
        labelStyle={{ color: 'white' }}
        style={{ border: '1px solid white', margin: 10 }}
      />
    </a>
  </Link>
)
