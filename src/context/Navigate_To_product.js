import { useNavigate } from "react-router-dom";

export function useNavigation() {
    const navigate = useNavigate();
    return {
        goHome: () => navigate('/'),
        goProduct: () => navigate('/products'),
        goCart: () => navigate('/cart'),
        goProfile: () => navigate('/profile')
    }
}