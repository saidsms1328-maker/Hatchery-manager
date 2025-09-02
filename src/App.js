import React, { useState } from 'react';

function App() {
  const [batches, setBatches] = useState([]);
  const [form, setForm] = useState({ batch: '', eggs: '', fertility: '', hatchability: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBatches([...batches, { ...form, eggs: Number(form.eggs), fertility: Number(form.fertility), hatchability: Number(form.hatchability) }]);
    setForm({ batch: '', eggs: '', fertility: '', hatchability: '' });
  };

  // Dashboard calculations
  const totalEggs = batches.reduce((sum, b) => sum + b.eggs, 0);
  const avgFertility = batches.length ? (batches.reduce((sum, b) => sum + b.fertility, 0) / batches.length).toFixed(1) : 0;
  const avgHatch = batches.length ? (batches.reduce((sum, b) => sum + b.hatchability, 0) / batches.length).toFixed(1) : 0;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🐣 Hatchery Manager</h1>

      {/* Dashboard */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-lg font-semibold">Total Eggs</p>
          <p className="text-xl">{totalEggs}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-lg font-semibold">Avg Fertility %</p>
          <p className="text-xl">{avgFertility}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-lg font-semibold">Avg Hatchability %</p>
          <p className="text-xl">{avgHatch}</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
        <div className="grid grid-cols-4 gap-4">
          <input className="border p-2 rounded" name="batch" placeholder="Batch" value={form.batch} onChange={handleChange} required />
          <input className="border p-2 rounded" name="eggs" placeholder="Eggs Set" type="number" value={form.eggs} onChange={handleChange} required />
          <input className="border p-2 rounded" name="fertility" placeholder="Fertility %" type="number" value={form.fertility} onChange={handleChange} required />
          <input className="border p-2 rounded" name="hatchability" placeholder="Hatchability %" type="number" value={form.hatchability} onChange={handleChange} required />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add Batch</button>
      </form>

      {/* Table */}
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Batch</th>
            <th className="p-2">Eggs Set</th>
            <th className="p-2">Fertility %</th>
            <th className="p-2">Hatchability %</th>
          </tr>
        </thead>
        <tbody>
          {batches.map((b, i) => (
            <tr key={i} className="border-t text-center">
              <td className="p-2">{b.batch}</td>
              <td className="p-2">{b.eggs}</td>
              <td className="p-2">{b.fertility}</td>
              <td className="p-2">{b.hatchability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
