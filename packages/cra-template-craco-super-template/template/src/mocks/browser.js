import { handlers } from '@visma/msw-openapi-backend-integration';
import definition from 'api/schema.json';
import { setupWorker } from 'msw';

export const worker = setupWorker(...handlers({ definition }));
