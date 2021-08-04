import {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';
import { Document } from 'openapi-client-axios';
import OpenAPIClientAxios from 'openapi-client-axios';
import { create } from '@postinumero/use-async';
import definition from './TodoMVC-API.json';

export declare namespace Components {
  namespace Schemas {
    export interface Item {
      _id?: string;
      timestamp?: number;
      title?: string;
      completed?: boolean;
    }
    export type Items = Item[];
  }
}
export declare namespace Paths {
  namespace DeleteItem {
    namespace Parameters {
      export type ItemId = string;
    }
    export interface PathParameters {
      itemId: Parameters.ItemId;
    }
  }
  namespace GetItem {
    namespace Parameters {
      export type ItemId = string;
    }
    export interface PathParameters {
      itemId: Parameters.ItemId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Item;
    }
  }
  namespace GetItems {
    namespace Responses {
      export type $200 = Components.Schemas.Items;
    }
  }
  namespace PutItem {
    namespace Parameters {
      export type ItemId = string;
    }
    export interface PathParameters {
      itemId: Parameters.ItemId;
    }
  }
}
export interface OperationMethods {
  /**
   * getItems - List all items
   */
  'getItems'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetItems.Responses.$200>
  /**
   * putItems - Update a list of items
   */
  'putItems'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postItem - Create an item
   */
  'postItem'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteItems - Delete a list of items
   */
  'deleteItems'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getItem - Get an item by id
   */
  'getItem'(
    parameters?: Parameters<Paths.GetItem.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetItem.Responses.$200>
  /**
   * putItem - Update an item
   */
  'putItem'(
    parameters?: Parameters<Paths.PutItem.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteItem - Delete an item
   */
  'deleteItem'(
    parameters?: Parameters<Paths.DeleteItem.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
}

export interface PathsDictionary {
  ['/items']: {
    /**
     * getItems - List all items
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetItems.Responses.$200>
    /**
     * postItem - Create an item
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * putItems - Update a list of items
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteItems - Delete a list of items
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/items/{itemId}']: {
    /**
     * getItem - Get an item by id
     */
    'get'(
      parameters?: Parameters<Paths.GetItem.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetItem.Responses.$200>
    /**
     * putItem - Update an item
     */
    'put'(
      parameters?: Parameters<Paths.PutItem.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteItem - Delete an item
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteItem.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>

// Copied from the standard library and renamed to FunctionParameters
// because the name Parameters clashes with openapi-client-axios.
/**
 * Obtain the parameters of a function type in a tuple
 */
type FunctionParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

const api = new OpenAPIClientAxios({ definition: definition as Document });

export const clientPromise = api.init<Client>();

export async function getItemsRaw(...args: FunctionParameters<OperationMethods['getItems']>) {
  const client = await clientPromise;
  return await client['getItems'](...args);
};

export async function putItemsRaw(...args: FunctionParameters<OperationMethods['putItems']>) {
  const client = await clientPromise;
  return await client['putItems'](...args);
};

export async function postItemRaw(...args: FunctionParameters<OperationMethods['postItem']>) {
  const client = await clientPromise;
  return await client['postItem'](...args);
};

export async function deleteItemsRaw(...args: FunctionParameters<OperationMethods['deleteItems']>) {
  const client = await clientPromise;
  return await client['deleteItems'](...args);
};

export async function getItemRaw(...args: FunctionParameters<OperationMethods['getItem']>) {
  const client = await clientPromise;
  return await client['getItem'](...args);
};

export async function putItemRaw(...args: FunctionParameters<OperationMethods['putItem']>) {
  const client = await clientPromise;
  return await client['putItem'](...args);
};

export async function deleteItemRaw(...args: FunctionParameters<OperationMethods['deleteItem']>) {
  const client = await clientPromise;
  return await client['deleteItem'](...args);
};

export async function getItems(...args: FunctionParameters<OperationMethods['getItems']>) {
  const response = await getItemsRaw(...args);
  return response.data;
};

export async function putItems(...args: FunctionParameters<OperationMethods['putItems']>) {
  const response = await putItemsRaw(...args);
  return response.data;
};

export async function postItem(...args: FunctionParameters<OperationMethods['postItem']>) {
  const response = await postItemRaw(...args);
  return response.data;
};

export async function deleteItems(...args: FunctionParameters<OperationMethods['deleteItems']>) {
  const response = await deleteItemsRaw(...args);
  return response.data;
};

export async function getItem(...args: FunctionParameters<OperationMethods['getItem']>) {
  const response = await getItemRaw(...args);
  return response.data;
};

export async function putItem(...args: FunctionParameters<OperationMethods['putItem']>) {
  const response = await putItemRaw(...args);
  return response.data;
};

export async function deleteItem(...args: FunctionParameters<OperationMethods['deleteItem']>) {
  const response = await deleteItemRaw(...args);
  return response.data;
};

export const [useItemsRaw, refetchItems, useItemsRawSafe] = create(getItemsRaw);

export const [useItemRaw, refetchItem, useItemRawSafe] = create(getItemRaw);

export function useItems(...args: FunctionParameters<OperationMethods['getItems']>) {
  return useItemsRaw(...args).data;
}

export function useItem(...args: FunctionParameters<OperationMethods['getItem']>) {
  return useItemRaw(...args).data;
}

export function useItemsSafe(...args: FunctionParameters<OperationMethods['getItems']>) {
  const [error, response] = useItemsRawSafe(...args)
  return [error, response?.data];
}

export function useItemSafe(...args: FunctionParameters<OperationMethods['getItem']>) {
  const [error, response] = useItemRawSafe(...args)
  return [error, response?.data];
}
