import React, { useState } from 'react';
import './OrderForm.css';

function OrderForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [pancakeType, setPancakeType] = useState('');
  const [drinkType, setDrinkType] = useState('');
  const [callNumber, setCallNumber] = useState(null);

  const handleSubmit = async () => {
    const payload = {
      name,
      pancakeType,
      drinkType
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxGGrFAjZFZWtSHALawu-XG_X8raFUvLb6mV0_l8WI81gn21ZYfaA32Z79eUQ0J_E5T0A/exec", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const result = await response.json();
      setCallNumber(result.callNumber); // 呼び出し番号を表示

      if (onSubmit) {
        onSubmit(payload); // React側のstate更新（一覧表示用）
      }
    } catch (error) {
      console.error("送信エラー:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>パンケーキ注文フォーム</h2>
      <label>名前</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>パンケーキの種類</label>
      <select value={pancakeType} onChange={(e) => setPancakeType(e.target.value)}>
        <option value="">選択してください</option>
        <option value="プレーン">プレーン</option>
        <option value="チョコ">チョコ</option>
        <option value="はちみつ">はちみつ</option>
      </select>

      <label>ドリンクの種類</label>
      <select value={drinkType} onChange={(e) => setDrinkType(e.target.value)}>
        <option value="">選択してください</option>
        <option value="コーヒー">コーヒー</option>
        <option value="オレンジジュース">オレンジジュース</option>
      </select>

      <button onClick={handleSubmit}>送信</button>

      {callNumber && (
        <div className="call-number">呼び出し番号：{callNumber}番</div>
      )}
    </div>
  );
}

export default OrderForm;
