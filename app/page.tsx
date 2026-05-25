const flow = [
  {
    label: "병원 진단 및 데이터",
    icon: "/images/mpkyy6ix-icon1.png",
    tone: "green"
  },
  {
    label: "임상 데이터 분석",
    icon: "/images/mpkyy6iz-icon2.png",
    tone: "gold"
  },
  {
    label: "약국 상담 및 관리",
    icon: "/images/mpkyy6j0-icon3.png",
    tone: "green"
  },
  {
    label: "가정에서의 회복 관리",
    icon: "/images/mpkyy6j0-icon4.png",
    tone: "gold"
  }
];

const callouts = [
  {
    className: "callout-hospital",
    title: "병원",
    copy: "진단 및 임상 데이터"
  },
  {
    className: "callout-analytics",
    title: "데이터 분석",
    copy: "임상 데이터 분석 및\n개인 맞춤 인사이트"
  },
  {
    className: "callout-pharmacy",
    title: "약국",
    copy: "약사 상담 및 복약 관리"
  },
  {
    className: "callout-home",
    title: "가정",
    copy: "생활 관리 및\n회복 지원"
  }
];

export default function HomePage() {
  return (
    <main className="hero-shell">
      <div className="hero-stage">
        <section className="hero" aria-label="KAMBROX hero">
          <div className="hero-copy">
            <a className="brand" href="#" aria-label="KAMBROX home">
              <span className="brand-mark" aria-hidden="true">
                K
              </span>
              <span className="brand-word">KAMBROX</span>
            </a>

            <h1>
              퇴원 이후의 회복,
              <br />
              데이터로 연결합니다
            </h1>

            <p className="lead">
              캠브록스는 환자의 임상 데이터와 생활 정보를 기반으로
              <br />
              병원·약국·가정을 연결하여 개인 맞춤 회복을 돕습니다.
            </p>

            <ol className="process" aria-label="회복 관리 흐름">
              {flow.map((item, index) => (
                <li className="process-item" key={item.label}>
                  <span className={`process-icon ${item.tone}`}>
                    <img src={item.icon} alt="" />
                  </span>
                  <span className="process-label">{item.label}</span>
                  {index < flow.length - 1 ? <i className="process-arrow" aria-hidden="true" /> : null}
                </li>
              ))}
            </ol>
          </div>

          <div className="network" aria-label="병원, 데이터 분석, 약국, 가정 연결 다이어그램">
            <img
              className="network-art"
              src="/images/mpkyy6in-asset1.png"
              alt="중앙 KAMBROX 허브와 병원, 데이터 분석, 약국, 가정이 연결된 3D 네트워크"
            />
            {callouts.map((callout) => (
              <div className={`network-callout ${callout.className}`} key={callout.title}>
                <strong>{callout.title}</strong>
                <span>{callout.copy}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
