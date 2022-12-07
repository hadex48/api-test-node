import prisma from '../db'

//Get All Updates

export const getUpdates = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id
        },
        include: {
            update: true
        }
    })

    const update = products.reduce((allupdates, product) => {
        return [...allupdates, ...product.update]
    }, [])
    res.json({data: update})
}

//Get Single Update

export const getOneUpdate = async (req, res) => {
    const update = await prisma.update.findUnique({
        where: {
            id: req.params.id
        }
    })
    res.json({data: update})
}

//Create a New Update

export const createUpdate = async (req, res) => {
    const product = await prisma.product.findFirst({
        where: {
           id: req.body.productId
        }
    })
    if (!product){
        return res.json({message: 'Nope'})
    }
    const newupdate = await prisma.update.create({
        data: {
            title: req.body.title,
            body: req.body.body,
            product: {connect: {id: product.id}}
        }
    })

    res.json({data: newupdate})
}

//Update Update
export const updateUpdate = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id   
        },
        include: {
            update: true
        }
       
    })
    const updates = products.reduce((allupdates, product) => {
        return [...allupdates, ...product.update]
    }, [])

    const match = updates.find(update => update.id === req.params.id )

    if (!match) {
        //handle this
        return res.json({message: "Nope"})
    }
    const updateupdate = await prisma.update.update({
        where: {
            id: req.params.id
        },
        data: req.body
    })

    res.json({data: updateupdate})
}

//Delete Update
export const deleteUpdate = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id   
        },
        include: {
            update: true
        }
       
    })
    const updates = products.reduce((allupdates, product) => {
        return [...allupdates, ...product.update]
    }, [])

    const match = updates.find(update => update.id === req.params.id )

    if (!match) {
        //handle this
        return res.json({message: "Nope"})
    }

    const deleteUpdates = await prisma.update.delete({
        where: {
            id: req.params.id
        }
    })

    res.json({data: deleteUpdates})
}