import React from "react";
import category from "../ExpenseCategory";

interface Prob {
	onSelect: (data: string) => void;
}

const ExpenseFilter = ({ onSelect }: Prob) => {
	return (
		<>
			<select
				name="form-select"
				onChange={(event) => onSelect(event.target.value)}
			>
				<option value="">All category</option>
				{category.map((e) => (
					<option key={e} value={e}>
						{e}
					</option>
				))}
			</select>
		</>
	);
};

export default ExpenseFilter;
