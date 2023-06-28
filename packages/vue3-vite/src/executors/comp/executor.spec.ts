import { CompExecutorSchema } from './schema';
import executor from './executor';

const options: CompExecutorSchema = {};

describe('Comp Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
