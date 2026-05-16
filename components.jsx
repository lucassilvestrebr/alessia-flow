/* global React */
const { useState, useEffect, useRef } = React;

// ============================================================
// ICONS
// ============================================================
const I = {
  arrow: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>,
  check: () => <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M6.5 11.5 3 8l1.4-1.4L6.5 8.7l5.1-5.1L13 5z" /></svg>,
  play: () => <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M3 2v8l8-4z" /></svg>,
  linkedin: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3h-17A.5.5 0 003 3.5v17a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5zM8.6 18.3H5.7V9.7h2.9v8.6zM7.1 8.4A1.7 1.7 0 115 6.7a1.7 1.7 0 012.1 1.7zm11.2 9.9h-2.9v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3H9.5V9.7h2.8v1.2a3.1 3.1 0 012.8-1.5c3 0 3.5 2 3.5 4.5z" /></svg>,
  mail: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
};

// ============================================================
// NAV
// ============================================================
function Nav({ onDemoClick, registerUrl }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={"nav-wrap " + (scrolled ? "scrolled" : "")}>
      <nav className="nav">
        <a className="brand" href="#">
          <img src="uploads/VEROSS-ALESSIAFLOW-LOGO-165-x60-transp.svg" alt="AlessIA Flow" className="brand-logo" style={{ height: 44 }} />
        </a>
        <div className="nav-links">
          <a href="#features">Recursos</a>
          <a href="#how">Como funciona</a>
          <a href="comparativos/index.html">Comparativos</a>
          <a href="#pricing">Preços</a>
          <a href="central-de-ajuda.html">Ajuda</a>
        </div>
        <div className="nav-cta">
          <a href="https://flow.alessia.app.br/login" className="btn btn--ghost">Entrar</a>
          <a href={registerUrl} className="btn btn--primary">Começar grátis</a>
        </div>
      </nav>
    </div>);

}

// ============================================================
// HERO
// ============================================================
function Hero({ onDemoClick, registerUrl }) {
  return (
    <section className="hero">
      {/* Floating elements */}
      <div className="hero-float float-note">
        Convite aceito por<br />Marina, CMO 🎉
      </div>
      <div className="hero-float float-check">
        <div className="box"><I.check /></div>
      </div>
      <div className="hero-float float-reminders">
        <div className="header-row">
          <h4>Próximas etapas</h4>
          <span className="tag">HOJE</span>
        </div>
        <div className="row"><span className="pip"></span> Convite — Lucas K. <span className="time">09:00</span></div>
        <div className="row"><span className="pip"></span> Follow-up — Bruna A. <span className="time">10:30</span></div>
        <div className="row"><span className="pip"></span> Mensagem 2 — João F. <span className="time">14:00</span></div>
      </div>
      <div className="hero-float float-clock">
        <div className="face"></div>
      </div>

      <div className="hero-inner">
        <div className="hero-orb">
          <img src="uploads/VEROSS-ALESSIAFLOW-SYMBOL-1000X1000-transp.svg" alt="AlessIA Flow Symbol" style={{ width: 44, height: 44, objectFit: "contain" }} />
        </div>
        <h1>
          Sua plataforma de prospecção<br />
          <span className="muted">no LinkedIn (e e-mail), no piloto automático.</span>
        </h1>
        <p className="lede">AlessIA Flow envia convites, mensagens e follow-ups com personalização por IA — texto, voz e vídeo. Sem instalar nada, com IPs dedicados e baixíssimo risco de banimento.

        </p>
        <div className="hero-cta">
          <a href={registerUrl} className="btn btn--primary btn--lg">
            Começar grátis por 14 dias <I.arrow />
          </a>
          <a className="btn btn--outline btn--lg" href="#how">
            Ver como funciona
          </a>
        </div>
        <div className="hero-meta">
          <span className="check"><I.check /> Sem cartão de crédito no trial</span>
          <span className="dot"></span>
          <span className="check"><I.check /> Cloud — sem extensão de navegador</span>
          <span className="dot"></span>
          <span className="check"><I.check /> Suporte em pt-BR</span>
        </div>
      </div>

      <div className="float-tasks">
        <h5>Campanha: Decisores SaaS · São Paulo</h5>
        <div className="task-row">
          <div className="icon">01</div>
          <div className="info">
            <div className="title">Visitar perfil</div>
            <div className="sub">412 / 412 contatos</div>
            <div className="bar"><span style={{ width: "100%" }}></span></div>
          </div>
          <div className="pct">100%</div>
        </div>
        <div className="task-row">
          <div className="icon">02</div>
          <div className="info">
            <div className="title">Enviar convite (IA)</div>
            <div className="sub">298 / 412 contatos</div>
            <div className="bar"><span style={{ width: "72%" }}></span></div>
          </div>
          <div className="pct">72%</div>
        </div>
        <div className="task-row">
          <div className="icon">03</div>
          <div className="info">
            <div className="title">Follow-up por e-mail</div>
            <div className="sub">84 / 298 contatos</div>
            <div className="bar"><span style={{ width: "28%" }}></span></div>
          </div>
          <div className="pct">28%</div>
        </div>
      </div>

      <div className="float-integrations">
        <div className="head">
          <h5>Conectado em</h5>
          <span className="count">8 canais</span>
        </div>
        <div className="int-grid">
          <div className="int-tile solid" style={{ color: "#0A66C2" }}>in</div>
          <div className="int-tile solid">✉</div>
          <div className="int-tile solid">HS</div>
          <div className="int-tile solid">SF</div>
          <div className="int-tile">RD</div>
          <div className="int-tile">PD</div>
          <div className="int-tile">WA</div>
          <div className="int-tile">+12</div>
        </div>
      </div>
    </section>);

}

