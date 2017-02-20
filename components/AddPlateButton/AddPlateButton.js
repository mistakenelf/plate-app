import Add from 'material-ui/svg-icons/content/add'
import RaisedButton from 'material-ui/RaisedButton'
import {fullWhite} from 'material-ui/styles/colors'

export default () => (
  <RaisedButton
    backgroundColor='#a4c639'
    icon={<Add color={fullWhite} />}
    label='Add Plate'
    labelStyle={{ color: 'white', verticalAlign: 'middle' }}
    fullWidth
  />
)
