import styled from "@emotion/styled";
import React, { ChangeEvent } from "react";

interface IProps
	extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "onChange"> {
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Root = styled.div`
	width: 100%;

	input {
		padding: 0;
		width: 100%;
		outline: none;
		border: none;
		background-color: transparent;

		color: ${({ theme }) => theme.colors.textPrimary};

		::placeholder {
			color: ${({ theme }) => theme.colors.textSecondary};
		}
	}
`;

const Input: React.FC<IProps> = ({ value, onChange, placeholder, ...rest }) => {
	return (
		<>
			<Root {...rest}>
				<input onChange={onChange} value={value} placeholder={placeholder} />
			</Root>
		</>
	);
};
export default Input;
