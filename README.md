# projeto-Alquimis
npm init -y
npm install express typeorm reflect-metadata mysql2
npm install --save-dev typescript ts-node-dev @types/node @types/express
npx tsc --init

tsconfig: {
  "compilerOptions": {
    "outDir": "./dist",
    "module": "commonjs",
    "target": "es2020",
    "lib": ["es2020"],
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strict": true,
    "skipLibCheck": true,
    "sourceMap": true
  },
  "include": ["src/**/*"]
}


trocar package.json: "scripts": {
  "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}

A primeira linha do app.ts (ou arquivo inicial) deve ser:
import "reflect-metadata";