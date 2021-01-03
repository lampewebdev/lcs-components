export default ({ packageName }: { packageName: string }): string => {
  return `import ${packageName} from "./src/index.vue";

export default ${packageName};
`;
};
