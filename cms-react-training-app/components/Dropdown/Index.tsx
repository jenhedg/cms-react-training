import  { AccessibleHider } from "../AccessibleHider/Index";
import styles from "styles/Dropdown.module.css";

type Props = {
	show: boolean,
	containerStyles?: string,
	children: React.ReactNode
}

export function Dropdown ({ show, children, containerStyles = "" }: Props) {
	return (
		<div className="container ">
			<div className={styles.showHide}>
				<AccessibleHider
					className={`${containerStyles}
					${show ? styles.show : ""}`}
					active={show}
				>
					{children}
				</AccessibleHider>
			</div>
		</div>
	)

}