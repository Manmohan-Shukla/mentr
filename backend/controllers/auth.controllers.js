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

}

const authController = {
  signin,
  signup,
  logout,
  getMe
};

module.exports = authController;