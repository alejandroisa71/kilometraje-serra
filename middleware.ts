import { auth } from "./auth";
 
export default auth((req)=>{
    const isLoggedIn = !!req.auth;
    console.log("ROUTE:", req.nextUrl.pathname)
    console.log("ISLOGGEDIN", isLoggedIn)
});
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};