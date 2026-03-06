import { NextRequest, NextResponse } from "next/server";

function getAllowedOrigins(host: string): string[] {
  const configured = process.env.CORS_ALLOWED_ORIGINS?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean) ?? [];

  const sameOriginHttp = `http://${host}`;
  const sameOriginHttps = `https://${host}`;

  return Array.from(new Set([...configured, sameOriginHttp, sameOriginHttps]));
}

function isAllowedOrigin(origin: string | null, host: string): boolean {
  if (!origin) {
    return false;
  }

  const allowedOrigins = getAllowedOrigins(host);
  return allowedOrigins.includes(origin);
}

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host") ?? "";
  const allowed = isAllowedOrigin(origin, host);

  if (request.method === "OPTIONS") {
    if (!allowed) {
      return new NextResponse(null, { status: 403 });
    }

    const preflightResponse = new NextResponse(null, { status: 204 });
    preflightResponse.headers.set("Access-Control-Allow-Origin", origin as string);
    preflightResponse.headers.set("Vary", "Origin");
    preflightResponse.headers.set("Access-Control-Allow-Credentials", "true");
    preflightResponse.headers.set("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
    preflightResponse.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-Requested-With"
    );
    return preflightResponse;
  }

  const response = NextResponse.next();

  if (allowed && origin) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Vary", "Origin");
    response.headers.set("Access-Control-Allow-Credentials", "true");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
