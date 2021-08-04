import { setupServer } from 'msw/node';
import { handlers } from '@visma/msw-openapi-backend-integration';
import type { Document } from 'openapi-backend';
import definition from '../TodoMVC-API.json';
import requestLogicHandlers from './requestLogicHandlers';

export const server = setupServer(
  ...handlers({ definition: definition as Document }, requestLogicHandlers)
);
