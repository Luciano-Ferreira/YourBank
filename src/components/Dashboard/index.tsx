import { Summary } from './Summary';
import { TransactionTable } from './TransactionsTable';
import { Container } from './styles';
import { useContext } from 'react';
import { TransactionsContext } from '../../context/TransactionsContext';

export function Dashboard() {
    const data = useContext(TransactionsContext)

    return(
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    )
}