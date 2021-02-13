import User from "../models/Users";
import { getPagination } from "./getPagination";

export const getAllUsers = async (req: any, res: any) => {
    try {
        const { offset, limit } = getPagination(req.query.page, req.query.size)

        const users = await User.paginate({}, {offset, limit})
        
        if(users.docs.length && users.docs.length > 0) res.json(users.docs)
        else res.status(404).json({message: "There is not any user"})
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Error getting users'
        })
    }
}

export const getUser = async (req: any, res: any) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error getting user"
            
        })
    }
}

export const addUser = async (req: any, res: any) => {
    if(!req.body.name || 
        !req.body.lastname || 
        !req.body.email || 
        !req.body.password) {
            res.status(400).json({
                message: "User data uncompleted"
            })
        }
    try {
        const newUser = new User({
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            company: req.body.company
        })
    
        res.json(await newUser.save())
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error saving user"  
        })
    }
}

export const updateUser = async (req: any, res: any) => {
    if(!req.params.id ||
        !Object.values(req.body) ||
        Object.values(req.body).length === 0) res.status(400).json({
        message: "Data uncompleted"
    })

    for(const key of Object.keys(req.body)) {
        if(key === "name" || 
        key === "lastname" || 
        key === "email" || 
        key === "password" || 
        key === "company") continue
        else return res.status(400).json({
            message: "Unexpected key"
        })
    }

    try {
        await User.findByIdAndUpdate(req.params.id, req.body)
        res.json("The user was update successfully")
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error updating user"
        })
    }
}

export const deleteUser = async (req: any, res: any) => {
    if(!req.params.id) res.status(400).json({
        message: "Id required"
    })

    try {
        await User.findByIdAndDelete(req.params.id)
        res.json(`user was delete successfully`)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error deleting user"
        })
    }
}

export const getAllCompanies = async (req: any, res: any) => {
    try {
        const { offset, limit } = getPagination(req.query.page, req.query.size)

        const users = await User.paginate({}, {offset, limit})
        
        const companies = users.docs.map(object => object.company)
        
        if(companies.length && companies.length > 0) res.json(companies)
        else res.status(404).json({message: "There is not any user's company"})
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Error getting companies'
        })
    }
}

export const getCompany = async (req: any, res: any) => {
    try {
        const user = await User.findById(req.params.id)
        
        if(user.company) res.json(user.company)
        else res.status(404).json({message: "Couldn't find that company"})
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Error getting the company'
        })
    }
}