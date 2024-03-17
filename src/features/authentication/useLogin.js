import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            // console.log(user);
            queryClient.setQueryData(["user"], user.user);
            navigate("/app", { replace: true });
        },
        onError: (error) => {
            console.error(error);
            toast.error(`Provided email or password are incorrect`);
        },
    });
    return { login, isLoading };
}