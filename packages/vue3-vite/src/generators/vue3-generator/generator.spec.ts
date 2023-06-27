import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { vue3GeneratorGenerator } from './generator';
import { Vue3GeneratorGeneratorSchema } from './schema';

describe('vue3-generator generator', () => {
  let tree: Tree;
  const options: Vue3GeneratorGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await vue3GeneratorGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
