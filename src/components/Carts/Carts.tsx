import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {ICart} from "../../models/ICart.ts";
import {cartService} from "../../services/api.services.ts";
import type {ICartResponseModel} from "../../models/ICartResponseModel.ts";

export const Carts = () => {

    const {id} = useParams();

    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        if (id) {
            cartService.getCartsOfUser(id)
                .then(({carts}: ICartResponseModel) => {
                    setCarts(carts);
                });
        }
    }, [id]);

    return (
        <div>
            {
                carts.map((cart: ICart) => (<div key={cart.id}>
                    {cart.total}
                </div>))
            }

        </div>
    );
};