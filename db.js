var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongo_galhardomongo:27017")
	.then(conn => global.conn = conn.db("listadecompras"))
	.catch(err => console.log(err))

function findAll(callback){
	global.conn.collection("itens").find({}).toArray(callback);
}

function insert(item, callback){
	global.conn.collection("itens").insert(item, callback);
}

var ObjectId = require("mongodb").ObjectId;
function deleteOne(id, callback){
	global.conn.collection("itens").deleteOne({_id:new ObjectId(id)}, callback);
}

function findOne(id, callback){
	global.conn.collection("itens").findOne({_id: new
	ObjectId(id)}, callback);
}

function updateOne(id, item, callback){
	global.conn.collection("itens").updateOne(
		{ _id: new ObjectId(id) },
		{ $set: {nome: item.nome, quantidade: item.quantidade } }, 
		callback);
}

module.exports = { findAll, insert, deleteOne, findOne, updateOne }