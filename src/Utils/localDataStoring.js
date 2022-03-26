const loadData = (key) => {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value;
    } catch (err) {
      return null;
    }
};
  
const saveData = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return 1;
    } catch (err) {
      return -1;
    }
};

const removeData = (key)=>{
      try{
          localStorage.removeItem(key)
          return 1
      }
      catch(err){
          return -1
      }
}

export {removeData, saveData, loadData}