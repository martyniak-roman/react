import type {Simpson} from "../../models/ICharacter.ts";
import type {ReactNode} from "react";

interface CharacterComponentProps {
    item: Simpson,
    children: ReactNode
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className="my-10">
            <h3>{item.name} {item.surname}</h3>
            <p>{children}</p>
        </div>
    );
};