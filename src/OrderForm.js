import React, { useState } from "react";

function OrderForm() {
  const [name, setName] = useState("");
  const [pancake, setPancake] = useState("");
  const [drink, setDrink] = useState("");
  const [total, setTotal] = useState(0);

  const handlePancakeChange = (e) => setPancake(e.target.value);
  const handleDrinkChange = (e) => setDrink(e.target.value);

  const calculateTotal = () => {
    let pancakePrice = pancake === "不要" ? 0 : 250;
    let drinkPrice = drink === "不要" ? 0 : 100;
    setTotal(pancakePrice + drinkPrice);
  };

  return (
    <div>
      <h1>パンケーキ&ドリンク注文フォーム</h1>
      <form>
        <div>
          <label>お名前:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label>パンケーキの種類:</label>
          <select value={pancake} onChange={handlePancakeChange}>
            <option value="">選択してください</option>
            <option value="プレーン">プレーン</option>
            <option value="チョコ">チョコ</option>
            <option value="はちみつ">はちみつ</option>
            <option value="不要">不要</option>
          </select>
        </div>

        <div>
          <label>ドリンクの種類:</label>
          <select value={drink} onChange={handleDrinkChange}>
            <option value="">選択してください</option>
            <option value="コーヒー">コーヒー</option>
            <option value="オレンジジュース">オレンジジュース</option>
            <option value="不要">不要</option>
          </select>
        </div>

        <div>
          <p>合計金額: ¥{total}</p>
        </div>

        <button type="button" onClick={calculateTotal}>合計を計算</button>
      </form>
    </div>
  );
}

export default OrderForm;
