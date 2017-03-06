import injectTapEventPlugin from "react-tap-event-plugin";

try {
  injectTapEventPlugin();
} catch (e) {
  // Dont do anything,
  // just prevent the eror
}
