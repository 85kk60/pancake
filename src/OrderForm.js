import React, { useState } from 'react';

function OrderForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [pancake, setPancake] = useState('');
  const [drink, setDrink] = useState('');
  const [number, setNumber] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = { name, pancake, drink };
    const orderNumber = onSubmit(newOrder); // App側で番号発行
    setNumber(orderNumber);
  };

  return (
    <div>
      <h1>パンケーキ&ドリンク注文フォーム</h1>
      {number ? (
        <h2>ご注文ありがとうございます！ 呼び出し番号: {number}</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="お名前" required />
          <select value={pancake} onChange={(e) => setPancake(e.target.value)} required>
            <option value="">パンケーキを選択</option>
            <option value="プレーン">プレーン</option>
            <option value="チョコ">チョコ</option>
            <option value="はちみつ">はちみつ</option>
          </select>
          <select value={drink} onChange={(e) => setDrink(e.target.value)} required>
            <option value="">ドリンクを選択</option>
            <option value="コーヒー">コーヒー</option>
            <option value="オレンジジュース">オレンジジュース</option>
          </select>
          <button type="submit">送信</button>
        </form>
      )}
    </div>
  );
}

export default OrderForm;
