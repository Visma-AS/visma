import * as client from './client';

export * from './client';

export async function postItem(item) {
  await client.postItem(null, item);
  await client.refetchItems();
}

export async function putItem(item) {
  await client.putItem(item._id, item);
  await client.refetchItems();
}

export async function putItems(items) {
  await client.putItems(null, items);
  await client.refetchItems();
}

export async function deleteItem(item) {
  await client.deleteItem(item._id);
  await client.refetchItems();
}

export async function deleteItems(items) {
  await client.deleteItems(
    null,
    items.map((item) => item._id)
  );
  await client.refetchItems();
}

// Poll API 😕 to get updates from other users and tabs
//setInterval(() =>  client.refetchItems(), 5000);
