// Update: Included roles functionality
const useAuth = () => {
    // ...existing code...
    const roles = getUserRoles(); // function to get user roles
    return { user, roles };
};

export default useAuth;