import { SignIn } from '@clerk/nextjs';
export default function SignInPage() {
    return(
        <div className="flex flex-col items-center justify-between py-5">
            <SignIn />
        </div>
    );
}