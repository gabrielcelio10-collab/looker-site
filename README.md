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

        <div className="lg:col-span-2 mt-6">
          <h3 id="portfolio" className="text-2xl font-bold mb-4">Portfólio — exemplos</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded shadow p-4">
              <div className="h-56 bg-yellow-100 rounded flex items-center justify-center text-gray-500">Imagem do dashboard (substitua pela sua)</div>
              <h4 className="font-semibold mt-3">Rota Mista — Controle de Realocação</h4>
              <p className="text-sm text-gray-600">Dashboard operacional com KPIs de realocação, gráficos por modal e distribuição por turno.</p>
            </div>

            <div className="bg-white rounded shadow p-4">
              <div className="h-56 bg-yellow-100 rounded flex items-center justify-center text-gray-500">Imagem do dashboard (substitua)</div>
              <h4 className="font-semibold mt-3">Entrega & Performance — Frota</h4>
              <p className="text-sm text-gray-600">Visão por rota, entregas por dia e comparativos históricos.</p>
            </div>
          </div>
        </div>

        <section id="servicos" className="lg:col-span-2 mt-6">
          <h3 className="text-2xl font-bold mb-4">Serviços</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold">Dashboard sob medida</h4>
              <p className="text-sm text-gray-600">Levantamento, construção e entrega final com integração automática.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold">Template + Implementação</h4>
              <p className="text-sm text-gray-600">Template pronto, adaptado aos seus dados e entregue em até 3 dias.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold">Treinamento & Suporte</h4>
              <p className="text-sm text-gray-600">Sessões ao vivo para sua equipe e documentação passo-a-passo.</p>
            </div>
          </div>
        </section>

        <section id="precos" className="lg:col-span-2 mt-6">
          <h3 className="text-2xl font-bold mb-4">Preços sugeridos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <div className="text-xl font-bold">Starter</div>
              <div className="text-2xl font-extrabold my-2">R$ 199</div>
              <div className="text-sm text-gray-600">Template + ajustes rápidos</div>
            </div>
            <div className="bg-white p-4 rounded shadow border-2 border-yellow-200">
              <div className="text-xl font-bold">Pro</div>
              <div className="text-2xl font-extrabold my-2">R$ 749</div>
              <div className="text-sm text-gray-600">Dashboard sob medida com integrações e treinamento</div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="text-xl font-bold">Premium</div>
              <div className="text-2xl font-extrabold my-2">R$ 1.500</div>
              <div className="text-sm text-gray-600">Projeto completo + manutenção mensal</div>
            </div>
          </div>
        </section>

        <section id="contato" className="lg:col-span-2 mt-6 bg-white rounded shadow p-6">
          <h3 className="text-2xl font-bold mb-4">Contato</h3>
          <p className="text-sm text-gray-600 mb-4">Vamos conversar sobre o seu dashboard? Envie um e-mail ou WhatsApp para solicitar proposta.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-sm font-semibold">E-mail</div>
              <div className="text-sm">gabrielcelio10@hotmail.com</div>
            </div>
            <div>
              <div className="text-sm font-semibold">WhatsApp</div>
              <div className="text-sm">+55 51 99536-1291</div>
            </div>
            <div>
              <div className="text-sm font-semibold">LinkedIn</div>
              <div className="text-sm">linkedin.com/in/gabrielcelio</div>
            </div>
          </div>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="p-3 border rounded" placeholder="Nome" />
            <input className="p-3 border rounded" placeholder="E-mail" />
            <input className="p-3 border rounded md:col-span-2" placeholder="Empresa (opcional)" />
            <textarea className="p-3 border rounded md:col-span-2" placeholder="Descreva seu projeto"></textarea>
            <button className="md:col-span-2 px-4 py-3 bg-yellow-400 rounded font-semibold">Enviar solicitação</button>
          </form>
        </section>

        <footer className="lg:col-span-2 text-center text-xs text-gray-500 mt-8 pb-8">© {new Date().getFullYear()} InsightDash — Consultoria em Looker Studio</footer>
      </main>
    </div>
  );
}
npm run build



