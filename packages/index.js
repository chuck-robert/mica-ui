import MButton from "./button/index"

const install = app => {
  app.use(MButton);

}
const mica = {
  install,
  MButton
}
export {MButton}
export default mica;
