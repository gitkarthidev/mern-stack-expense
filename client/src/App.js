import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: form,
    });
    console.log(res);
  };
  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleInput}
          placeholder="Enter Transaction amount"
        />
        <input
          type="text"
          name="description"
          onChange={handleInput}
          value={form.description}
          placeholder="Enter Transaction details"
        />
        <input
          type="date"
          name="date"
          onChange={handleInput}
          value={form.date}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
