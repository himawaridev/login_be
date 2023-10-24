// TAO KET NOI XUONG DATABASE
const connection = require('../config/database');

const getHomePage = (req, res) => {
    // let results = await getALLUsers();
    return res.render('./home.ejs'); 
}


// TRÍCH XUẤT BIẾN ĐÃ KHAI BÁO

module.exports = {
    getHomePage,
}; 
