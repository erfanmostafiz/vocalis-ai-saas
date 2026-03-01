import { auth } from "@/lib/auth";
import { SignInView } from "@/modules/auth/ui/views/sign-in-view";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    // if session already exists, redirect the user back to the root page (the home page)
    if (!!session) {
        redirect("/");
    }

    return <SignInView />;
};

export default Page;
