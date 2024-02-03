use Inventory

db.products.find()

db.users.find()

db.orders.find()

db.products.aggregate([
    {
        "$group" : {
            "_id" : "$category",
            "count" : {"$sum" : 1}
        }
    }
])

db.products.aggregate([
    {
        "$group" : {
            "_id" : "$category",
            "max_price" : { "$max" : "$price"}
        }
    }
])

db.users.aggregate([
    {
        "$match" : {
            "name" : "ahmed"
        }
    },
    {
     "$lookup" : 
        {
            "from" : "orders",
            "localField" : "_id",
            "foreignField" : "userId",
            "as" : "orders"
        }
    },
    {
        "$lookup" : 
        {
            "from" : "products",
            "localField" : "orders.productsIds",
            "foreignField" : "_id",
            "as" : "product"
        }
    }
])




