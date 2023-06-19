import { NextResponse } from "next/server";


import connect from "@/utils/db";
import Post from "@/models/Post";



export const GET = async (request) => {                                             // Petición para obtener los post de un usuario
    //const url = new URL(request.url);                                               // De la petición obtenemos la url

    //const username = url.searchParams.get("username");                              // De los params de la url obtenemos el username            

    try {
        await connect();                                                            // Conexión a la bd

        const posts = await Post.find();                                            // Buscamos los post que tengan el username de la url
      
        return new NextResponse(JSON.stringify(posts), { status: 200 });            // respuesta
    } catch (err) {
        console.error("Database Error:", err);
        return new NextResponse("Database Error", { status: 500 });
    }
};

export const POST = async (request) => {
    const body = await request.json();

    const newPost = new Post(body);

    try {
        await connect();

        await newPost.save();

        return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};