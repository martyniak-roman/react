import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICart} from "../models/ICart.ts";
import {cartService} from "../services/api.service.ts";
import type {ICartResponseModel} from "../models/ICartResponseModel.ts";

export default function CartsList() {
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