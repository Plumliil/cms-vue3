import { App } from 'vue'
import { ElButton, ElForm, ElInput, ElRadio } from 'element-plus'
import 'element-plus/dist/index.css'
const components = [ElButton, ElForm, ElInput, ElRadio]

export default function (app: App): void {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}
