export default ({ newPackageName }: { newPackageName: string }): string => {
  return `import { App } from "vue";
import ${newPackageName} from "./src/index.vue";

button.install = (app: App): void => {
  app.component(${newPackageName}.name, ${newPackageName});
};
export default button;`;
};
