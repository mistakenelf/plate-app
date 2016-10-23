import { StyleSheet } from 'aphrodite'
import background from './bg_7.png'
import { red500 } from 'material-ui/styles/colors'


const styles = StyleSheet.create({
  notFoundMargin: {
    marginTop: 100,
    backgroundColor: red500,
  },

  background: {
    backgroundImage: `url(${background})`,
    height: '100vh'
  }
})

export default styles
