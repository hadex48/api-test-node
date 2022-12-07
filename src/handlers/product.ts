import prisma from '../db'


//Get all products
export const getProducts = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            products: true
        }
    })

    res.json({data: user.products})
}

//Get single product

export const getOneProduct = async (req, res) => {
    const id = req.params.id
    const product = await prisma.product.findFirst({
        where: {
            id, 
            belongsToId: req.user.id
        }
    })

    res.json({data: product})
}

// Create Product
export const createProduct = async (req, res, next) => {
    try {
        const product = await prisma.product.create({
            data: {
                name: req.body.name,
                belongsToId: req.user.id
            }
        })
    
        res.json({data: product}) 
    } catch (error) {
       next(error) 
    }
    
}

// Update Product
export const updateProduct = async (req, res) => {
    const update = await prisma.product.update({
        where: {
            id: req.params.id
        },
        select: {
            belongsToId: req.user.id
        },
        data: {
            name: req.body.name
        }
    })

    res.json({data: update})
}

// Delete Product

export const deleteProduct = async (req, res) => {
    const deleteItem = await prisma.product.delete({
        where: {
            id: req.params.id,         
        },
        select: {
            belongsToId: req.user.id
        }
    })

    res.json({data: deleteItem})
}

// Get Update

/*export const update = async (req, res) => {
    const updateItem = await prisma.product.update({
        where: {
            id: req.params.id
        },
       
        data: {
            name: req.body.name
        }
    })

    res.json({data: updateItem})
}

// Update point

export const updatePoint = async (req, res) => {
    const updatePoint = await prisma.product.update({
        where: {
            id: req.params.id,
           
        },
       
        data: {
            name: req.body.name
        }
    })

    res.json({data: updatePoint})

}*/