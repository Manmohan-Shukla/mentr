

getMe = async (req, res) => {
  res.json({
    user: req.user
  });
};

signin = async (req, res) => {
  const { email, password } = req.body;

  res.json({
    message: "Signin successful"
  });
};

signup = async (req, res) => {
  const { name, email, password } = req.body;

  res.json({
    message: "Signup successful"
  });
};



logout  = async(req,res)=>{
res.json({
  message:"OKAY"
})


}


getMyProfile = async(req,res)=>{
  res.json({
    user:req.user
  })
}


 updateMyProfile = async(req,res)=>{
  res.json({
    message:"Profile updated successfully"
  })
}

deleteMyProfile = async(req,res)=>{
  res.json({
    message:"Profile deleted successfully"
  })
}

const authController = {
  signin,
  signup,
  logout,
  getMe,
  getMyProfile,
  updateMyProfile,
  deleteMyProfile
};

module.exports = authController;