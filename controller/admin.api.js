
const user = require('../model/login.model');
const bcrypt = require('bcrypt');
exports.registerUser = async (req, res) => {
    const {name,phone, email, password } = req.body;

    try {
        const existingUser = await user.findOne({where:{email:email}});

        if(existingUser){
            return res.status(200).json({success:false,message:'already have a account'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await user.create({
            name:name,
            phone:phone,
            email: email,
            password: hashedPassword,
        });
       
        res.status(200).json({success:true,message:'registration successful'})
    } catch (err) {
        console.error(err);
        res.send('Failed to register user');
    }
};

exports.getUser = async (req,res)=>{
    const {email,password}= req.body;

    try{
        const existingUser = await user.findOne({where:{email:email}});
        if(!existingUser){
          return res.json({isValidUser:false,message:'user not found'});
        }
        const isPassword = await bcrypt.compare(password,existingUser.password);
        if(!isPassword){
           return  res.json({password:false,message:'Invalid password'});
        }
        return res.status(200).json({success:true,message:'logged in success'});
    }
    catch(err){
        res.send(err);
    }
}
