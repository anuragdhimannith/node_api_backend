// @desc GET all bootcamps
// @route GET /api/v1/bootcamps
// @access public

exports.getBootcamps = (req,res,next) => {
    res.status(200).json({
        success: true,
        msg: "Show all bootcamps",
     });
}

// @desc GET a single bootcamp
// @route GET /api/v1/bootcamps
// @access public

exports.getBootcamp = (req,res,next) => {
    res.status(200).json({
        success: true,
        msg: `Show one bootcamps ${req.params.id}`
     });
}

// @desc Create a new  bootcamp
// @route POST /api/v1/bootcamps
// @access Private

exports.createBootcamp = (req,res,next) => {
    res.status(200).json({
        success: true,
        msg: "Create a new bootcamp"
     });
}


// @desc Update  bootcamp
// @route PUT /api/v1/bootcamps
// @access Private

exports.updateBootcamp = (req,res,next) => {
    res.status(200).json({
        success: true,
        msg: `Update bootcamp ${req.params.id}`
     });
}



// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps
// @access Private

exports.deleteBootcamp = (req,res,next) => {
    res.status(200).json({
        success: true,
        msg: `Delete bootcamp ${req.params.id}`
     });
}