const { hash } = require('bcryptjs');
const User = require('../model/user.model');
const bcryptjs = require('bcryptjs');
const signup = async (req, res) => {
    try{
        const {fullname, email, password} = req.body;
        const user= await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        
        else{
            const hashedPassword = await bcryptjs.hash(password, 10);
            const createdUser = new User({
                fullname,
                email,
                password:hashedPassword
            });
            await createdUser.save();
            res.status(201).json({message:"User created successfully",user:{
                _id:createdUser._id,
                fullname:createdUser.fullname,
                email:createdUser.email
            }
            }); 
        }
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

const login = async (req, res) => {
    try{
        const {email,password} =req.body;
        const user= await User.findOne({email});
        const isMatch= await bcryptjs.compare(password, user.password);
        if(!user||!isMatch){
            return res.status(400).json({message:"Invalid credentials"});

        }
        else{
            res.status(200).json({message:"Login successful",user:{
                _id:user._id,
                fullnme:user.fullname,
                email:user.email
            }
            });
        }
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}
module.exports={ 
    signup,login
}