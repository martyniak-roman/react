import {CharacterComponent} from "../character-component/CharacterComponent.tsx";
import {simpsons} from "../../data/array.ts";

export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((value, index) => <CharacterComponent item={value} key={index}>{value.info}</CharacterComponent>)
            }
        </div>
    );
};