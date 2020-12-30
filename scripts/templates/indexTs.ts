
export default ({newPackageName}: {newPackageName: string}): string => {
  return `import { App } from 'vue'
import button from './src/index.vue'
  
button.install = (app: App): void => {
  app.component(button.name, button)
}
export default button`
}