import { useAppContext } from "state/AppContext";
import styles from "styles/Filter.module.css";

type Props = {
	name: string;
	options: { name: string; value: string }[];
};

export default function Filter({ name, options }: Props) {
	const { filter, setFilter } = useAppContext();
	const [selectedFilterName, selectedFilterValue] = filter;
	const formattedFilterName = (name) => `/${name}s`;
	console.log('name', name);

	const handleChange = (e) => {
		if (e.target.value === "") {
			setFilter([]);
			console.log(selectedFilterName);
			return;
		}
		setFilter([formattedFilterName(name), e.target.value]);
	};

	return (
		<div className={styles.container}>
			<select
				className={styles.select}
				name={name}
				id=""
				onChange={handleChange}
				value={
					selectedFilterName === formattedFilterName(name)
						? selectedFilterValue
						: ""
				}
			>
				<option value="">{name}</option>
				{options.map(({ name, value }) => (
					<option value={value} key={value}>
						{name}
					</option>
				))}
			</select>
			<i aria-hidden
				className="fas fa-angle-down"
				style={{ position: 'absolute', right : 32, 'pointerEvents' : 'none' }}
			></i>
		</div>
	);
}
