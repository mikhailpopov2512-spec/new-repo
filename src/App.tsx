import React, { useState } from 'react';

function App() {
  const [connected, setConnected] = useState(false);
  const [status, setStatus] = useState('Disconnected');

  const toggleConnection = () => {
    setConnected(!connected);
    setStatus(connected ? 'Disconnected' : 'Connected');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <header className="bg-black p-4 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            ⚡
          </div>
          <h1 className="text-2xl font-bold">Mikha VPN 3.9</h1>
        </div>
        <div className="text-sm text-gray-400">v3.9.0</div>
      </header>

      <main className="flex-1 p-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 rounded-3xl p-8 text-center mb-8">
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 transition-all ${connected ? 'bg-green-500' : 'bg-gray-700'}`}>
              {connected ? '✅' : '🔌'}
            </div>
            <h2 className="text-3xl font-semibold mb-2">{status}</h2>
            <p className="text-gray-400">Скорость: {connected ? '245 Мбит/с' : '—'}</p>
          </div>

          <button
            onClick={toggleConnection}
            className={`w-full py-4 text-xl font-semibold rounded-2xl transition-all ${connected ? 'bg-red-600 hover:bg-red-700' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110'}`}>
            {connected ? 'Отключиться' : 'Подключиться'}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;