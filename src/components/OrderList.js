function OrderList({ orders }) {
    return (
      <div>
        <h1>注文一覧</h1>
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              {index + 1}番｜{order.name}｜{order.pancake}｜{order.drink}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default OrderList;
  