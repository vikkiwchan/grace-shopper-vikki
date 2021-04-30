const {
  models: { Product },
} = require('../db/index');
const router = require('express').Router();

// Select all products

router.get('/', async (req, res, next) => {
  try {
    allProducts = await Product.findAll();
    res.status(200).send(allProducts);
  } catch (er) {
    next(er);
  }
});
//Product by id
router.get('/:id',async(req,res,next)=>{
    try{
        const product = await Product.findByPk(req.params.id);
        res.status(200).send(product);
    }catch(er){
        next(er);
    }
})

// Products by type

<<<<<<< HEAD
router.get('/sofas', async(req,res,next)=>{
    try{
        const sofas = await Product.findAll({
                where:{
                type:'sofa'
            }
        })
        res.status(200).send(sofas);

    }catch(er){
        next(er);
    }
});

router.get('/dressers', async(req,res,next)=>{
    try{
        const dressers = await Product.findAll({
                where:{
                type:'dresser'
            }
        })
        res.status(200).send(dressers);

    }catch(er){
        next(er);
    }
});
router.get('/chairs', async(req,res,next)=>{
    try{
       const chairs=  await Product.findAll({
                where:{
                type:'chair'
            }
        })
        res.status(200).send(chairs);

    }catch(er){
        next(er);
    }
});

router.get('/beds', async(req,res,next)=>{
    try{
        const beds = await Product.findAll({
                where:{
                type:'bed'
            }
        })
        res.status(200).send(beds);
    }catch(er){
        next(er);
    }
});

router.get('/dressers', async(req,res,next)=>{
    try{
        const dressers = await Product.findAll({
                where:{
                type:'dresser'
            }
        })
        res.status(200).send(dressers);
    }catch(er){
        next(er);
    }
});

router.get('/nightstands', async(req,res,next)=>{
    try{
        const nightstands = await Product.findAll({
                where:{
                type:'nightstand'
            }
        })
        res.status(200).send(nightstands);
    }catch(er){
        next(er);
    }
});

router.get('/tables', async(req,res,next)=>{
    try{
        const tables = await Product.findAll({
                where:{
                type:'table'
            }
        })
        res.status(200).send(tables);
    }catch(er){
        next(er);
    }
})
=======
router.get('/sofas', async (req, res, next) => {
  try {
    const sofas = await Product.findAll({
      where: {
        type: 'sofa',
      },
    });
    res.status(200).send(sofas);
  } catch (er) {
    next(er);
  }
});
router.get('/sofas/:id', async (req, res, next) => {
  try {
    const sofas = await Product.findByPk(req.params.id);
    res.status(200).send(sofas);
  } catch (er) {
    next(er);
  }
});
router.get('/dressers', async (req, res, next) => {
  try {
    const dressers = await Product.findAll({
      where: {
        type: 'dresser',
      },
    });
    res.status(200).send(dressers);
  } catch (er) {
    next(er);
  }
});
router.get('/dressers/:id', async (req, res, next) => {
  try {
    const dressers = await Product.findByPk(req.params.id);
    res.status(200).send(dressers);
  } catch (er) {
    next(er);
  }
});
router.get('/chairs', async (req, res, next) => {
  try {
    const chairs = await Product.findAll({
      where: {
        type: 'chair',
      },
    });
    res.status(200).send(chairs);
  } catch (er) {
    next(er);
  }
});
router.get('/chairs/:id', async (req, res, next) => {
  try {
    const chairs = await Product.findByPk(req.params.id);
    res.status(200).send(chairs);
  } catch (er) {
    next(er);
  }
});
router.get('/beds', async (req, res, next) => {
  try {
    const beds = await Product.findAll({
      where: {
        type: 'bed',
      },
    });
    res.status(200).send(beds);
  } catch (er) {
    next(er);
  }
});
router.get('/beds/:id', async (req, res, next) => {
  try {
    const beds = await Product.findByPk(req.params.id);
    res.status(200).send(beds);
  } catch (er) {
    next(er);
  }
});
router.get('/dressers', async (req, res, next) => {
  try {
    const dressers = await Product.findAll({
      where: {
        type: 'dresser',
      },
    });
    res.status(200).send(dressers);
  } catch (er) {
    next(er);
  }
});
router.get('/dressers/:id', async (req, res, next) => {
  try {
    const dressers = await Product.findByPk(req.params.id);
    res.status(200).send(dressers);
  } catch (er) {
    next(er);
  }
});
router.get('/nightstands', async (req, res, next) => {
  try {
    const nightstands = await Product.findAll({
      where: {
        type: 'nightstand',
      },
    });
    res.status(200).send(nightstands);
  } catch (er) {
    next(er);
  }
});
router.get('/nightstands/:id', async (req, res, next) => {
  try {
    const nightstands = await Product.findByPk(req.params.id);
    res.status(200).send(nightstands);
  } catch (er) {
    next(er);
  }
});
router.get('/tables', async (req, res, next) => {
  try {
    const tables = await Product.findAll({
      where: {
        type: 'table',
      },
    });
    res.status(200).send(tables);
  } catch (er) {
    next(er);
  }
});
router.get('/tables/:id', async (req, res, next) => {
  try {
    const tables = await Product.findByPk(req.params.id);
    res.status(200).send(tables);
  } catch (er) {
    next(er);
  }
});
>>>>>>> b29dbc891deb352072a1d2aeab29f189220b7fcb

