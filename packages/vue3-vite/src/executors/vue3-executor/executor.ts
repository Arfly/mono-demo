import { Vue3ExecutorExecutorSchema } from './schema';

export default async function runExecutor(options: Vue3ExecutorExecutorSchema) {
  console.log('Executor ran for Vue3Executor', options);
  return {
    success: true,
  };
}
