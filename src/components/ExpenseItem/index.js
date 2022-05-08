import './style.css'
import Date from '../Date';
import Card from '../Card';

function ExpenseItem(props) {

    return (
        <>
            <li>
                <Card className='expense-item'>
                    <Date date={props.date} />
                    <div className='expense-item__description'>
                        <h2>{props.title}</h2>
                        <div className='expense-item__price'>
                            <p>{props.amount}</p>
                        </div>
                    </div>
                </Card>
            </li>

        </>
    )

}

export default ExpenseItem;