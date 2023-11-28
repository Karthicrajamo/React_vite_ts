import React from "react";

interface Expense {
	id: number;
	description: string;
	amount: number;
	category: string;
}

interface Props {
	expense: Expense[];
	onDelete: (id: number) => void;
}

const ExpenseList = ({ expense, onDelete }: Props) => {
	{
		if (expense.length == 0) return null;
	}
	return (
		<>
			<table className="table table-bordered">
				<thead>
					<tr>
						<td>Description</td>
						<td>Amount</td>
						<td>Category</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{expense.map((e) => (
						<tr key={e.id}>
							<td>{e.description}</td>
							<td>{e.amount}</td>
							<td>{e.category}</td>
							<td>
								<button
									className="btn btn-outline-danger"
									onClick={() => onDelete(e.id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td>Total</td>
						<td>{expense.reduce((acc, e) => e.amount + acc, 0).toFixed(2)}</td>
						<td></td>
						<td></td>
					</tr>
				</tfoot>
			</table>
		</>
	);
};

export default ExpenseList;
