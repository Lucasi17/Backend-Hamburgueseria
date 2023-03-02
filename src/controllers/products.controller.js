import Product from "../models/product"

const showProducts = (req, res) => {
    res.send('listar los productos')
}

const getOne = (req, res) =>{
    res.send('el producto buscado')
}









const createProduct = async (req, res) =>{
const { productName, price, urlImg, category } = req.body;

    try {
        console.log(req.body);

        //validar

        //crear un objeto para guardar la BD

        const newProduct = new Product({
            /* productName: req.body.productName,
            price: req.body.price,
            urlImg: req.body.urlImg,
            category: req.body,category */

            productName,
            price,
            urlImg,
            category
        })

        //guardar en BD
        await newProduct.save();
        res.status(201).json({ message: 'Product created successfully'})     
    } catch (error) {
        console.log(error);
        res.status(400).json ({message: 'Error creating product'})
    }
}











const updateProduct = (req, res) =>{
    res.send('el producto fue actualizado')
}

const delateProduct = (req, res) =>{
    res.send('se borró el producto')
}

export {showProducts, createProduct, getOne, updateProduct, delateProduct};