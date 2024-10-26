import MButton from "./button/index"
import MBorder from "./border/index"

const install = app => {
  app.use(MButton);
  app.use(MBorder);
}
const mica = {
  install,
  MButton,
  MBorder
}
export {MButton,MBorder}
export default mica;
