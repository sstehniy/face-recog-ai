const router = require('express').Router()
const fs = require('fs')
const User = require('../models/user')
const Image = require('../models/image')

router.get('/:id', async (req, res, next)=>{
    try{
        const user = await User.findById(req.params.id)

        const images = await Image.find({user: user._id})
        let paths = []
         images.map(image=>{
            fs.writeFileSync('./public/images/'+image.img.name, image.img.data, 'binary')
            
            paths.push(image.img.path)
            setTimeout(()=>{
                try{

                    fs.unlinkSync('./public/images/' + image.img.name)
                }catch(err){
                    return
                }
            }, 10000)
        })
        
         res.status(201).json(paths)

    }catch(err){
        res.status(500).send(new Error('nothing found'))
    }
    
})

module.exports = router