// Mongo DAO
import ProductDaoMongo from "./product/ProductDaoMongo.js";
import CartDaoMongo from "./cart/CartDaoMongo.js";
import OrderDaoMongo from "./order/OrderDaoMongo.js";
import UserDaoMongo from "./user/UserDaoMongo.js";
import MessageDaoMongo from "./message/MessageDaoMongo.js";

let ProductDAO = null;
let CartDAO = null;
let OrderDAO = null;
let MessageDAO = null;
let UserDAO = null;

const PERS = process.env.PERS || "mongo";

switch (PERS) {
    case "mongo":
    ProductDAO = ProductDaoMongo.getInstance();
    CartDAO = CartDaoMongo.getInstance();
    OrderDAO = OrderDaoMongo.getInstance();
    MessageDAO = MessageDaoMongo.getInstance();
    UserDAO = UserDaoMongo.getInstance();
    break;
}

export { ProductDAO, CartDAO, UserDAO, OrderDAO, MessageDAO };
