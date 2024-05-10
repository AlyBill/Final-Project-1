const mongoose = require ('mongoose')

const stateSchema = mongoose.Schema(


    {
        state:{
            type: String,
            required: [true, "Enter a state name"]
        },
        slug:{
            type: String,
            required: [true, "Enter slug name"]
        },
        code:{
            type: String,
            required: [true, "Enter code"]
        },
        nickname:{
            type: String,
            required: [true, "Enter Nickname"]
        },
        website:{
            type: String,
            required: [true, "Enter Website"]

        },
        admission_date:{
            type: String,
            required: [true, "Enter Admission Date"]
        },
        admission_number:{
            type: Number,
            required: true,
        },
        capital_city:{
            type: String,
            required: [true, "Enter Capital City"]
        },
        capital_url:{
            type: String,
            required: [true, "Enter Capital URL"]
        },
        population:{
            type: Number,
            required: true,

        },
        population_rank:{
            type: Number,
            required: true,

        },
        constitution_url:{
            type: String,
            required: [true, "Enter Constitution URL"]
            

        },
        state_flag_url:{
            type: String,
            required: [true, "Enter State Flag URL"]

        },
        state_seal_url:{
            type: String,
            required: [true, "Enter State Seal URL"]

        },
        map_image_url:{
            type: String,
            required: [true, "Enter Map Image URL"]

        },
        landscape_background_url:{
            type: String,
            required: [true, "Enter Landscape Background URL"]

        },
        skyline_background_url:{
            type: String,
            required: [true, "Enter Skyline Background URL"]

        },
        twitter_url:{
            type: String,
            required: [true, "Enter Twitter URL"]

        },
        facebook_url:{
            type: String,
            required: [true, "Enter Facebook URL"]

        }

    }








        

    

)


const States = mongoose.model('State', stateSchema);

module.exports = States;
  