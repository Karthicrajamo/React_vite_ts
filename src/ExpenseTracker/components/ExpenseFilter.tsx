import React from "react";
import category from "../ExpenseCategory";
interface Props {
	onSelectCategories: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategories }: Props) => {
	return (
		<select
			className="form-select"
			onChange={(event) => onSelectCategories(event.target.value)}
		>
			<option value="">All categories</option>
			{category.map((e) => (
				<option value={e} key={e}>
					{e}
				</option>
			))}
		</select>
	);
};

export default ExpenseFilter;
