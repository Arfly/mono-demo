import { AppExecutorSchema } from './schema';

export default async function runExecutor(options: AppExecutorSchema) {
  console.log('Executor ran for App', options);
  return {
    success: true,
  };
}
