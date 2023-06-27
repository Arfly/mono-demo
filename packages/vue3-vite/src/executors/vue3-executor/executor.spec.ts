import { Vue3ExecutorExecutorSchema } from './schema';
import executor from './executor';

const options: Vue3ExecutorExecutorSchema = {};

describe('Vue3Executor Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
