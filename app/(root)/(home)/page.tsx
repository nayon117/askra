import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
    return (
        <div>
                Welcome to Homepage
                <UserButton afterSwitchSessionUrl="/" />
        </div>
    )
}
export default HomePage;
