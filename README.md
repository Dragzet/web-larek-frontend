# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

# Архитектура

### `ICart` (Компонент корзины для покупок)
- `items: Map<string, number>` — товары в корзине, где ключ — ID товара, а значение — количество.
- `add(id: string): void` — метод для добавления товара по ID.
- `remove(id: string): void` — метод для удаления товара по ID.

### `ICatalog` (Компонент каталога товаров)
- `items: IProduct` — список товаров.
- `setItems(items: IProduct[]): void` — метод для установки списка товаров.
- `getProduct(id: string): IProduct` — метод для получения товара по ID.

### `IProduct` (Модель данных товара для расположения на странице)
- `id: string` — уникальный идентификатор.
- `description: string` — описание.
- `image: string` — ссылка на изображение.
- `title: string` — название.
- `category: string` — категория.
- `price: number | null` — цена (может быть `null`, если цена не указана).

### `IOrderForm` (Модель формы для заказа)
- `payment?: string` — способ оплаты.
- `address?: string` — адрес доставки.
- `phone?: string` — телефон.
- `email?: string` — email.
- `total?: string | number` — итоговая стоимость заказа.

### `IOrder` (Модель сформированного заказа, используется для обращения к серверу)
- Наследует `IOrderForm` и добавляет:
  - `items: string[]` — массив ID товаров в заказе.

### `OrderError` (Модель ошибок (Неправильные данные введены))
- `Partial<Record<keyof IOrder, string>>` — это объект, где ключами могут быть поля заказа (`IOrder`), а значениями — сообщения об ошибках.

### `IOrderResponse` (Модель ответа от сервера)
- `id: string` — ID заказа.
- `total: number` — итоговая стоимость заказа.

### `IView` (Модель для перевода объекта в html-элемент)
- `render(data?: object): HTMLElement` — метод для рендеринга HTML-элемента.

### `IViewConstructor` (Модель для перевода html-элемент в объект)
- Определяет сигнатуру конструктора классов, реализующих `IView`.
- Принимает `container: HTMLElement` (куда рендерится представление) и `events?: IEvents` (объект событий).


