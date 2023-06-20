import productModel from "./ProductModel.js"

const products = [
    {
        name: 'Slim Shirt',
        category: 'Shirts',
        image: '/images/d1.jpg',
        price: 60,
        brand: ' Nike',
        rating: 4.5,
        countInstock: 10,
        numReviews: 10
    },

    {

        name: 'Fit Shirt',
        category: 'Shirts',
        image: '/images/d2.jpg',
        price: 50,
        brand: ' Nike',
        rating: 3.2,
        countInstock: 5,
        numReviews: 5
    },
    {

        name: 'Best Pants',
        category: 'Pants',
        image: '/images/d3.jpg',
        price: 70,
        brand: ' Nike',
        rating: 2.5,
        countInstock: 5,
        numReviews: 8
    }, {

        name: 'Best Pants',
        category: 'Pants',
        image: '/images/p1.jpg',
        price: 70,
        brand: ' Nike',
        rating: 4.5,
        countInstock: 5,
        numReviews: 8

    }
]

class ProductController {
    constructor() {

    }

    async getProduct(req, res) {
        try {
            const result = await productModel.find()
            if(result){
                return res.status(200).send({message:"success",products:result})
            }
            return res.status(500).send({message:"Somthing want Wrong"})
        } catch (error) {

            return res.status(500).send({message:"Internal server error"})
        }
    }

       async getProductById(req, res) {

        try {
            const {id} = req.params

            const result = await productModel.findById(id)
            if(result){
                return res.status(200).send({message:"success",product:result})
            }
            return res.status(500).send({message:"Somthing want Wrong"})

        } catch (error) {
            return res.status(500).send({message:"Internal server error"})

        }

       }

    async insertProduct(req, res) {
        try {
            const result = await productModel.insertMany(products)
            if (result) {
                return res.status(200).send({ message: "success", Product: result })
            }
            return res.status(500).send({ message: "somthing want wrong" })
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error" })
        }
    }
}



const productController = new ProductController()
export default productController;
