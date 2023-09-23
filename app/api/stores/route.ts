import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    console.log(auth);
    const { name } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is Required", { status: 400 });
    }

    const store = prismadb.store.create({
      data: {
        name,
        userId,
      },
    });

    store.then((res) => {
      console.log(res);
    });

    const res = await prismadb.store.findUnique({
      where: {
        id: "a39a72b9-b0eb-40eb-b93d-4e1e8b40d81c",
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
