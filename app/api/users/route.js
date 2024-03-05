import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from 'fs'


export function GET() {
    const data = users;
    return NextResponse.json({data}, {status: 200});
}

export async function POST(req, res) {
    let {id, name, email, password} = await req.json();

    if (!name || !email || !password) {
        return NextResponse.json({ result: "Required field not found"},
        {status: 404})
    }
    else {
        users.push({id, name, email,password});
        const updatedArray = users;
        const updatedData = JSON.stringify( updatedArray, null, 2)

        fs.writeFileSync('./app/util/db.js',  `export const users = ${updatedData}`,"utf-8");
         return NextResponse.json({ sucess: "Sucessfully added"});
    }
} 

export async function PUT(req, res) {
    let {id,name, email, password} = await req.json();

    const userIndex = users.findIndex((user) => user.id === id)

    if (userIndex === -1) {
        return NextResponse.json({result: "User not found"},
        {status: 404});
    }
    if (name) {
        users[userIndex].name = name
    }
    if (email) {
        users[userIndex].email = email
    }
    if (password) {
        users[userIndex].password = password
    }
    const updatedArray = users;
        const updatedData = JSON.stringify( updatedArray, null, 2)

        fs.writeFileSync('./app/util/db.js',  `export const users = ${updatedData}`,"utf-8");
         return NextResponse.json({ sucess: "Sucessfully Updated"});
}