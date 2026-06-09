import { useEffect, useState } from "react";
import { loadAuthProducts, refresh } from "../services/api.service";
import { Products } from "../components/Products/Products.tsx";
import type { IProduct } from "../models/IProduct.ts";

export const AuthResourcesPage = () => {
    // Створюємо стан для збереження масиву продуктів.
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        // Оголошуємо внутрішню асинхронну функцію для отримання даних
        const fetchData = async () => {
            try {
                const data = await loadAuthProducts();

                // Якщо запит успішний, записуємо отримані продукти в стан
                setProducts(data);
            } catch (firstError) {
                console.log("Перший запит невдалий (можливо, протух токен):", firstError);

                try {
                    // Викликаємо функцію оновлення токенів.
                    // Вона бере з localStorage refreshToken, відправляє на сервер і перезаписує токени на нові.
                    await refresh();

                    // Токени оновлено, робимо повторний запит за продуктами.
                    const dataAfterRefresh = await loadAuthProducts();

                    // Якщо спроба успішна, записуємо дані в стан
                    setProducts(dataAfterRefresh);
                } catch (refreshError) {
                    console.log("Рефреш теж не вдався. Користувач повністю розлогінений:", refreshError);
                }
            }
        };

        fetchData();

    }, []);

    return (
        <div>
            {/* Рендеримо компонент списку продуктів і передаємо йому стан через пропси */}
            <Products products={products} />
        </div>
    );
};