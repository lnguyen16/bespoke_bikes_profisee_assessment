const Bike = require("../model/Bike");

// Get method that sends the request to the database using postman
const getAllBikes = async(req,res,next) => {
    let bikes;
    try {
        bikes = await Bike.find();
    } catch(err) {
        console.log(err);
    }

    if (!bikes) {
        return res.status(404).json({message: "No products were found" });
    }
    return res.status(200).json({ bikes });
};

// Get id method that sends the request to the database using postman
const getById = async(req, res, next) => {
    const id = req.params.id;
    let bike;
    try {
        bike = await Bike.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!bike) {
        return res.status(404).json({message: "No Bike was found"});
    }
    return res.status(200).json({bike});
};

// Add's the bike to the database by using postman
const addBike = async(req, res, next) => {
    const { name,manufacturer,style,price,saleprice,quantity,commission, image } = req.body
    let bike;
    try {
        bike = new Bike({
            name,
            manufacturer,
            style,
            price,
            saleprice,
            quantity,
            commission,
            image
        });
        await bike.save();
    } catch(err) {
        console.log(err);
    }
    if(!bike) {
        return res.status(500).json({message:'Unable to add bike'})
    }
    return res.status(201).json({bike});
};

// Update the bike info in the database by using postman
const updateBike = async (req, res, next) => {
    const id = req.params.id;
    const { name,manufacturer,style,price,saleprice,quantity,commission, image } = req.body
    let bike;
    try {
        bike = await Bike.findByIdAndUpdate(id,{
            name,
            manufacturer,
            style,
            price,
            saleprice,
            quantity,
            commission,
            image
        });
        bike = await bike.save();
    } catch (err) {
        console.log(err);
    }
    if (!bike) {
        return res.status(404).json({message: "Unable to update by this ID"});
    }
    return res.status(200).json({bike});
}

// delete the bike info from the database by using postman
const deleteBike = async(req, res, next) => {
    const id = req.params.id;
    let bike;
    try {
        bike = await Bike.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }
    if (!bike) {
        return res.status(404).json({message: "Unable to delete by this ID"});
    }
    return res.status(200).json({message: "Product successfully deleted"});
}

exports.getAllBikes = getAllBikes;
exports.addBike = addBike;
exports.getById = getById;
exports.updateBike = updateBike;
exports.deleteBike = deleteBike;