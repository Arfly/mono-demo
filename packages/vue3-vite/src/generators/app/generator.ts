import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
  addDependenciesToPackageJson,
  runTasksInSerial,
  GeneratorCallback,
} from '@nx/devkit';
import * as path from 'path';
import { AppGeneratorSchema } from './schema';

const DEPENDENCY = {
  dependencies: {
    vue: '^3.2.47',
  },
  devDependencies: {
    '@vitejs/plugin-vue': '^4.1.0',
    typescript: '^5.0.2',
    vite: '^4.3.9',
    'vue-tsc': '^1.4.2',
  },
};

export async function appGenerator(tree: Tree, options: AppGeneratorSchema) {
  const projectRoot = `apps/${options.name}`;
  const tasks: GeneratorCallback[] = [];

  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'application',
    sourceRoot: `${projectRoot}/src`,
    targets: {
      dev: {
        inputs: [
          {
            externalDependencies: ['vite'],
          },
        ],
        command: `cd ${projectRoot} && vite`,
        dependsOn: ['^build'],
      },
      build: {
        inputs: [
          {
            externalDependencies: ['vite', 'vue-tsc'],
          },
        ],
        command: `cd ${projectRoot} && vue-tsc && vite build`,
        dependsOn: ['^build'],
      },
      preview: {
        inputs: [
          {
            externalDependencies: ['vite'],
          },
        ],
        command: `cd ${projectRoot} && vite preview`,
      },
    },
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);

  const installTask = await addDependenciesToPackageJson(
    tree,
    DEPENDENCY.dependencies,
    DEPENDENCY.devDependencies
  );
  tasks.push(installTask);

  return runTasksInSerial(...tasks);
}

export default appGenerator;
