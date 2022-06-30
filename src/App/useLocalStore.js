import React from 'react';


const useLocalStorage = (nameItems, initialValue) => {
  
    const [items, setItems] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [updateStorage, setUpdateStorage] = React.useState(false);
  
    React.useEffect(()=> {
      setTimeout(() => {
        try {
          if (updateStorage){
            setLoading(false);
          }else{
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
          }
            
        } catch(error){
          setError(error);
        }
      }, 2000);
    }, [updateStorage]);
  
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
      setLoading,
      error,
      updateStorage,
      setUpdateStorage,
    };
    
  }

export { useLocalStorage };