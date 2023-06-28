import { CompExecutorSchema } from './schema';

export default async function runExecutor(options: CompExecutorSchema) {
  console.log('Executor ran for Comp', options);
  return {
    success: true,
  };
}
