/**
 * Required External Modules and Interfaces
 */
 import express, { Request, Response } from "express";
 import * as SchoolService from "./school.service";
 import { BaseSchool, School } from "./school.interface";
/**
 * Router Definition
 */
 export const schoolsRouter = express.Router();
/**
 * Controller Definitions
 */

// GET items
schoolsRouter.get("/", async(req:Request, res:Response)=>{
    try {
        const schools: School[] = await SchoolService.findAll();
        res.status(200).send(schools);
    } catch (e:any) {
        res.status(500).send(e.message);
    }
})

// GET items/:id
schoolsRouter.get("/:id", async(req:Request, res:Response)=>{
    try {
        const id:number= parseInt(req.params.id, 10)
        const school: School = await SchoolService.find(id);
        if(school){
            res.status(200).send(school);
        }
        res.status(404).send(`Item with id:${id} not found`)
    } catch (e:any) {
        res.status(500).send(e.message);
    }
})
// POST items
schoolsRouter.post("/", async (req: Request, res: Response) => {
    try {
      const school: BaseSchool = req.body;
  
      const newItem = await SchoolService.create(school);
  
      res.status(201).json(newItem);
    } catch (e:any) {
      res.status(500).send(e.message);
    }
})
// PUT items/:id

schoolsRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const schoolUpdate: School = req.body;
  
      const existingItem: School = await SchoolService.find(id);
  
      if (existingItem) {
        const updatedItem = await SchoolService.update(id, schoolUpdate);
        return res.status(200).json(updatedItem);
      }
  
      const newItem = await SchoolService.create(schoolUpdate);
  
      res.status(201).json(newItem);
    } catch (e:any) {
      res.status(500).send(e.message);
    }
  });

// DELETE items/:id
schoolsRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      await SchoolService.remove(id);
  
      res.sendStatus(204);
    } catch (e:any) {
      res.status(500).send(e.message);
    }
  });