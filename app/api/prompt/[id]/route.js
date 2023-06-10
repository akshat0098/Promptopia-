import Prompt from '@models/prompt'
import { connectToDB } from "@utils/database"

export const GET = async (request , {params }) => {
    try{

        await connectToDB()

        const prompt = await Prompt.findbyId(params.id).populate("creator")

        if(!prompt) return new Response("Prompt Not Found " , {status :404} )

        return new Response(JSON.stringify(prompt),{status:200})
    } catch (error) {
        return new Response("Internal server error", {status:500} )
    }
};

export const PATCH = async (request, {params}) => {
    const {prompt ,tag } = await request.json();
    try{
        await connectToDB();

        //Find the existing prompt by id
        const existingPrompt = await Prompt.findbyId(params.id);
        
        if(!existingPrompt){
            return new Response("Prompt not found ",{status:404});
        }

        //update the prompt with new data
        existingPrompt.prompt = prompt ;
        existingPrompt.tag = tag ;

        await existingPrompt.save();

        return new Response("Succefully updated the prompts" , {status:200});
    } catch (error){
        return new Response("Error Updating the prompts",{ status:500});
    }
};

export const DELETE = async (request, {params} ) => {
    try {
         await connectToDB();

         //find the prompt by id and remote it 
         await Prompt.findbyIdAndRemove(params.id)

         return new Response("Prompt deleted succcefully",{status:200})
    } catch (error){
        return new Response("Error deleting prompt",{status: 500})
    }
};

