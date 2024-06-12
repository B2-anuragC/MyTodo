const localStorageUtils = {
    getItem: (key: string) => {
      try {
        const serializedItem = localStorage.getItem(key);
        return serializedItem ? JSON.parse(serializedItem) : null;
      } catch (error) {
        console.error(`Error getting item ${key} from localStorage`, error);
        return null;
      }
    },
    setItem: (key: string, value: any) => {
      try {
        const serializedItem = JSON.stringify(value);
        localStorage.setItem(key, serializedItem);
      } catch (error) {
        console.error(`Error setting item ${key} to localStorage`, error);
      }
    },
    removeItem: (key: string) => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing item ${key} from localStorage`, error);
      }
    }
  };
  
  export default localStorageUtils;
  