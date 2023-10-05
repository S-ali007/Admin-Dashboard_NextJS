import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server"
connectDb();
export function GET (request){
const users=[{
    name : 'ali',
    phone:'4324235345',
    course:'js'
},
{
    name : 'rahman',
    phone:'7324235345',
    course:'js'
},
{
    name : 'saif',
    phone:'9324235345',
    course:'js'
},
{
    name : 'abrar',
    phone:'1324235345',
    course:'js'
}]
        return NextResponse.json(users)
}
export function POST (){


    
}
export function DELETE (request){
    console.log('delete api');
    return NextResponse.json({
        message:"deleted",
        status:'true'
    },{
        status:201 ,statusText:"changed Text"
    })
    
}
export function PUT (){
    
}