//Products by room and style

router.get('/rooms/transitional', async (req, res, next) => {
  try {
    const transitional = await Product.findAll({
      where: {
        room: 'Bedroom',
        style: 'Transitional',
      },
    });
    res.status(200).send(transitional);
  } catch (er) {
    next(er);
  }
});
router.get('/rooms/living/transitional', async (req, res, next) => {
  try {
    const transitional = await Product.findAll({
      where: {
        room: 'Living',
        style: 'Transitional',
      },
    });
    res.status(200).send(transitional);
  } catch (er) {
    next(er);
  }
});
router.get('/rooms/dining/transitional', async (req, res, next) => {
  try {
    const transitional = await Product.findAll({
      where: {
        room: 'Dining',
        style: 'Transitional',
      },
    });
    res.status(200).send(transitional);
  } catch (er) {
    next(er);
  }
});
router.get('/rooms/bathroom/transitional', async (req, res, next) => {
  try {
    const transitional = await Product.findAll({
      where: {
        room: 'Bathroom',
        style: 'Transitional',
      },
    });
    res.status(200).send(transitional);
  } catch (er) {
    next(er);
  }
});
router.get('/rooms/bedroom/modern', async (req, res, next) => {
  try {
    const modern = await Product.findAll({
      where: {
        room: 'Bedroom',
        style: 'Modern',
      },
    });
    res.status(200).send(modern);
  } catch (er) {
    next(er);
  }
});
router.get('/rooms/living/modern', async (req, res, next) => {
  try {
    const modern = await Product.findAll({
      where: {
        room: 'Living',
        style: 'Modern',
      },
    });
    res.status(200).send(modern);
  } catch (er) {
    next(er);
  }
});
router.get('/rooms/dining/modern', async (req, res, next) => {
  try {
    const modern = await Product.findAll({
      where: {
        room: 'Dining',
        style: 'Modern',
      },
    });
    res.status(200).send(modern);
  } catch (er) {
    next(er);
  }
});
router.get('/rooms/bathroom/modern', async (req, res, next) => {
  try {
    const modern = await Product.findAll({
      where: {
        room: 'Bathroom',
        style: 'Modern',
      },
    });
    res.status(200).send(modern);
  } catch (er) {
    next(er);
  }
});

router.get('/rooms/bedroom/contemporary', async (req, res, next) => {
  try {
    const contemporary = await Product.findAll({
      where: {
        room: 'Bedroom',
        style: 'Contemporary',
      },
    });
    res.status(200).send(contemporary);
  } catch (er) {
    next(er);
  }
});
router.get('/rooms/living/contemporary', async (req, res, next) => {
  try {
    const contemporary = await Product.findAll({
      where: {
        room: 'Living',
        style: 'Contemporary',
      },
    });
    res.status(200).send(contemporary);
  } catch (er) {
    next(er);
  }
});
router.get('/rooms/dining/contemporary', async (req, res, next) => {
  try {
    const contemporary = await Product.findAll({
      where: {
        room: 'Dining',
        style: 'Contemporary',
      },
    });
    res.status(200).send(contemporary);
  } catch (er) {
    next(er);
  }
});
router.get('/rooms/bathroom/contemporary', async (req, res, next) => {
  try {
    const contemporary = await Product.findAll({
      where: {
        room: 'Bathroom',
        style: 'Contemporary',
      },
    });
    res.status(200).send(contemporary);
  } catch (er) {
    next(er);
  }
});

//Products by room

router.get('/rooms/dining', async (req, res, next) => {
  try {
    const dining = await Product.findAll({
      where: {
        type: 'Dining',
      },
    });
    res.status(200).send(dining);
  } catch (er) {
    next(er);
  }
});

router.get('/rooms/bedroom', async (req, res, next) => {
  try {
    const bedroom = await Product.findAll({
      where: {
        type: 'Bedroom',
      },
    });
    res.status(200).send(bedroom);
  } catch (er) {
    next(er);
  }
});

router.get('/rooms/living', async (req, res, next) => {
  try {
    const living = await Product.findAll({
      where: {
        type: 'Living',
      },
    });
    res.status(200).send(Living);
  } catch (er) {
    next(er);
  }
});

router.get('/rooms/bathroom', async (req, res, next) => {
  try {
    const bathroom = await Product.findAll({
      where: {
        type: 'Bathroom',
      },
    });
    res.status(200).send(bathroom);
  } catch (er) {
    next(er);
  }
});

// Single product

router.get('/:uuid', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.uuid);
    res.status(200).send(product);
  } catch (er) {
    next(er);
  }
});

module.exports = router;
