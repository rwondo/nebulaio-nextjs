import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhopSignIn from "@/components/whop-sign-in";
export default async function SignIn() {
  return (
    <MaxWidthWrapper className='mb-12 mt-28 sm:mt-20 flex flex-col items-center justify-center text-center'>
    <main className="">
      <div>
      <Card className="w-full max-w-md">
        <CardHeader className="flex gap-3 text-xl">
          <CardTitle className="">Welcome back!</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 text-sm">
          <p>
            If you&apos;ve bought&nbsp;
            <span className="font-semibold text-primary">NebulaIO</span>
            &nbsp;access through&nbsp;
            <span className="font-semibold text-whop">Whop</span>, sign in to
            start your journey!
          </p>
          <WhopSignIn />
        </CardContent>
      </Card>
      </div>
    </main>
    </MaxWidthWrapper>


  );
}
