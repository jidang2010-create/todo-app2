const interests = ["AI ART", "AI 영상 만들기", "VIBE CODING", "CINEMAGRAPH"];

const notes = [
  { no: "01", title: "AI와 노는 법", text: "잘 몰라도 일단 만들어 보고, 실패한 프롬프트까지 다음 작업의 재료로 씁니다." },
  { no: "02", title: "취미가 너무 많음", text: "러닝, 코바늘, 영상, 그리고 새로운 도구. 초보의 마음으로 오래 배우는 중입니다." },
  { no: "03", title: "작은 점을 잇는 중", text: "각기 다른 관심사를 연결해 나만의 이미지와 이야기를 만듭니다." },
];

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="주요 메뉴">
        <a className="brand" href="#top" aria-label="Jay Dot 처음으로">JAY DOT<span>●</span></a>
        <div className="navlinks">
          <a href="#about">ABOUT</a>
          <a href="#notes">NOTES</a>
          <a href="mailto:hello@jaydot.kr">SAY HELLO ↗</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">JIDANG_MAMA · CURIOUS CREATOR</p>
          <h1><span>좋아하는 걸</span><span className="blue">배우는 사람.</span></h1>
          <p className="intro">AI랑 친해지는 중 🤖<br />러닝, 코바늘, 초보만 잔뜩 취미부자.<br />AI 기반 영상과 바이브코딩을 배우고 있어요.</p>
          <div className="hero-actions">
            <a className="button" href="#about">나를 소개할게요 <span>↘</span></a>
            <p><b>747</b> followers<br /><b>110K</b> recent views</p>
          </div>
        </div>
        <div className="portrait-wrap" aria-label="Jay Dot 캐릭터 일러스트">
          <div className="portrait-label">HEY, I&apos;M JAY!</div>
          <img src="/jay-dot.png" alt="선글라스를 쓴 Jay Dot 캐릭터" />
          <div className="dot-stamp">●<br /><span>LEARN<br />MAKE<br />PLAY</span></div>
        </div>
      </section>

      <div className="ticker" aria-label="관심 분야">
        <div>{[...interests, ...interests].map((item, i) => <span key={`${item}-${i}`}>{item} <b>✦</b></span>)}</div>
      </div>

      <section className="about" id="about">
        <div className="section-number">01 / ABOUT</div>
        <div className="about-copy">
          <p className="kicker">작은 점 하나에서 시작한 이야기</p>
          <h2>완벽해진 다음이 아니라,<br /><em>궁금한 지금</em> 시작합니다.</h2>
          <div className="about-grid">
            <p>저는 Jay Dot, 새로운 걸 배우고 직접 만들어 보는 사람입니다. AI 아트에서 영상, 코딩까지 서로 멀어 보이는 관심사를 하나씩 연결하고 있어요.</p>
            <p>이 페이지는 완성된 전문가의 전시장이 아니라, 좋아하는 것들이 어떻게 나만의 세계가 되는지 기록하는 살아 있는 노트입니다.</p>
          </div>
        </div>
      </section>

      <section className="notes" id="notes">
        <div className="notes-head"><span>02 / FIELD NOTES</span><h2>요즘의<br />JAY DOT</h2></div>
        <div className="note-list">
          {notes.map((note) => (
            <article key={note.no}>
              <span>{note.no}</span><h3>{note.title}</h3><p>{note.text}</p><b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <p>같이 재미있는 점을 찍어볼까요?</p>
        <a href="mailto:hello@jaydot.kr">LET&apos;S MAKE<br />SOMETHING<span>●</span></a>
        <div><span>JAY DOT © 2026</span><span>AI · LIFE · CURIOSITY</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
