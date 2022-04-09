import type { NextRequest, NextFetchEvent } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log("Chat only middleware"); // chats 폴더에 위치한 chats 경로내의 미들웨어
}
