import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800 font-sans">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">InsightDash — Consultoria em Looker Studio</h1>
        <nav className="space-x-4">
          <a href="#servicos" className="text-sm hover:underline">Serviços</a>
          <a href="#portfolio" className="text-sm hover:underline">Portfolio</a>
          <a href="#precos" className="text-sm hover:underline">Preços</a>
          <a href="#contato" className="text-sm px-3 py-2 bg-yellow-300 rounded shadow">Contato</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <section>
          <h2 className="text-4xl font-bold mb-4">Transforme dados em decisões</h2>
          <p className="mb-6">Crio dashboards profissionais em Looker Studio que entregam visibilidade operacional, relatórios automatizados e insights acionáveis para times de logística, marketing e vendas.</p>

          <ul className="space-y-3 mb-6">
            <li>✅ Dashboards operacionais prontos para decisão</li>
            <li>✅ Integrações com Google Sheets, BigQuery e APIs</li>
            <li>✅ Treinamento e documentação para sua equipe</li>
          </ul>

          <div className="flex gap-3">
            <a href="#contato" className="px-5 py-3 bg-yellow-400 rounded font-semibold shadow">Solicitar proposta</a>
            <a href="#portfolio" className="px-5 py-3 border rounded">Ver exemplos</a>
          </div>
        </section>

        <aside className="bg-white rounded shadow p-6">
          <h3 className="font-bold mb-2">Oferta rápida</h3>
          <p className="text-sm mb-4">Dashboard operacional (modelo) + ajustes rápidos — ideal para validar o impacto.</p>
          <div className="text-3xl font-extrabold mb-2">R$ 199</div>
          <p className="text-xs text-gray-600 mb-4">(modelo: entrega em até 5 dias úteis)</p>
          <a href="#contato" className="block text-center px-4 py-2 bg-yellow-300 rounded font-semibold">Quero esse pacote</a>
        </aside>
      </main>
    </div>
  );
}