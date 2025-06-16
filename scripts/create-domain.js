import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const domainName = process.argv[2];

if (!domainName) {
  console.error('Informe o nome do domínio. Ex: node scripts/create-domain.js user');
  process.exit(1);
}

const basePath = path.join(__dirname, '../src/domains', domainName);

const folders = [
  'components',
  'docs',
  'pages',
  'services',
  'hooks',
  'stores',
  'types',
  'tests'
];

if (fs.existsSync(basePath)) {
  console.error('Domínio já existe!');
  process.exit(1);
}

fs.mkdirSync(basePath, { recursive: true });
folders.forEach(folder => fs.mkdirSync(path.join(basePath, folder)));
fs.writeFileSync(path.join(basePath, 'README.md'), `# Domínio ${domainName}\n\nDescreva o contexto e regras deste domínio aqui.`);

console.log(`Domínio '${domainName}' criado com sucesso!`);