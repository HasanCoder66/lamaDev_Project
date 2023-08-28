export const user = (req , res) => {
    // console.log(req.body)
        res.status(200).send(
            "hey this is users route"
        )
     }
export const auth = (req , res) => {
    // console.log(req.body)
        res.status(200).send(
            "hey this is auth route"
        )
     }


    //  export default {register}