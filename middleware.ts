import { NextResponse, type NextRequest } from "next/server";

const CANONICAL_HOST = "bridgelandsdetached.com";
const ALIAS_HOSTS = new Set(["www.bridgelandsdetached.com"]);

function isSeoFile(path: string): boolean {
  return (
    path === "/robots.txt" ||
    path === "/robots.txt/" ||
    path === "/sitemap.xml" ||
    path === "/sitemap.xml/" ||
    path === "/sitemap.txt" ||
    path === "/sitemap.txt/" ||
    path.startsWith("/sitemap/")
  );
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0];
  const path = request.nextUrl.pathname;

  if (isSeoFile(path)) {
    if (path.endsWith("/") && path !== "/") {
      const url = request.nextUrl.clone();
      url.pathname = path.slice(0, -1);
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  if (host && ALIAS_HOSTS.has(host)) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  if (path !== "/" && path.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = path.slice(0, -1);
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon|images/).*)"],
};
