# Brainly

```bash
npm init -y
npx tsc --init
```

tsconfig.json

```bash
rootDir: "./src"
outDir: "./dist"
```

package.json

```bash
"scripts": {
"build": "tsc -b",
"start": "node dist/index.js",
"dev": "npm run buid && npm run start"
},
```

Dependencies

```bash
npm install express,
npm install mongoose
npm install typescript
```

Types -- these should be in dev dependencies

```bash
npm install -D @types/express
npm install -D @types/jsonwebtoken
```
