"use client";

import { Fragment, useEffect, useState } from "react";
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

const advantageCards = [
  {
    number: "01",
    icon: "clinical",
    image: "/images/advantage-clinical-data.png?v=20260620-clean",
    imageAlt: "임상 데이터를 태블릿에 입력하는 의료진",
    title: "CLINICAL DATA",
    lead: "정확하고 신뢰도 높은 임상 데이터",
    detail: "병원 진료 기록, 검사 결과, 처방 정보, 생활 습관 등 다양한 임상 데이터를 표준화하여 수집합니다."
  },
  {
    number: "02",
    icon: "analytics",
    image: "/images/advantage-analytics.png?v=20260620-clean",
    imageAlt: "회복 데이터를 분석하는 대시보드",
    title: "RECOMMENDATION LOGIC",
    lead: "근거 기반의 개인 맞춤 추천 로직",
    detail: "의학적 근거와 빅데이터 기반 알고리즘으로 개인에게 최적화된 회복 솔루션을 도출합니다."
  },
  {
    number: "03",
    icon: "expert",
    image: "/images/advantage-expert-review.png?v=20260620-clean",
    imageAlt: "전문가가 태블릿으로 회복 계획을 검토하는 장면",
    title: "EXPERT REVIEW",
    lead: "전문가의 임상적 검토와 최종 판단",
    detail: "전문의, 약사, 영양사 등의 다학제 전문가가 추천 결과를 검토하고 최종 가이드를 제공합니다."
  },
  {
    number: "04",
    icon: "pharmacy",
    image: "/images/advantage-pharmacy-network.png?v=20260620-clean",
    imageAlt: "약국에서 제품을 확인하는 약사",
    title: "PHARMACY NETWORK",
    lead: "전국 약국 네트워크를 통한 실행과 관리",
    detail: "검증된 약국 파트너와의 연계를 통해 처방·상담·배송까지 끊김 없는 회복 여정을 지원합니다."
  }
];

const problemItems = [
  { icon: "hospital", label: "병원 중심의 단절된\n진료 경험" },
  { icon: "report", label: "흩어진 검사 결과와\n의료 정보" },
  { icon: "care", label: "지역사회 케어와의\n느슨한 연결" },
  { icon: "medicine", label: "복잡한 영양제·약물\n선택과 관리" },
  { icon: "uncertainty", label: "회복 과정에서의\n불확실성과 불안" }
];

const companyInfo = [
  ["대표자", "문명훈"],
  ["주소", "서울시 은평구 통일로71길 2-1, 4층 16호(대조동, 대조빌딩)"],
  ["대표번호", "02-6956-1133"],
  ["사업자 등록번호", "364-87-03182"]
];

const mainNav = [
  { label: "홈", href: "#home", current: true },
  { label: "아카데미", href: "/academy" },
  { label: "수소치료기", href: "/product1-detail" },
  { label: "건기식", href: "/product2" }
];

