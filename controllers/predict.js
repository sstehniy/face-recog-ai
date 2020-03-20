require('dotenv').config();
const Clarifai = require('clarifai');
const router = require('express').Router()

const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_KEY
});

router.post('/', async (req, res, next)=>{
    const body = req.body;
    console.log(body)
    try {
        const response = await app.models.predict('e466caa0619f444ab97497640cefc4dc', body.url)
        console.log(response)
        res.status(200).send(response)
    }catch(err){
        return new Error(err)
    }
})

module.exports = router


