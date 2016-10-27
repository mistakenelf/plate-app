import { StyleSheet } from 'aphrodite'
import background from './bg_7.png'

const styles = StyleSheet.create({
  registerMargin: {
    marginTop: "25%"
  },

  alreadyUser: {
    float: 'right',
    marginBottom: 10
  },

  hover: {
    ':hover': {
      textDecoration: 'none'
    }
  },

  background: {
    backgroundImage: `url(${background})`,
    height: '100vh'
  }
})

export default styles
