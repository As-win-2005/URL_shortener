import {
  createContext,
  useContext,
  useState,
  useCallback,
} from 'react';

import Toast from '../components/Toast';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success',
  });

  const showToast = useCallback((message, type = 'success') => {
    setToast({
      show: true,
      message,
      type,
    });

    setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        show: false,
      }));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>

      {children}

      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
      />

    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);