import MButton from "./button/index"
import MLink from "./border/index"

const install = app => {
  app.use(MButton);
  app.use(MLink);
}
const mica = {
  install,
  MButton,
  MLink
}
export {MButton,MLink}
export default mica;
