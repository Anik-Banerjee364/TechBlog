
require('../models/database');
const Category = require('../models/Category');



/**
 * GET /
 * Homepage
 */
exports.homepage = async(req, res) => {
    try {

    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
        
    res.render('index', {title: 'Tech Blog - Home', categories});
        
    } catch (error) {
        res.status(500).send({message: error.message || "Error Ocurred"});
    }

}

/**
 *  GET /categories
 * Categories
 */

exports.exploreCategories = async(req, res) => {
    try {

    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
        
    res.render('categories', {title: 'Tech Blog - Categories', categories});
        
    } catch (error) {
        res.status(500).send({message: error.message || "Error Ocurred"});
    }

}

// async function insertDummyCategoryData() {
//     try {
//         await Category.insertMany([
//             {
//                 "name":"Microsoft and AI",
//                 "image":"microsoft.png"
//             },
//             {
//                 "name": "Flipkart",
//                 "image": "flipkart.jpeg"
//             },
//             {
//                 "name": "Amazon",
//                 "image": "amazon.jpeg"
//             }
//         ]);
//     }
//     catch(error) {
//         console.log('err', + error);
//     }
// }

// insertDummyCategoryData();

