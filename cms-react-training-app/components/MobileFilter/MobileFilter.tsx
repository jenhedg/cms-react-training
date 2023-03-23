import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FilterForm } from "../Filter/Index";
import { Favorites }  from "../Favorites/Favorites";
import { Dropdown } from "../Dropdown/Index";
import styles from "styles/MobileFilter.module.css";

type displayStates = "none" | "filter" | "favorites";

export function MobileFilterBar() {
	const [displayState, setDisplayState] = useState<displayStates>("none");

	const handleClick = (state) => {
		setDisplayState((curr) => (curr === state ? "none" : state));
		console.log("display State", state);
	};

	return (
		<div className={styles.containerOuter}>
			<div className={styles.buttonBar}>
				{/*Filter*/}
				<button
					onClick={() => handleClick("filter")}
					className={styles.buttonBarButton}
				>
					{displayState === "filter" ? "Hide" : ""} Filter{" "}
					<FontAwesomeIcon icon="filter" />
				</button>
				{/*Faves*/}
				<button
					onClick={() => handleClick("favorites")}
					className={styles.buttonBarButton}
				>
					{displayState === "favorites" ? "Hide" : "Show"} Favorites{" "}
					<FontAwesomeIcon icon="bolt" />
				</button>
			</div>
			<Dropdown show={displayState === "filter"} containerStyles={styles.filterFavoritesCont}>
				<FilterForm />
				<button
					onClick={() => handleClick("filter")}
					className={styles.bottomButton}
				>
					<div>Hide Filter</div>

					<FontAwesomeIcon className="{styles.iconHide}" icon="filter" />
				</button>
			</Dropdown>
			<Dropdown show={displayState === "favorites"} containerStyles={styles.filterFavoritesCont}>
				<Favorites />
				<button
					onClick={() => handleClick("favorites")}
					className={styles.bottomButton}
				>
					<div>Hide Favorites</div>
					<FontAwesomeIcon className={styles.iconClose} icon="bolt" />
				</button>
			</Dropdown>
		</div>
	);
}