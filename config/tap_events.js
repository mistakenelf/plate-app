import injectTapEventPlugin from 'react-tap-event-plugin'

try {
  injectTapEventPlugin()
} catch (e) {
  // Dont do anything here, just
  // prevent the error with HMR
}
