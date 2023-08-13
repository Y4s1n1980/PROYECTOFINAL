# Dockerfile para el frontend
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios al directorio de trabajo del contenedor para el frontend
COPY frontend/package.json frontend/package-lock.json ./

# Instalar las dependencias del proyecto del frontend
RUN npm install

# Copiar el resto de los archivos del proyecto del frontend al directorio de trabajo del contenedor
COPY frontend .

# Exponer el puerto en el que la aplicación del frontend estará escuchando
EXPOSE 3000

# Comando para iniciar la aplicación del frontend
CMD ["node", "app.js"]