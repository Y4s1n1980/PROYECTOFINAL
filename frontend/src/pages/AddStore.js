import React, { useState } from 'react';
import api from '../services/api';
import './AddStore.css'; // Importamos el archivo de estilos CSS específico para esta página

const AddStore = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/store', { name, location });
      // Handle success, e.g., show a success message
      setName('');
      setLocation('');
    } catch (error) {
      console.error(error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="add-store-container">
      <h1>Agregar Nueva Tienda</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre de la tienda"
          className="input-field"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Ubicación de la tienda"
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default AddStore;
