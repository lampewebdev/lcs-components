export default ({ packageName }: { packageName: string }): string => {
  return `import { App } from "vue";
import ${packageName} from "./src/index.vue";

${packageName}.install = (app: App): void => {
  app.component(${packageName}.name, ${packageName});
};
export default ${packageName};
`;
};
