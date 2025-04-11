import React, { useState } from 'react';

function OrderForm() {
  const [name, setName] = useState('');
  const [pancake, setPancake] = useState('');
  const [drink, setDrink] = useState('');
  const [orders, setOrders] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || (!pancake && !drink)) return;

    const newOrder = { name, pancake, drink };
    setOrders([...orders, newOrder]);

    // 入力をクリア
    setName('');
    setPancake('');
    setDrink('');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">パンケーキ＆ドリンク注文フォーム</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>お名前：</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="border p-2" />
        </div>

        <div>
          <label>パンケーキの種類：</label>
          <select value={pancake} onChange={(e) => setPancake(e.target.value)} className="border p-2">
            <option value="">選択してください</option>
            <option value="プレーン">プレーン</option>
            <option value="チョコ">チョコ</option>
            <option value="はちみつ">はちみつ</option>
            <option value="不要">不要</option>
          </select>
        </div>

        <div>
          <label>ドリンクの種類：</label>
          <select value={drink} onChange={(e) => setDrink(e.target.value)} className="border p-2">
            <option value="">選択してください</option>
            <option value="コーヒー">コーヒー</option>
            <option value="オレンジジュース">オレンジジュース</option>
            <option value="不要">不要</option>
          </select>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          送信
        </button>
      </form>

      {/* 一覧表示 */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">注文一覧</h2>
        <ul>
          {orders.map((order, index) => (
            <li key={index} className="border-b py-1">
              {index + 1}. {order.name} さん：{order.pancake} / {order.drink}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OrderForm;
