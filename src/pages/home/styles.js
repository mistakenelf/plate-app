import { StyleSheet } from 'aphrodite'
import { indigo600 } from 'material-ui/styles/colors'

const styles = StyleSheet.create({
  hero: {
    height: 500,
    width: "100%",
    marginTop: "-20px",
    backgroundColor: indigo600,
  },

  promotionPadding: {
    marginTop: 50
  },

  footer: {
    width: "100%",
    height: 200,
    marginTop: 50,
    backgroundColor: "black",
    color: "white"
  }
})

export default styles
