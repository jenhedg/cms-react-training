import React from "react";
import Filter from "./Filter";
import { CREATORS, CHARACTERS } from "Lib/filterData";

export function FilterForm() {
	return (
		<form className="form__cont">
			<h3 className="form__title">Filter by:</h3>
			<Filter name="creator" options={CREATORS} />
			<Filter name="character" options={CHARACTERS} />
		</form>
	);
}
