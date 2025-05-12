export const getCurrentUser = async (): Promise<string> => {
    const user = await fetch("/api/method/frappe.auth.get_logged_user");
    const userData = await user.json();
    if (userData?.message) {
        return userData.message as string;
    }
    throw new Error("Failed to fetch user");
}