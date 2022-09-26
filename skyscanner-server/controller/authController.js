const jwt = require("jsonwebtoken");
const key = require("../key/key");
const userModel = require("../models/userModel");

module.exports.createUser = async function (req, res) {
	const { name, email, password } = req.body;
  try {
    const r = await CheckDuplicate(name)
    if(r){
      res.status(500).json('err');
    }else{
      const user = await userModel.create({ name, email, password });
      const token = jwt.sign({email: email, name: name, password: password}, key.jwt, {expiresIn: 60*60})
		res.status(200).json(user);
    }  
    console.log(r)
    
	} catch (error) {
		res.status(500).json('error = ',error)
		console.log("error", error);
	}
  	
};

module.exports.updateUser = async function (req, res) {
	const { edit_name, edit_email, edit_password, name, email, password  } = req.body;
	try {
		const update_user = await userModel.updateOne({ name: name, email }, { $set: { email: edit_email } });
    console.log(update_user)
    res.status(200).json(update_user)
	} catch (e) {
		console.log(e);
	}
};

module.exports.deleteUser = async function (req, res) {

}

const CheckDuplicate =  async (check_name) =>{
      console.log(check_name)
       const r =  await userModel.findOne({name: check_name})  
  return r
}

module.exports.loginUser = async (req, res) => {
  const {email, password} = req.body;
  const t =  await CheckEmailPassword(email, password)
  console.log("t = ",t)
  const token = jwt.sign({email: email, password: password}, key.jwt, {expiresIn: 60*60})
  t? res.status(200).json(token): res.status(500).json('500')
 
}

const CheckEmailPassword = async (email, password) => {    
  console.log(email, password)
  const res = await userModel.findOne({email: email})
  if (res && res.password === password){
    return true
  }else{
    return false
  }
}
