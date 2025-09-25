import {Request, Response} from 'express'
import { prisma } from '../../database/index'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';

export class CreateProduct {
    async handle(req: Request, res: Response){
        try{
            
        	const {name, quantity, price, unityType, harvestId, imgUrl} = req.body

        		const newProduct = await prisma.product.create({
        			data:{
        				name,
        				quantity,
        				price,
        				unityType,
        				ownerId: req.userId,
        				harvestId,
        				imgUrl
        			}
        		})
				
            return res.status(200).send({newProduct});
			
			}catch{
            return res.status(500).send({err: "Error creating the product"})
        }
    	
	}
}