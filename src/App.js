import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';

function App() {
  const [orders, setOrders] = useState([]);

  const handleNewOrder = (order) => {
    const newOrders = [...orders, order];
    setOrders(newOrders);
    return newOrders.length; // 呼び出し番号 = 件数
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrderForm onSubmit={handleNewOrder} />} />
        <Route path="/list" element={<OrderList orders={orders} />} />
      </Routes>
    </Router>
  );
}

export default App;
