const hasStorage = () => {
    try {
      const key = 'stored';
      localStorage.setItem(key, key);
      localStorage.removeItem(key);
      return true;
    } catch(e) {
      return false;
    }
};

const setState = (state) => {
    const oldState = JSON.parse(localStorage.getItem('ranking') || '[]');
    localStorage.setItem('ranking', JSON.stringify({
      ...oldState,
      ...state
    }));
};

const getState = () => {
    const values = JSON.parse(localStorage.getItem('ranking'));
    return values;
};

export { setState, getState, hasStorage };