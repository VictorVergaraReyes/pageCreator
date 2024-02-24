import { Router } from "express";
import {readdirSync} from 'fs'

const PATH_ROUTER = `${__dirname}`
const router = Router()

//This function change the base of the route to the name of the directory
const cleanFileName = (fileName:string) => {
    const file = fileName.split('.').shift()
    return file
}

readdirSync(PATH_ROUTER).filter((fileName)=>{
    const cleanName = cleanFileName(fileName)
    if(cleanName !== 'index'){
        import(`./${cleanName}`).then((moduleRouter)=>{
            console.log(`Creating the route... /${cleanName}`);
            router.use(`/${cleanName}`,moduleRouter.router);
        })
    }
})

export {router}