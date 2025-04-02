import { Section } from '@/types';

export const openDB = (dbName: string, version: number = 1): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      return reject('IndexedDB is not supported in this browser.');
    }

    const request = indexedDB.open(dbName, version);

    request.onerror = (event) => {
      reject(`Database error: ${(event.target as IDBOpenDBRequest).error}`);
    };

    request.onsuccess = (event) => {
      resolve((event.target as IDBOpenDBRequest).result);
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains('sections')) {
        db.createObjectStore('sections', { keyPath: 'id' });
      }
    };
  });
};

export const saveData = async (storeName: string, id: string, data: Section[]): Promise<void> => {
  const db = await openDB('myDatabase');
  const transaction = db.transaction(storeName, 'readwrite');
  const store = transaction.objectStore(storeName);

  store.put({
    id: id,
    data: data,
  });

  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
};

export const getData = async (storeName: string, id: string): Promise<Section[] | null> => {
  const db = await openDB('myDatabase');
  const transaction = db.transaction(storeName, 'readonly');
  const store = transaction.objectStore(storeName);
  const request = store.get(id);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result as Section[] | null);
    request.onerror = () => reject(request.error);
  });
};
