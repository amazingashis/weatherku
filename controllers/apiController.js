// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://admin:amazing@cluster0-hyk5s.mongodb.net/test?retryWrites=true&w=majority";
// _this = this;

// exports.getHomePage = async function (req, res) {
//     try {
//         MongoClient.connect(url, function(err, db) {
//             if (err) throw err;
//             var dbo = db.db("weatherdata");
//             dbo.collection("data").findOne({}, {sort:{$natural:-1}}, function(err, result) {
//               if (err) throw err;
//               res.render("index",{
//                   data:result


//               });
//               console.log(result);
              
//               db.close();
//             });
//           });
//     } catch (error) {
//         return res.status(400).json({
//             status: 400,
//             message: error.message
//         });
//     }
// }