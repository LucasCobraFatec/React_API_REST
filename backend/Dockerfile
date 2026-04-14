FROM node:20

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta que seu server.ts usa
EXPOSE 3001

# Comando para rodar (ajuste se seu script for diferente)
CMD ["npm", "run", "dev"]