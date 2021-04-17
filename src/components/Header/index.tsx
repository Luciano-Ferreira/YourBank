import logoImg from '../../assets/logoYB.png';
import { Container, Content } from './styles';

interface IHeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }:IHeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Your Bank"/>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}