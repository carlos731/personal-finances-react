import { HashLoader } from "react-spinners"
import { useTheme } from "styled-components";
import { Container, Label } from "./styles";

export const Loading = () => {
    const theme = useTheme();

    return (
        <Container>
            <HashLoader color={theme.COLORS.primary} /> {/* https://www.davidhu.io/react-spinners/ */}
            <Label>Por favor aguarde...</Label>
        </Container>
    );
}