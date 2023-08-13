import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './StoreList.css'; // Importamos el archivo de estilos CSS específico para esta página

const StoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await api.get('/store');
        setStores(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStores();
  }, []);

  return (
    <div className="store-list-container">
      <h1>Lista de Tiendas</h1>
      <ul className="store-list">
        {stores.map((store) => (
          <li key={store.id} className="store-item">
            {store.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreList;

