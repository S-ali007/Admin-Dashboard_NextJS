import { NextResponse } from "next/server";



export function DELETE (request){
    console.log('delete api');
    return NextResponse.json({
        message:"deleted",
        status:'true'
    },{
        status:201 ,statusText:"changed Text"
    })
    
}