// ============================================================
// LOGOS
// ============================================================
function Logos() {
  const companies = ["Veross", "Inbotix", "Mag Seguros", "Tibox", "Ademicon Penha", "Careon Brasil"];
  return (
    <section className="logos">
      <p>Empresas que já prospectam com AlessIA Flow</p>
      <div className="logos-row">
        {companies.map((name, i) =>
        <div key={i} className="logo-item plain-text">{name}</div>
        )}
        <div className="logo-item plain-text" style={{ opacity: 0.35, fontStyle: "italic" }}>e muito mais.</div>
      </div>
    </section>);

}

// ============================================================
// FEATURES
// ============================================================
function Features() {
  return (
    <section className="section" id="features">
      <div className="section-head">
        <span className="eyebrow">Recursos principais</span>
        <h2>Tudo que um SDR sênior faria.<br />Em escala, 24 horas por dia.</h2>
        <p>Plataforma cloud operada pela Veross com suporte 100% em português, IPs dedicados, treinamento contínuo e comunidade exclusiva de prospecção.</p>
      </div>

      <div className="features">
        {/* 1 — IPs dedicados (span-3) */}
        <div className="feature-card span-3">
          <h3>IPs dedicados por conta</h3>
          <p>Cada perfil opera com um IP brasileiro fixo e exclusivo. Sem footprint compartilhado, sem flags do LinkedIn — a sua reputação fica blindada.</p>
          <div className="preview">
            <div style={{ padding: "20px 24px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--ink-3)" }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: "oklch(60% 0.18 145)", boxShadow: "0 0 0 4px oklch(60% 0.18 145 / 0.2)" }}></span>
                Conexão ativa
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, fontFamily: "var(--font-mono)", fontSize: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--ink-2)" }}><span>Perfil</span><b style={{ color: "var(--ink)" }}>marina.alves@..</b></div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--ink-2)" }}><span>IP dedicado</span><b style={{ color: "var(--ink)" }}>177.85.42.118</b></div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--ink-2)" }}><span>Localização</span><b style={{ color: "var(--ink)" }}>São Paulo · BR</b></div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--ink-2)" }}><span>Limite diário</span><b style={{ color: "var(--ink)" }}>30 convites</b></div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 — IA personalização (span-3) */}
        <div className="feature-card span-3">
          <h3>Personalização com IA: texto, voz e vídeo</h3>
          <p>A AlessIA lê o perfil de cada lead e escreve mensagens que parecem 100% escritas à mão. Adicione um áudio ou um vídeo personalizado em um clique.</p>
          <div className="preview preview-ai">
            <div className="chat">Vi que você tocou o turnaround da operação na Korpus em 2024. Como ficou o ciclo de venda depois do remix do funil?</div>
            <div className="chat user">Manda mais — adoraria entender melhor.</div>
            <div className="chips">
              <span className="chip">Tom: consultivo</span>
              <span className="chip">2 emojis máx</span>
              <span className="chip">+ áudio 18s</span>
            </div>
          </div>
        </div>

        {/* 3 — Multi-canal (span-2) */}
        <div className="feature-card span-2">
          <h3>LinkedIn + E-mail no mesmo fluxo</h3>
          <p>Sequências cross-channel orquestradas pela IA: muda de canal sozinha quando faz sentido.</p>
          <div className="preview preview-flow">
            <div className="node"><span className="pip"></span> Visitar perfil</div>
            <div className="arrow"></div>
            <div className="node"><span className="pip"></span> Convite + nota IA</div>
            <div className="label">Aguarda 2 dias</div>
            <div className="node dim"><span className="pip"></span> E-mail follow-up</div>
            <div className="node dim"><span className="pip"></span> Mensagem InMail</div>
          </div>
        </div>

        {/* 4 — Multi-conta (span-2) */}
        <div className="feature-card span-2">
          <h3>Multi-conta nativo</h3>
          <p>Gerencie a operação inteira do time em um painel só, com papéis e auditoria.</p>
          <div className="preview">
            <div style={{ padding: 16, height: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
              { n: "Marina A.", r: "SDR · BR", a: 312, c: "260" },
              { n: "Lucas K.", r: "AE · BR", a: 287, c: "260" },
              { n: "Bruna F.", r: "SDR · BR", a: 294, c: "30" },
              { n: "João T.", r: "Manager", a: 78, c: "120" }].
              map((u, i) =>
              <div key={i} style={{ background: "var(--surface)", border: "1px solid var(--line-2)", borderRadius: 8, padding: 8, display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 18, height: 18, borderRadius: 999, background: `linear-gradient(135deg, oklch(85% 0.1 ${u.c}), oklch(60% 0.15 ${u.c}))`, color: "white", display: "grid", placeItems: "center", fontSize: 9, fontWeight: 600 }}>{u.n[0]}</div>
                    <span style={{ fontSize: 11, fontWeight: 600 }}>{u.n}</span>
                  </div>
                  <div style={{ fontSize: 9, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>{u.r}</div>
                  <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--ink-2)" }}>{u.a} convites</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 5 — Dashboard stats (span-2) */}
        <div className="feature-card span-2">
          <h3>Dashboards de performance</h3>
          <p>Veja taxa de aceite, resposta, agendamento e SQL por campanha, etapa e SDR.</p>
          <div className="preview preview-stats">
            <div className="stat">
              <div className="num">48%</div>
              <div className="lbl">Aceite</div>
              <div className="delta">+12% vs mês anterior</div>
            </div>
            <div className="stat">
              <div className="num">19%</div>
              <div className="lbl">Resposta</div>
              <div className="delta">+4,2pp</div>
            </div>
            <div className="stat">
              <div className="num">128</div>
              <div className="lbl">Reuniões</div>
              <div className="delta">+38 reuniões</div>
            </div>
            <div className="stat">
              <div className="num">R$2,3M</div>
              <div className="lbl">Pipeline gerado</div>
              <div className="delta">YTD</div>
            </div>
          </div>
        </div>

        {/* 6 — Suporte BR (span-4) */}
        <div className="feature-card span-4">
          <h3>Suporte 100% em português, comunidade no WhatsApp e masterclasses incluídas</h3>
          <p>Você não está sozinho. Time de especialistas em prospecção, vendas e marketing operando no fuso brasileiro, com masterclasses e templates revisados toda semana.</p>
          <div className="preview" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, padding: 16 }}>
            {[
            { t: "Chat ao vivo (em breve)", s: "Resposta em ~3 min", k: "WhatsApp / app" },
            { t: "Comunidade", s: "1.200+ builders", k: "WhatsApp privado" },
            { t: "Masterclasses", s: "Toda quinta às 15h30", k: "Marketing / Vendas" },
            { t: "Especialistas", s: "1:1 quinzenal", k: "Pro + Assessoria" }].
            map((c, i) =>
            <div key={i} style={{ background: "var(--surface)", border: "1px solid var(--line-2)", borderRadius: 10, padding: 14, display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{c.t}</div>
                <div style={{ fontSize: 11, color: "var(--ink-2)" }}>{c.s}</div>
                <div style={{ fontSize: 10, color: "var(--ink-3)", fontFamily: "var(--font-mono)", marginTop: "auto" }}>{c.k}</div>
              </div>
            )}
          </div>
        </div>

        {/* 7 — Calendar / cadência (span-2) */}
        <div className="feature-card span-2">
          <h3>Cadência inteligente</h3>
          <p>A IA respeita horário comercial, fuso e limites seguros do LinkedIn.</p>
          <div className="preview preview-cal">
            {Array.from({ length: 28 }).map((_, i) => {
              const cls = "d" + ([3, 5, 9, 12, 16, 18, 22, 24].includes(i) ? " has" : "") + (i === 12 ? " today" : "");
              return <div key={i} className={cls}>{i + 1}</div>;
            })}
          </div>
        </div>
      </div>
    </section>);

}

// ============================================================
// SHOWCASE — Product mockup
// ============================================================
function Showcase() {
  const [tab, setTab] = useState("Campanha");
  return (
    <section className="showcase">
      <div className="section-head">
        <span className="eyebrow">Dentro da plataforma</span>
        <h2>Construa, lance e otimize.<br />Tudo em uma tela.</h2>
        <p>Editor de campanhas, caixa de respostas unificada e painel de performance — sem trocar de aba.</p>
      </div>

      <div className="showcase-tabs">
        {["Campanha", "Caixa de entrada", "Performance"].map((t) =>
        <button key={t} className={tab === t ? "active" : ""} onClick={() => setTab(t)}>{t}</button>
        )}
      </div>

      <div className="product-frame">
        <div className="bar">
          <div className="dots">
            <span className="dot"></span><span className="dot"></span><span className="dot"></span>
          </div>
          <div className="url">app.alessiaflow.com.br / campanhas / decisores-saas</div>
          <span style={{ width: 60 }}></span>
        </div>
        <div className="body">
          <div className="sidebar">
            <div className="group">Workspace</div>
            <div className="item"><div className="ic"></div> Visão geral</div>
            <div className="item active"><div className="ic"></div> Campanhas</div>
            <div className="item"><div className="ic"></div> Leads</div>
            <div className="item"><div className="ic"></div> Caixa unificada</div>
            <div className="item"><div className="ic"></div> Sequências IA</div>
            <div className="group">Operação</div>
            <div className="item"><div className="ic"></div> Contas</div>
            <div className="item"><div className="ic"></div> Templates</div>
            <div className="item"><div className="ic"></div> Integrações</div>
          </div>
          <div className="main">
            <h3 className="greet">Boa tarde, <span className="you">Marina</span> 👋</h3>
            <p className="sub">Você tem 12 respostas para revisar e 3 sequências sugeridas pela IA.</p>
            <div className="grid">
              <div className="panel col-span-2">
                <h6>Campanha — Decisores SaaS</h6>
                <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                  <div className="ring" style={{ "--p": 72 }}>
                    <div className="ring-inner">72%</div>
                  </div>
                  <div className="task-list" style={{ flex: 1 }}>
                    {[
                    { l: "Visitar perfil", d: true, p: "100%" },
                    { l: "Convite + nota IA", d: true, p: "82%" },
                    { l: "Follow-up #1", d: false, p: "41%" },
                    { l: "E-mail booster", d: false, p: "—" }].
                    map((t, i) =>
                    <div key={i} className={"task-item " + (t.d ? "done" : "")}>
                        <span className="check"></span>
                        <span className="label">{t.l}</span>
                        <span className="pct">{t.p}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="panel">
                <h6>Hoje</h6>
                <div className="timer">21:48</div>
                <div className="timer-row">
                  <div className="timer-btn"><I.play /></div>
                  <span style={{ fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>convites · 48/80</span>
                </div>
              </div>
              <div className="panel">
                <h6>Aceite</h6>
                <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.02em" }}>48%</div>
                <div style={{ fontSize: 11, color: "oklch(60% 0.15 145)", fontFamily: "var(--font-mono)" }}>+12pp / mês anterior</div>
              </div>
              <div className="panel">
                <h6>Resposta</h6>
                <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.02em" }}>19%</div>
                <div style={{ fontSize: 11, color: "oklch(60% 0.15 145)", fontFamily: "var(--font-mono)" }}>+4,2pp</div>
              </div>
              <div className="panel">
                <h6>Reuniões agendadas</h6>
                <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.02em" }}>128</div>
                <div style={{ fontSize: 11, color: "oklch(60% 0.15 145)", fontFamily: "var(--font-mono)" }}>YTD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

// ============================================================
// HOW IT WORKS
// ============================================================
function HowItWorks() {
  const steps = [
  { n: "01", t: "Conecte LinkedIn e e-mail", d: "Login uma vez na nuvem da AlessIA. Damos um IP brasileiro dedicado para o seu perfil — sem extensão, sem deixar a máquina ligada." },
  { n: "02", t: "Traga sua lista (ou puxe do LinkedIn)", d: "Importe um CSV, uma busca do Sales Navigator ou conecte ao seu CRM. A AlessIA limpa, enriquece e segmenta automaticamente." },
  { n: "03", t: "Deixe a IA escrever — você revisa", d: "Texto, áudio personalizado e até vídeo gerado a partir do perfil de cada lead. Você aprova templates e a IA aplica o tom." },
  { n: "04", t: "Lance e otimize com dashboards", d: "A AlessIA otimiza horários, cadência e canais. Você acompanha aceite, resposta e SQL por campanha e por SDR." }];

  return (
    <section className="section" id="how">
      <div className="section-head">
        <span className="eyebrow">Como funciona</span>
        <h2>Do primeiro convite à reunião agendada<br />em menos de uma semana.</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {steps.map((s, i) =>
        <div key={i} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--r-lg)", padding: 24, position: "relative" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", letterSpacing: ".05em" }}>{s.n}</div>
            <h3 style={{ margin: "10px 0 8px", fontSize: 18, letterSpacing: "-0.01em", fontWeight: 600, textWrap: "balance" }}>{s.t}</h3>
            <p style={{ margin: 0, fontSize: 14, color: "var(--ink-3)", lineHeight: 1.5, textWrap: "pretty" }}>{s.d}</p>
          </div>
        )}
      </div>
    </section>);

}

// ============================================================
// INTEGRATIONS — competitors / channels
// ============================================================
function Integrations() {
  const tiles = [
  { l: "in", c: "#0A66C2", w: "white" },
  { l: "✉", c: "var(--ink)", w: "white" },
  { l: "HS", c: "#ff7a59", w: "white" },
  { l: "SF", c: "#00a1e0", w: "white" },
  { l: "PD", c: "oklch(45% 0.18 150)", w: "white" },
  { l: "RD", c: "oklch(60% 0.2 25)", w: "white" },
  { l: "+120", c: "var(--bg-soft)", w: "var(--ink)" }];

  return (
    <section className="section int-section" id="integrations">
      <div className="section-head">
        <span className="eyebrow">Integrações</span>
        <h2>Conecta com tudo que o seu time já usa.</h2>
        <p>LinkedIn, e-mail, CRMs, ferramentas de enriquecimento e webhooks. Mais de 120 conectores nativos.</p>
      </div>

      <div className="int-board">
        <div className="int-center">
          <div className="pips">
            <span className="pip accent"></span><span className="pip"></span>
            <span className="pip"></span><span className="pip accent"></span>
          </div>
        </div>
        <div className="int-row-big">
          {tiles.map((t, i) =>
          <div key={i} className="tile">
              <div className="glyph" style={{ background: t.c, color: t.w }}>{t.l}</div>
            </div>
          )}
        </div>
        <div style={{ textAlign: "center", marginTop: 16, fontSize: 13, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>+ CRM · Veross Scraper AI· Make · Zapier · n8n · Webhooks · APIs

        </div>
      </div>
    </section>);

}

// ============================================================
// COMPARATIVOS PREVIEW
// ============================================================
function ComparativosPreview() {
  const top = [
  { name: "HeyReach", slug: "heyreach" },
  { name: "Lemlist", slug: "lemlist" },
  { name: "Expandi", slug: "expandi" },
  { name: "Dripify", slug: "dripify" },
  { name: "Waalaxy", slug: "waalaxy" },
  { name: "Dux-Soup", slug: "dux-soup" },
  { name: "Salesflow", slug: "salesflow" },
  { name: "PhantomBuster", slug: "phantombuster" }];

  return (
    <section className="section" id="comparativos" style={{ background: "var(--bg-soft)", maxWidth: "none", padding: "96px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>
        <div className="section-head">
          <span className="eyebrow">Comparativos</span>
          <h2>Por que times comerciais brasileiros<br />trocam de plataforma para AlessIA Flow.</h2>
          <p>Comparamos com 19 alternativas globais — análise honesta de preço, recursos, riscos de banimento e suporte em pt-BR.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
          {top.map((c) =>
          <a key={c.slug} href={`comparativos/${c.slug}.html`} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, padding: "16px 18px", textDecoration: "none", color: "var(--ink)", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "border-color .15s, transform .15s" }}
          onMouseEnter={(e) => {e.currentTarget.style.borderColor = "var(--accent)";e.currentTarget.style.transform = "translateY(-2px)";}}
          onMouseLeave={(e) => {e.currentTarget.style.borderColor = "var(--line)";e.currentTarget.style.transform = "translateY(0)";}}>
              <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-3)" }}>vs</span>
                <b style={{ fontSize: 15, letterSpacing: "-0.01em" }}>{c.name}</b>
              </span>
              <I.arrow />
            </a>
          )}
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="comparativos/index.html" className="btn btn--outline btn--lg">
            Ver todos os 19 comparativos <I.arrow />
          </a>
        </div>
      </div>
    </section>);

}

// ============================================================
// TESTIMONIALS
// ============================================================
function Testimonials() {
  return (
    <section className="section" id="customers">
      <div className="section-head">
        <span className="eyebrow">Resultados reais</span>
        <h2>O que dizem quem já usa<br />AlessIA Flow na operação.</h2>
      </div>
      <div className="testimonials-grid">
        <div className="t-card featured tall">
          <p className="quote">&ldquo;Organizou e evoluiu toda a nossa operação comercial — trouxe estrutura, previsibilidade e clareza nos processos. Acelerou execução e crescimento de uma forma que eu nunca tinha visto antes.&rdquo;</p>
          <div className="author">
            <div className="avatar" style={{ "--h": 260 }}>GL</div>
            <div className="who">
              <b>Guilherme Loureiro</b>
              <span>CEO · Inbotix</span>
            </div>
          </div>
        </div>
        <div className="t-card">
          <p className="quote">&ldquo;A automação da prospecção gerou muitas reuniões — e boa parte delas virou negócio de fato. Hoje capturo novos leads e clientes de forma autônoma.&rdquo;</p>
          <div className="author">
            <div className="avatar" style={{ "--h": 30 }}>FG</div>
            <div className="who">
              <b>Fabrício Galan</b>
              <span>CEO · Plataforma Empresas</span>
            </div>
          </div>
        </div>
        <div className="t-card">
          <p className="quote">&ldquo;Acelerou nosso processo de expansão. A busca ativa no LinkedIn ficou muito mais eficiente — alcançamos profissionais fora da nossa base e ganhamos controle real sobre a geração de oportunidades.&rdquo;</p>
          <div className="author">
            <div className="avatar" style={{ "--h": 145 }}>SL</div>
            <div className="who">
              <b>Sillas Lanes</b>
              <span>Líder Comercial · CareOn Brasil</span>
            </div>
          </div>
        </div>
        <div className="t-card">
          <p className="quote">&ldquo;Estruturou o processo de pré-vendas, implementou sistemas e trouxe inteligência aplicada à operação. O impacto nos resultados foi imediato e consistente.&rdquo;</p>
          <div className="author">
            <div className="avatar" style={{ "--h": 200 }}>CM</div>
            <div className="who">
              <b>César Madureira</b>
              <span>CEO · Ademicon Penha</span>
            </div>
          </div>
        </div>
        <div className="t-card">
          <p className="quote">&ldquo;Mudou minha forma de enxergar negócios e posicionamento. Nada vence o processo — e a Veross prova isso na prática todo dia.&rdquo;</p>
          <div className="author">
            <div className="avatar" style={{ "--h": 80 }}>HL</div>
            <div className="who">
              <b>Heisemberg Lima</b>
              <span>CEO · Social Play</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

// ============================================================
// PRICING
// ============================================================
function Pricing({ registerUrl }) {
  const [billing, setBilling] = useState("anual");
  const isAnual = billing === "anual";

  const plans = [
  {
    name: "Starter",
    desc: "Teste grátis por 14 dias e prove o valor antes de pagar.",
    price: "Grátis",
    per: "14 dias · sem cartão",
    features: [
    "1 perfil LinkedIn",
    "IP dedicado durante o trial",
    "Personalização por IA (texto)",
    "Até 40 convites / dia",
    "Suporte em português"],

    cta: "Começar trial",
    featured: false
  },
  {
    name: "Pro",
    desc: "Para SDRs e times comerciais que querem escala com segurança.",
    price: isAnual ? "R$ 399" : "R$ 599",
    per: isAnual ? "/mês · cobrado anualmente" : "/mês · cobrado mensalmente",
    features: [
    "Tudo do Starter, sem limite de trial",
    "IPs dedicados permanentes",
    "Personalização IA: texto, voz e vídeo",
    "Multi-canal (LinkedIn + e-mail)",
    "Integrações com CRM e Sales Navigator",
    "Dashboards e relatórios completos",
    "Comunidade WhatsApp + masterclasses"],

    cta: "Começar grátis",
    featured: true,
    ribbon: "MAIS POPULAR"
  },
  {
    name: "Agency ou Whitelabel",
    desc: "Para agências e operações multi-conta com gestão dedicada.",
    price: "Sob consulta",
    per: "a partir de 5 perfis",
    features: [
    "Tudo do Pro",
    "Multi-conta nativo com papéis",
    "Gerente de conta dedicado",
    "Onboarding white-glove",
    "SLA e contratos customizados",
    "Treinamento do time presencial"],

    cta: "Falar com vendas",
    featured: false
  }];


  return (
    <section className="section" id="pricing">
      <div className="section-head">
        <span className="eyebrow">Planos &amp; preços</span>
        <h2>Pagamento em reais.<br />Sem surpresas no cartão internacional.</h2>
        <p>Todos os planos pagos incluem suporte em português, IPs dedicados e atualizações automáticas.</p>
      </div>

      <div className="pricing-toggle">
        <button className={billing === "mensal" ? "active" : ""} onClick={() => setBilling("mensal")}>Mensal</button>
        <button className={billing === "anual" ? "active" : ""} onClick={() => setBilling("anual")}>
          Anual <span className="save">−33%</span>
        </button>
      </div>

      <div className="pricing-grid">
        {plans.map((p) =>
        <div key={p.name} className={"price-card" + (p.featured ? " featured" : "")}>
            {p.ribbon && <span className="ribbon">{p.ribbon}</span>}
            <div className="plan-head">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
            <div className="price">
              <span className="amount">{p.price}</span>
              <span className="per">{p.per}</span>
            </div>
            <ul className="features-list">
              {p.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <a href={registerUrl} className={"btn " + (p.featured ? "btn--outline" : "btn--primary") + " btn--lg"} style={p.featured ? { background: "white", color: "var(--accent)", borderColor: "white" } : {}}>
              {p.cta} <I.arrow />
            </a>
          </div>
        )}
      </div>

      <p style={{ textAlign: "center", marginTop: 32, fontSize: 13, color: "var(--ink-3)" }}>
        Preços em BRL. Operado pela Veross Outbound Sales — CNPJ 47.876.266/0001-66. Cancelamento self-service. <a href="politica-de-cancelamento.html" style={{ color: "var(--ink-3)", textDecoration: "underline" }}>Política de cancelamento</a>.
      </p>
    </section>);

}

// ============================================================
// FAQ
// ============================================================
function FAQ() {
  const [open, setOpen] = useState(0);
  const items = [
  { q: "O LinkedIn não bane contas que usam automação?", a: "O LinkedIn bane uso descuidado de automação — extensões de navegador, IPs compartilhados e ritmos sobre-humanos. O AlessIA Flow opera 100% em nuvem, com IP brasileiro fixo e exclusivo por perfil, dentro dos limites diários seguros. Não tivemos um único banimento em mais de 11 meses." },
  { q: "Como funciona a personalização com IA?", a: "A IA lê o perfil público do lead (cargo, empresa, posts recentes, experiências) e gera mensagem, áudio ou vídeo a partir dos templates que você aprovou. Você revisa antes de disparar ou deixa em modo autônomo após validar a qualidade." },
  { q: "Preciso instalar alguma extensão ou deixar meu PC ligado?", a: "Não. AlessIA Flow é totalmente cloud. Você conecta sua conta uma vez, e a plataforma roda no servidor — pode desligar o computador, viajar, dormir. As ações continuam no fuso do seu lead." },
  { q: "Funciona com o Sales Navigator?", a: "Sim. Importe buscas direto do Sales Navigator, conecte por URL ou via integração nativa. Também aceitamos CSV, conexão a CRM (HubSpot, Salesforce, Pipedrive, RD) e webhooks." },
  { q: "Como é o suporte?", a: "100% em português, das 8h às 20h (BRT), via chat ao vivo e WhatsApp. Planos Pro têm acesso à comunidade fechada e masterclasses semanais. Plano Agency inclui gerente de conta dedicado." },
  { q: "Posso cancelar quando quiser?", a: "Sim. Cancelamento self-service no painel. Em planos mensais a cobrança encerra ao fim do ciclo. Em planos anuais oferecemos 14 dias de direito de arrependimento. Detalhes na nossa política de cancelamento." },
  { q: "Quem está por trás do AlessIA Flow?", a: "AlessIA Flow é uma plataforma operada pela Veross Outbound Sales, empresa brasileira especializada em arquitetura e operações comerciais B2B. CNPJ: 47.876.266/0001-66. Contato: alessiaflow@veross.com.br | +55 12 98251-9830." }];

  return (
    <section className="section" id="faq">
      <div className="section-head">
        <span className="eyebrow">Perguntas frequentes</span>
        <h2>Tudo que perguntam antes de assinar.</h2>
      </div>
      <div className="faq-list">
        {items.map((it, i) =>
        <div key={i} className={"faq-item " + (open === i ? "open" : "")}>
            <div className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              {it.q}
              <span className="plus"></span>
            </div>
            <div className="faq-a">{it.a}</div>
          </div>
        )}
      </div>
    </section>);

}

// ============================================================
// CTA
// ============================================================
function CTA({ onDemoClick, registerUrl }) {
  return (
    <section className="section" style={{ padding: "48px 28px 96px" }}>
      <div className="cta-banner">
        <div>
          <h2>Comece grátis hoje.<br />Sua primeira reunião agendada em 7 dias.</h2>
          <p>14 dias de trial completo. Sem cartão de crédito. Suporte em português desde o primeiro minuto.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={registerUrl} className="btn btn--primary btn--lg">
              Começar grátis <I.arrow />
            </a>
            <button className="btn btn--outline btn--lg" onClick={onDemoClick}>
              Agendar demo
            </button>
          </div>
        </div>
        <div className="cta-art">
          <div className="blob b1">
            <div className="row"><span>Aceite</span><b>48%</b></div>
            <div className="row"><span>Resposta</span><b>19%</b></div>
            <div className="row"><span>Reuniões</span><b>128</b></div>
          </div>
          <div className="blob b3">
            Pipeline
            <div className="num">R$2,3M</div>
          </div>
          <div className="blob b2">
            <div className="pips">
              <span className="p a"></span><span className="p"></span>
              <span className="p"></span><span className="p a"></span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <a className="brand" href="#">
            <img src="uploads/VEROSS-ALESSIAFLOW-LOGO-165-x60-transp.svg" alt="AlessIA Flow" className="brand-logo" style={{ height: 28 }} />
          </a>
          <p className="brand-blurb">Plataforma de prospecção no LinkedIn e e-mail com IA. Operada pela Veross Outbound Sales.</p>
        </div>
        <div className="footer-col">
          <h6>Produto</h6>
          <a href="#features">Recursos</a>
          <a href="#how">Como funciona</a>
          <a href="#integrations">Integrações</a>
          <a href="#pricing">Preços</a>
        </div>
        <div className="footer-col">
          <h6>Comparativos</h6>
          <a href="comparativos/index.html">Todos os 19</a>
          <a href="comparativos/heyreach.html">vs HeyReach</a>
          <a href="comparativos/lemlist.html">vs Lemlist</a>
          <a href="comparativos/expandi.html">vs Expandi</a>
          <a href="comparativos/dripify.html">vs Dripify</a>
        </div>
        <div className="footer-col">
          <h6>Suporte</h6>
          <a href="central-de-ajuda.html">Central de Ajuda</a>
          <a href="central-de-ajuda.html#troubleshooting">Troubleshooting</a>
          <a href="#">Status</a>
          <a href="#">Comunidade WhatsApp</a>
        </div>
        <div className="footer-col">
          <h6>Legal</h6>
          <a href="termos-de-uso.html">Termos de Uso</a>
          <a href="politica-de-privacidade.html">Privacidade</a>
          <a href="politica-de-cancelamento.html">Cancelamento</a>
          <a href="#">Segurança</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Veross Outbound Sales · CNPJ 47.876.266/0001-66 · alessiaflow@veross.com.br · +55 12 98251-9830</span>
        <span><a href="politica-de-privacidade.html" style={{ color: "inherit" }}>Privacidade</a> · <a href="termos-de-uso.html" style={{ color: "inherit" }}>Termos</a> · <a href="politica-de-cancelamento.html" style={{ color: "inherit" }}>Cancelamento</a></span>
      </div>
    </footer>);

}

// ============================================================
// DEMO MODAL
// ============================================================
function Field({ label, value, onChange, type = "text", placeholder }) {
  return (
    <div>
      <label style={{ fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: ".06em" }}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%", marginTop: 6,
          padding: "12px 14px",
          fontSize: 14,
          border: "1px solid var(--line)",
          borderRadius: 10,
          background: "var(--surface)",
          color: "var(--ink)",
          fontFamily: "inherit",
          outline: "none"
        }}
        onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
        onBlur={(e) => e.target.style.borderColor = "var(--line)"} />
      
    </div>);

}

function DemoModal({ open, onClose, registerUrl }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "SDR" });
  useEffect(() => {if (!open) setForm({ name: "", email: "", company: "", role: "SDR" });}, [open]);

  if (!open) return null;
  const valid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.company.trim();

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "rgba(15,23,42,0.5)",
      backdropFilter: "blur(6px)",
      display: "grid", placeItems: "center",
      padding: 24,
      animation: "fadeIn .2s ease"
    }} onClick={onClose}>
      <div style={{
        width: "min(480px, 100%)",
        background: "var(--surface)",
        borderRadius: 22,
        padding: 32,
        boxShadow: "var(--shadow-lg)",
        position: "relative"
      }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{
          position: "absolute", top: 16, right: 16,
          width: 32, height: 32, borderRadius: 999,
          border: 0, background: "var(--bg-soft)",
          cursor: "pointer", fontSize: 18, color: "var(--ink-3)"
        }}>×</button>
        <>
            <h3 style={{ fontSize: 24, margin: "0 0 6px", letterSpacing: "-0.02em", fontWeight: 600 }}>Começar trial grátis</h3>
            <p style={{ margin: "0 0 24px", color: "var(--ink-3)", fontSize: 14 }}>14 dias com plano Pro. Sem cartão de crédito.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Field label="Nome completo" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Marina Alves" />
              <Field label="E-mail corporativo" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" placeholder="marina@empresa.com.br" />
              <Field label="Empresa" value={form.company} onChange={(v) => setForm({ ...form, company: v })} placeholder="Korpus" />
              <div>
                <label style={{ fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: ".06em" }}>SEU PAPEL</label>
                <div style={{ display: "flex", gap: 6, marginTop: 6, flexWrap: "wrap" }}>
                  {["SDR", "AE", "Sales Manager", "Founder", "Agência"].map((s) =>
                <button key={s}
                onClick={() => setForm({ ...form, role: s })}
                style={{
                  padding: "8px 14px",
                  borderRadius: 999,
                  border: "1px solid " + (form.role === s ? "var(--accent)" : "var(--line)"),
                  background: form.role === s ? "var(--accent-soft)" : "var(--surface)",
                  color: form.role === s ? "var(--accent)" : "var(--ink-2)",
                  fontSize: 13, cursor: "pointer", fontFamily: "var(--font-mono)"
                }}>{s}</button>
                )}
                </div>
              </div>
              <a
              href={valid ? registerUrl : undefined}
              onClick={(e) => {if (!valid) e.preventDefault();else onClose();}}
              className="btn btn--primary btn--lg"
              style={{ marginTop: 8, opacity: valid ? 1 : 0.5, cursor: valid ? "pointer" : "not-allowed", pointerEvents: valid ? "auto" : "none" }}>
                Criar workspace <I.arrow />
              </a>
            </div>
        </>
      </div>
    </div>);

}

// Expose
Object.assign(window, { Nav, Hero, Logos, Features, Showcase, HowItWorks, Integrations, ComparativosPreview, Testimonials, Pricing, FAQ, CTA, Footer, DemoModal, Field });