import { TextCustomComponent } from "../../global/components/TextCustom/textCustom.component";
import { ContainerComponent } from "../../global/components/Container/container.component";

export const PortfolioScreen = () => {
    return (
        <ContainerComponent addSafeAreaInsets={true}>
            <TextCustomComponent text="Portfolio" fontSize="3xl" color="primary" fontWeight="bold" />
            <TextCustomComponent text="Esta es la pantalla de portfolio" fontSize="md" color="secondary" fontWeight="regular" />
        </ContainerComponent>
    )
}