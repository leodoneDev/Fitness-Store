import connectDB from "@/DB/connectDB";
import AuthCheck from "@/middleware/AuthCheck";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";


export const dynamic  = 'force-dynamic'

export async function POST(req: Request) {
  try {
    await connectDB();
    const isAuthenticated = await AuthCheck(req);

    if (isAuthenticated === 'admin') {
      
        const formData = await req.formData();
        const file: File | null = formData.get('file') as unknown as File;
        if (!file || !(file instanceof Blob)) {
            return NextResponse.json({ success: false, message: 'No file uploaded' });
          }
    
        if (!file) {
          return NextResponse.json({ success: false, message: 'No file uploaded' });
        }
    
        // Read the file content
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
    
        // Generate a unique filename
        const fileName = `${Date.now()}-${file.name}`;
        const uploadPath = path.join(process.cwd(), 'public/uploads', fileName);
    
        // Save file to disk
        await writeFile(uploadPath, buffer);
    
        // Save file record into the database
        const fileUrl = `/uploads/${fileName}`;
        
        return NextResponse.json({ success: true, url: `${fileUrl}` });
    } else {
      return NextResponse.json({ success: false, message: "You are not authorized." });
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ success: false, message: 'Something went wrong while uploading.' });
  }
}

