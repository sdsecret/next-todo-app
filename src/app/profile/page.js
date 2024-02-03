import { UserProfile } from '@clerk/nextjs';
export default function SignUpPage() {
    return (
        <div className="flex flex-col items-center justify-between py-5">
            <UserProfile />
        </div>
    );
}