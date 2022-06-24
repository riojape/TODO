import React from 'react';


const useLocalStorage = (nameItems, initialValue) => {
  
    const [items, setItems] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect(()=> {
      setTimeout(() => {
        try {
          const localStorageItems = localStorage.getItem(nameItems);
          let parsedItems;
      
          if (!localStorageItems){
            parsedItems = [];
            localStorage.setItem(nameItems, JSON.stringify(initialValue));
          } else {
            parsedItems = JSON.parse(localStorageItems);
          };
  
          setItems(parsedItems);
          setLoading(false);
  
        } catch(error){
          setError(error);
        }
      }, 1000);
    });
  
    const saveItems = (newItems) => {
      try {
        const stringifiedNewItems = JSON.stringify(newItems);
        localStorage.setItem(nameItems, stringifiedNewItems);
        setItems(newItems);
      } catch(error){
        setError(error);
      }
    };
    return {
      items,
      saveItems,
      loading, 
      error
    };
    
  }

export { useLocalStorage };