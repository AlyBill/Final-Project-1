const express = require('express')
const mongoose = require('mongoose')
const State = require('./models/stateModel')
const app = express()

app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('State Information')
})

app.post('/state', async(req, res) =>
{
    //console.log(req.body);
    //res.send(req.body)
    try{
        const state = await State.create(req.body)
        res.status(200).json(state);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error})
    }
})

app.put('/states/:id',async(req, res) => {
    try{
        const {id} = req.params;
        const state = await State.findByIdAndUpdate (id, req.body);
        if (!state){
            return res.status(404).json({message: 'cannot find ${id}'})
        }
        res.status(200).json(state);

    }
    catch(error){
        res.status(500).json({message: error})

    }
})

mongoose.connect('mongodb+srv://albicknell:SEJA5SOG58IVLGm0@cluster0.9ptwusv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> {
    app.listen(3000, ()=> {
        console.log('Connect to MongoDB')
        console.log('Node API app is running on port 3000')
    })
    
}).catch(()=>{
    console.log(error)
}
)