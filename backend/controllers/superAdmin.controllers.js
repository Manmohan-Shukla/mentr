getAllAdmins=async(req, res)=> {
    // Logic to fetch all admins from the database
    res.status(200).json({ message: 'List of all admins' });
  }

    createAdmin=async(req, res)=> { 

    }

    updateAdmin=async(req, res)=> {}

    deleteAdmin=async(req, res)=> {}

    getAllUsers = async(req, res)=> {}

    getUser=async(req, res)=> {}

    deleteUser=async(req, res)=> {}

const superAdminController = {
  getAllAdmins,
  createAdmin,
    updateAdmin,
    deleteAdmin,
    getAllUsers,
    getUser,
    deleteUser
};