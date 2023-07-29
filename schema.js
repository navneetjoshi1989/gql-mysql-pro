import { gql } from "apollo-server";
import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const typeDefs=gql`
${fs.readFileSync(join(__dirname, 'DatabaseSchema', 'UserSchema.graphql'), 'utf8')}
${fs.readFileSync(join(__dirname, 'DatabaseSchema', 'categorySchema.graphql'), 'utf8')}
${fs.readFileSync(join(__dirname, 'DatabaseSchema', 'ItemSchema.graphql'), 'utf8')}
${fs.readFileSync(join(__dirname, 'DatabaseSchema', 'ShopSchema.graphql'), 'utf8')}

  `;
  export default typeDefs;