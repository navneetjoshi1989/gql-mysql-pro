import UserResolver from './DatabaseResolver/UserResolver.js'
import CategoryResolver from './DatabaseResolver/CategoryResolver.js'
import ShopResolver from './DatabaseResolver/ShopResolver.js'
import ItemResolver from './DatabaseResolver/ItemResolver.js'

const resolvers = [UserResolver,
     CategoryResolver,
      ItemResolver,
       ShopResolver];

       export default resolvers;


