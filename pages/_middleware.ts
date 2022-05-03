// pages 루트에 위치한 글로벌 미들웨어, 페이지 이동뿐아니라 api 핸들러에 요청을 보낼 때도 실행됨
import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";
export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log(ev);
  if (req.ua?.isBot) {
    return new Response("Plz don't be a Bot~~", { status: 403 });
  }
  console.log(req.url);
  if (!req.url.includes("/api")) {
    if (!req.url.includes("/enter") && !req.cookies.carrotsession) {
      return NextResponse.redirect(new URL("/enter", req.url));
    }
  }
  // console.log(req.geo.city); // 호스팅 업체에 의해 제공됨
  //return NextResponse.json({ ok: true });
}
