import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/apiError.js"
import { ApiResponse } from "../utils/apiResponse.js"
import { User } from "../models/user.model.js"

const registerUser = asyncHandler(async (req,res) => { 
    // Getting the input fields from the user
    const {name,email,password} = req.body

    // Checking all fields are provided
    if(name == ""){
        throw new ApiError(400, "All input fields are required")
    }
    if(email == ""){
        throw new ApiError(400, "All input fields are required")
    }
    if(password == ""){
        throw new ApiError(400, "All input fields are required")
    }

    //Checking if the user already exists
    const existingUser = await User.findOne({
        $or : [{name}, {email}]
    })

    if(existingUser){
        throw new ApiError(400, "User already exists")
    }

    // Making an entry into the database
    const createdUser = await User.create({
        name,
        email,
        password
    })

    if(!createdUser){
        throw new ApiError(400, "Something went wrong while creating the user")
    }
    // Returning the new user as a response with success message
    return res.status(200).json(
        new ApiResponse(200, createdUser, "User registered successfully.")
    )
})

const loginUser = asyncHandler (async (req,res) => {
    //Get inputs from the user
    const {email, password} = req.body

    // Check if necessary fields are provided for login
    if(email == ""){
        throw new ApiError(400, "All input fields are required")
    }
    if(password == ""){
        throw new ApiError(400, "All input fields are required")
    }

    // Check if user with that email exists or not
    const user = await User.findOne({email})
    console.log(user)

    if(!user){
        throw new ApiError(400, "No account associated with this email")
    }

    // Checking if the password is correct
    if(password != user.password){
        throw new ApiError(500, "Password is wrong")
    } else{
        return res.status(200).json(
            new ApiResponse(200, "User login successfully")
        )
    }
})

export { registerUser,loginUser }