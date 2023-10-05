import { NextResponse } from "next/server";
export function DELETE (request,{params}){
    console.log(params);

   
    const userId= params.userid; 
    console.log(userId)
    return NextResponse.json({
        message:"deleted",
        status:'true'
    },{
        status:201 ,statusText:"changed Text"
    })
    
}

export function GET (request,{params}){
    console.log(params);
    // const userId= params.userid; 
    // console.log(userId)

    const{userId,title} =params
    console.log("userId",userId)
    return NextResponse.json({
        message:"getting data ",
       
    },{
        status:201 ,statusText:"changed Text"
    })
    
}