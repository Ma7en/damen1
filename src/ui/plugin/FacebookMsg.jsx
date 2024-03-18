"use client";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
    return (
        <>
            <FacebookProvider appId="123456789" chatSupport>
                <CustomChat pageId="123456789" minimized={true} />
            </FacebookProvider>
        </>
    );
};

export default FacebookMsg;
