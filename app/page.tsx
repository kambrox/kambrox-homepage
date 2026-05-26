import Link from "next/link";

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

const recoveryVisuals = [
  {
    label: "캠브록스 회복 관리 서비스 화면",
    src: "/images/mpll3696-2.png",
    alt: "캠브록스 회복 관리 서비스의 병원, 약국, 가정 연결 화면"
  },
  {
    label: "캠브록스 서비스 후속 화면",
    src: "/images/mpllpeoj-3.png",
    alt: "캠브록스 서비스의 후속 화면"
  },
  {
    label: "캠브록스 서비스 세 번째 화면",
    src: "/images/mpllpeon-4.png",
    alt: "캠브록스 서비스의 세 번째 화면"
  },
  {
    label: "캠브록스 서비스 네 번째 화면",
    src: "/images/mpllpeor-5.png",
    alt: "캠브록스 서비스의 네 번째 화면"
  },
  {
    label: "캠브록스 서비스 다섯 번째 화면",
    src: "/images/mpllpeou-6.png",
    alt: "캠브록스 서비스의 다섯 번째 화면"
  },
  {
    label: "캠브록스 서비스 여섯 번째 화면",
    src: "/images/mpllpeoz-7.png",
    alt: "캠브록스 서비스의 여섯 번째 화면"
  }
];

const companyInfo = [
  ["대표자", "문명훈"],
  ["주소", "서울시 은평구 통일로71길 2-1, 4층 16호(대조동, 대조빌딩)"],
  ["대표번호", "02-6956-1133"],
  ["사업자 등록번호", "364-87-03182"]
];

export default function HomePage() {
  return (
    <>
      <main className="hero-shell">
        <div className="hero-stage">
          <section className="hero" aria-label="KAMBROX hero">
            <div className="hero-copy">
              <a className="brand" href="#" aria-label="KAMBROX home">
                <img
                  className="brand-logo"
                  src="/images/mplc24vr-logo-transparent.png"
                  alt="KAMBROX"
                />
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
                src="/images/mplcegpj-asset2-transparent.png"
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
        {recoveryVisuals.map((visual) => (
          <section className="recovery-visual" aria-label={visual.label} key={visual.src}>
            <div className="recovery-visual-frame">
              <img
                className="recovery-visual-image"
                src={visual.src}
                alt={visual.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </section>
        ))}
        <footer className="site-footer" aria-label="KAMBROX partnership footer">
          <div className="site-footer-inner">
            <div className="footer-message">
              <p className="footer-title">
                KAMBROX는 회복의 새로운 표준을
                <br />
                만들어갑니다.
              </p>
            </div>

            <div className="footer-contact" aria-label="회사 정보">
              <p className="footer-company-name">주식회사 캠브록스 ( KAMBROX Corp.)</p>
              <dl className="footer-company-info">
                {companyInfo.map(([term, description]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </footer>
      </main>
      <Link
        className="purchase-floating"
        href="/product-detail"
        aria-label="수소치료기 구매하기"
      >
        수소치료기 구매하기
      </Link>
    </>
  );
}
