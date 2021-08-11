import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import React, { useState, useEffect, useContext } from "react";

export const Databank = () => {
	const { store, actions } = useContext(Context);

	actions.getPeople();

	return (
		<div className="text-center mt-5">
			<h1>Hola, este es el databank</h1>
			<h1>{JSON.stringify(store.peopleOfStarWars)}</h1>
		</div>
	);

};