function ProblemIcon({ type }: { type: string }) {
  if (type === "hospital") {
    return (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M10 42V15h10V7h8v8h10v27" />
        <path d="M7 42h34" />
        <path d="M20 42V31h8v11" />
        <path d="M20 14h8M18 23h3M27 23h3M18 28h3M27 28h3" />
        <path d="M24 10v7M20.5 13.5h7" />
      </svg>
    );
  }

  if (type === "report") {
    return (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M14 6h15l7 7v29H14z" />
        <path d="M29 6v9h7" />
        <path d="M20 31l5-5 4 3 5-7" />
        <path d="M20 36h13" />
      </svg>
    );
  }

  if (type === "care") {
    return (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M17 21a7 7 0 1 1 14 0" />
        <path d="M11 41v-5a8 8 0 0 1 8-8h10a8 8 0 0 1 8 8v5" />
        <path d="M8 28a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM40 28a5 5 0 1 0 0-10 5 5 0 0 0 0 10" />
        <path d="M8 32v8M40 32v8" />
      </svg>
    );
  }

  if (type === "medicine") {
    return (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M16 13h18l-2 9 4 4v16H14V26l4-4z" />
        <path d="M14 13h22" />
        <path d="M20 31h10" />
        <path d="M20 36h7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M14 14h20v28H14z" />
      <path d="M19 14a5 5 0 0 1 10 0" />
      <path d="M24 29a5 5 0 1 0-5-5" />
      <path d="M24 35v.5" />
    </svg>
  );
}

function AdvantageIcon({ type }: { type: string }) {
  if (type === "clinical") {
    return (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M14 9h20v32H14z" />
        <path d="M18 9V6h12v3" />
        <path d="M20 20h12M20 27h12M20 34h8" />
        <path d="M34 18h4v10h-4" />
      </svg>
    );
  }

  if (type === "analytics") {
    return (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 38h32" />
        <path d="M10 36V12" />
        <path d="M15 31l7-8 6 5 11-14" />
        <path d="M38 14h-8M38 14v8" />
      </svg>
    );
  }

  if (type === "expert") {
    return (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 25a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
        <path d="M10 41v-4a12 12 0 0 1 12-12h4a12 12 0 0 1 12 12v4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M14 17h20v24H14z" />
      <path d="M19 17v-6h10v6" />
      <path d="M24 24v10M19 29h10" />
      <path d="M10 23h4M34 23h4" />
    </svg>
  );
}

export default function HomePage() {
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  useEffect(() => {
    const syncHeader = () => {
      setIsLogoVisible(window.scrollY >= 300);
    };

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });

    return () => window.removeEventListener("scroll", syncHeader);
  }, []);

  return (
    <>
      <header className={`site-header${isLogoVisible ? " logo-visible" : ""}`} aria-label="KAMBROX 주요 메뉴">
        <Link className="site-header-brand" href="#home" aria-label="KAMBROX 홈">
          <img
            className="site-header-logo"
            src="/images/mplc24vr-logo-transparent.png"
            alt="KAMBROX"
          />
        </Link>
        <nav className="global-nav" aria-label="주요 메뉴">
          {mainNav.map((item) => (
            <Link key={item.label} href={item.href} aria-current={item.current ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="/product1-detail">
          수소치료기 구매하기
        </Link>
        <details className="mobile-menu">
          <summary aria-label="메뉴 열기">
            <span className="sr-only">메뉴 열기</span>
            <span className="hamburger-lines" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </summary>
          <nav className="mobile-menu-panel" aria-label="모바일 주요 메뉴">
            {mainNav.map((item) => (
              <Link key={item.label} href={item.href} aria-current={item.current ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
            <Link className="mobile-menu-cta" href="/product1-detail">
              수소치료기 구매하기
            </Link>
          </nav>
        </details>
      </header>
      <main className="hero-shell" id="home">
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
        <section className="recovery-visual" id="academy" aria-label="캠브록스 회복 관리 서비스 화면">
          <div className="recovery-visual-frame recovery-problem">
            <div className="recovery-problem-photo" aria-hidden="true" />
            <div className="recovery-problem-status" aria-hidden="true">
              <span className="problem-status-card" data-status="disconnected">Disconnected</span>
              <span className="problem-status-card" data-status="uncertain">Uncertain</span>
              <span className="problem-status-card" data-status="fragmented">Fragmented</span>
            </div>
            <div className="recovery-problem-content">
              <span className="recovery-problem-kicker">THE PROBLEM</span>
              <h2 className="recovery-problem-title">
                퇴원 이후의 회복,
                <br />
                여전히 연결되지 못하고 있습니다
              </h2>
              <span className="recovery-problem-rule" aria-hidden="true" />
              <p className="recovery-problem-copy">
                치료는 병원에서 끝나지만, 회복은 일상에서 시작됩니다.
                <br />
                그러나 환자들은 단절된 정보와 불확실한 관리 속에서
                <br />
                스스로 길을 찾아야 하는 현실에 놓여 있습니다.
              </p>
              <ul className="recovery-problem-list" aria-label="퇴원 이후 회복 관리의 문제">
                {problemItems.map((item) => (
                  <li className="recovery-problem-item" key={item.icon}>
                    <span className="recovery-problem-icon" aria-hidden="true">
                      <ProblemIcon type={item.icon} />
                    </span>
                    <span>
                      {item.label.split("\n").map((line, lineIndex) => (
                        <Fragment key={`${item.icon}-${lineIndex}`}>
                          {lineIndex > 0 && <br />}
                          {line}
                        </Fragment>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="advantage-section" aria-label="캠브록스 핵심 역량">
          <div className="advantage-inner">
            <div className="advantage-header">
              <div>
                <span className="advantage-kicker">OUR ADVANTAGE</span>
                <h2 className="advantage-title">
                  회복 여정의 모든 단계를
                  <br />
                  데이터와 전문가의 힘으로 연결합니다
                </h2>
              </div>
              <p className="advantage-copy">
                KAMBROX는 임상 데이터부터 지역 약국 네트워크까지
                <br />
                유기적으로 연결된 4가지 핵심 역량으로 최적의 회복 경험을 제공합니다.
              </p>
            </div>
            <div className="advantage-grid">
              {advantageCards.map((card) => (
                <article className="advantage-card" key={card.title}>
                  <div className="advantage-media">
                    <img src={card.image} alt={card.imageAlt} loading="lazy" decoding="async" />
                  </div>
                  <div className="advantage-body">
                    <h3 className="advantage-card-title">
                      <span className="advantage-icon" aria-hidden="true">
                        <AdvantageIcon type={card.icon} />
                      </span>
                      {card.title}
                    </h3>
                    <p className="advantage-lead">{card.lead}</p>
                    <span className="advantage-rule" aria-hidden="true" />
                    <p className="advantage-detail">{card.detail}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="advantage-summary">
              <span className="advantage-summary-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M24 5l16 6v11c0 10-6.6 17.5-16 21-9.4-3.5-16-11-16-21V11z" />
                  <path d="M18 24l4 4 9-10" />
                </svg>
              </span>
              <p className="advantage-summary-copy">
                데이터와 전문가, 그리고 지역의 신뢰할 수 있는 약국이 하나의 시스템으로 연결되어
                <br />
                <strong>환자 한 분 한 분에게 최적화된 회복 경험을 제공합니다.</strong>
              </p>
              <span className="advantage-divider" aria-hidden="true" />
              <ul className="advantage-keywords" aria-label="캠브록스 회복 경험의 핵심 가치">
                <li>정확성</li>
                <li>전문성</li>
                <li>연결성</li>
                <li>지속성</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="provider-platform-section" aria-label="약사를 위한 통합 운영 플랫폼">
          <div className="provider-platform-inner">
            <div className="provider-platform-copy">
              <span className="provider-kicker">FOR PROVIDERS</span>
              <h2 className="provider-title">
                약사를 위한
                <br />
                통합 운영 플랫폼
              </h2>
              <p className="provider-copy">
                환자 분류부터 상담, 추천, 추적 관리까지
                <br />
                회복 여정을 체계적으로 관리할 수 있는
                <br />
                전문가 전용 대시보드입니다.
              </p>
              <ul className="provider-feature-list" aria-label="제공자 플랫폼 주요 기능">
                <li className="provider-feature-item">
                  <span className="provider-feature-icon" aria-hidden="true">
                    <svg viewBox="0 0 48 48" fill="none">
                      <path d="M18 23a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />
                      <path d="M7 39v-3a11 11 0 0 1 11-11h1a11 11 0 0 1 11 11v3" />
                      <path d="M32 24a5 5 0 1 0 0-10" />
                      <path d="M34 27a9 9 0 0 1 7 9v3" />
                    </svg>
                  </span>
                  <span>
                    <strong className="provider-feature-title">환자 분류 및 위험도 관리</strong>
                    <span className="provider-feature-copy">임상 데이터와 생활 패턴을 기반으로 환자를 자동 분류하고 우선순위를 설정합니다.</span>
                  </span>
                </li>
                <li className="provider-feature-item">
                  <span className="provider-feature-icon" aria-hidden="true">
                    <svg viewBox="0 0 48 48" fill="none">
                      <path d="M15 7h18v34H15z" />
                      <path d="M19 14h10M19 22h10M19 30h6" />
                      <path d="M24 36h.1" />
                    </svg>
                  </span>
                  <span>
                    <strong className="provider-feature-title">상담 가이드 및 추천 지원</strong>
                    <span className="provider-feature-copy">개인 맞춤 추천과 근거 기반 가이드를 제공하여 상담의 정확성과 일관성을 높입니다.</span>
                  </span>
                </li>
                <li className="provider-feature-item">
                  <span className="provider-feature-icon" aria-hidden="true">
                    <svg viewBox="0 0 48 48" fill="none">
                      <path d="M14 7h17l5 5v29H14z" />
                      <path d="M31 7v6h6" />
                      <path d="M20 23h12M20 30h12M20 36h8" />
                    </svg>
                  </span>
                  <span>
                    <strong className="provider-feature-title">추적 관리 및 리포트</strong>
                    <span className="provider-feature-copy">추적 일정 관리와 결과 리포트를 통해 치료 효과를 지속적으로 모니터링합니다.</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="provider-dashboard-shell">
              <img
                className="provider-dashboard-image"
                src="/images/provider-dashboard-object.png"
                alt="KAMBROX 제공자용 통합 운영 대시보드 화면"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>
        <section className="ecosystem-section" aria-label="데이터로 연결된 통합 회복 케어 솔루션">
          <div className="ecosystem-inner">
            <div className="ecosystem-header">
              <div>
                <span className="ecosystem-kicker">PRODUCT ECOSYSTEM</span>
                <h2 className="ecosystem-title">데이터로 연결된 통합 회복 케어 솔루션</h2>
                <p className="ecosystem-copy">
                  KAMBROX는 데이터 플랫폼을 중심으로
                  <br />
                  제품, 디바이스, 케어 서비스를 하나의 흐름으로 제공합니다.
                </p>
              </div>
              <ul className="ecosystem-trust" aria-label="제품 생태계 신뢰 기준">
                <li>
                  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <path d="M24 5l16 6v11c0 10-6.6 17.5-16 21-9.4-3.5-16-11-16-21V11z" />
                    <path d="M18 24l4 4 9-10" />
                  </svg>
                  임상 근거 기반
                </li>
                <li>전문가 검토</li>
                <li>안전한 데이터 관리</li>
              </ul>
            </div>
            <div className="ecosystem-map">
              <article className="ecosystem-card">
                <div className="ecosystem-card-copy">
                  <h3 className="ecosystem-card-title">
                    <span className="ecosystem-card-icon" aria-hidden="true">
                      <svg viewBox="0 0 48 48" fill="none">
                        <path d="M17 9l22 22a8 8 0 0 1-11 11L6 20A8 8 0 0 1 17 9z" />
                        <path d="M16 30l14-14" />
                      </svg>
                    </span>
                    맞춤형 영양 솔루션
                  </h3>
                  <p className="ecosystem-card-desc">환자 데이터와 전문가 가이드 기반의 맞춤형 보충제를 제공합니다.</p>
                </div>
                <div className="ecosystem-media">
                  <img src="/images/ecosystem-nutrition-object.png" alt="KAMBROX 맞춤형 영양 솔루션 제품군" loading="lazy" decoding="async" />
                </div>
              </article>
              <article className="ecosystem-card">
                <div className="ecosystem-card-copy">
                  <h3 className="ecosystem-card-title">
                    <span className="ecosystem-card-icon" aria-hidden="true">
                      <svg viewBox="0 0 48 48" fill="none">
                        <path d="M10 42V16l14-8 14 8v26" />
                        <path d="M7 42h34M20 42V30h8v12" />
                        <path d="M24 16v9M19.5 20.5h9" />
                      </svg>
                    </span>
                    지역 약국 네트워크
                  </h3>
                  <p className="ecosystem-card-desc">검증된 약국 네트워크를 통해 제품 제공과 복약 상담, 사후 관리를 연결합니다.</p>
                </div>
                <div className="ecosystem-media">
                  <img src="/images/ecosystem-pharmacy-object.png" alt="지역 약국 네트워크와 상담 약국 제품" loading="lazy" decoding="async" />
                </div>
              </article>
              <div className="ecosystem-platform" aria-label="KAMBROX 데이터 플랫폼">
                <span>
                  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <ellipse cx="24" cy="12" rx="10" ry="5" />
                    <path d="M14 12v18c0 2.8 4.5 5 10 5s10-2.2 10-5V12" />
                    <path d="M14 21c0 2.8 4.5 5 10 5s10-2.2 10-5" />
                  </svg>
                  KAMBROX
                  <br />
                  DATA PLATFORM
                </span>
              </div>
            </div>
            <ul className="ecosystem-principles" aria-label="통합 회복 케어 원칙">
              <li><svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 5l16 6v11c0 10-6.6 17.5-16 21-9.4-3.5-16-11-16-21V11z" /><path d="M18 24l4 4 9-10" /></svg><span><strong>근거 기반 설계</strong>임상 근거와 가이드라인을 기반으로 설계된 제품과 서비스를 제공합니다.</span></li>
              <li><svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M14 22V12a10 10 0 0 1 20 0v10" /><path d="M11 22h26v20H11z" /></svg><span><strong>안전한 데이터 관리</strong>암호화된 데이터 관리와 접근 통제로 환자 정보를 안전하게 보호합니다.</span></li>
              <li><svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M17 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM31 23a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /><path d="M6 42v-4a11 11 0 0 1 11-11h1a11 11 0 0 1 11 11v4M31 29a10 10 0 0 1 10 10v3" /></svg><span><strong>전문가 협업</strong>전문의, 약사 등 전문가가 함께 최적의 회복 계획을 만듭니다.</span></li>
              <li><svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M9 39V25M19 39V17M29 39V21M39 39V9" /></svg><span><strong>지속적 모니터링</strong>지속적인 데이터 모니터링으로 회복 경과를 확인하고 케어를 최적화합니다.</span></li>
              <li><svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M15 16a13 13 0 0 1 22 7" /><path d="M37 14v9h-9M33 32a13 13 0 0 1-22-7" /><path d="M11 34v-9h9" /></svg><span><strong>통합적인 회복 경험</strong>제품, 서비스, 네트워크가 유기적으로 연결된 통합 회복 경험을 제공합니다.</span></li>
            </ul>
          </div>
        </section>
        <section className="impact-section" id="supplements" aria-label="연결된 회복 경험의 임팩트">
          <div className="impact-inner">
            <header className="impact-header">
              <div>
                <span className="impact-kicker">OUR IMPACT</span>
                <h2 className="impact-title">연결된 회복 경험이<br />더 나은 삶의 변화를 만듭니다</h2>
              </div>
              <p className="impact-copy">
                KAMBROX는 데이터와 전문가, 지역의 연결을 통해<br />
                환자 중심의 회복 생태계를 만들고, 지속 가능한 가치를 만들어갑니다.
              </p>
            </header>

            <div className="impact-card-grid" aria-label="캠브록스 회복 경험의 변화">
              <article className="impact-card">
                <figure className="impact-media">
                  <img src="/images/impact-continuity-object.png" alt="의료진이 환자와 회복 데이터를 확인하는 상담 장면" loading="lazy" decoding="async" />
                </figure>
                <div className="impact-card-body">
                  <div>
                    <div className="impact-card-heading">
                      <span className="impact-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M24 39s-13-8.1-13-19a7 7 0 0 1 13-3.7A7 7 0 0 1 37 20c0 10.9-13 19-13 19z" /><path d="M17 24h5l3-6 4 10 2-4h4" /></svg></span>
                      <h3 className="impact-card-title"><span className="impact-number">01</span>지속 가능한 회복 관리</h3>
                    </div>
                    <p className="impact-card-copy">치료 이후에도 개인 맞춤 관리와 지속적인 모니터링으로 회복 여정을 안전하게 이어갑니다.</p>
                  </div>
                  <span className="impact-card-tag">CONTINUITY</span>
                </div>
              </article>

              <article className="impact-card">
                <figure className="impact-media">
                  <img src="/images/impact-local-object.png" alt="약사가 환자에게 전문 상담을 제공하는 약국 장면" loading="lazy" decoding="async" />
                </figure>
                <div className="impact-card-body">
                  <div>
                    <div className="impact-card-heading">
                      <span className="impact-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M13 42V15h22v27" /><path d="M18 15V9h12v6M20 27h8M24 23v8M11 42h26" /></svg></span>
                      <h3 className="impact-card-title"><span className="impact-number">02</span>지역 약사의 전문성 강화</h3>
                    </div>
                    <p className="impact-card-copy">약사의 전문 판단을 지원하는 데이터와 솔루션으로 지역 약국의 역할을 확장하고 환자 케어의 질을 높입니다.</p>
                  </div>
                  <span className="impact-card-tag">LOCAL EMPOWERMENT</span>
                </div>
              </article>

              <article className="impact-card">
                <figure className="impact-media">
                  <img src="/images/impact-evidence-object.png" alt="데이터 분석 대시보드가 표시된 태블릿" loading="lazy" decoding="async" />
                </figure>
                <div className="impact-card-body">
                  <div>
                    <div className="impact-card-heading">
                      <span className="impact-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M13 38V26M23 38V18M33 38V11" /><path d="M9 38h30" /></svg></span>
                      <h3 className="impact-card-title"><span className="impact-number">03</span>근거 기반의 가치 축적</h3>
                    </div>
                    <p className="impact-card-copy">실제 임상 현장에서 생성되는 데이터를 체계적으로 축적하여 더 나은 근거와 인사이트를 만들어갑니다.</p>
                  </div>
                  <span className="impact-card-tag">EVIDENCE ACCUMULATION</span>
                </div>
              </article>

              <article className="impact-card">
                <figure className="impact-media">
                  <img src="/images/impact-community-object.png" alt="보호자와 환자가 태블릿을 보며 케어 정보를 나누는 장면" loading="lazy" decoding="async" />
                </figure>
                <div className="impact-card-body">
                  <div>
                    <div className="impact-card-heading">
                      <span className="impact-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M17 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM31 23a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" /><path d="M7 39a10 10 0 0 1 20 0M27 31a9 9 0 0 1 14 8" /></svg></span>
                      <h3 className="impact-card-title"><span className="impact-number">04</span>연결된 케어 커뮤니티</h3>
                    </div>
                    <p className="impact-card-copy">의료진, 약사, 환자, 보호자가 연결된 커뮤니티를 통해 정보와 경험을 나누고 함께 회복을 만들어갑니다.</p>
                  </div>
                  <span className="impact-card-tag">CONNECTED COMMUNITY</span>
                </div>
              </article>
            </div>

          </div>
        </section>
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
    </>
  );
}
