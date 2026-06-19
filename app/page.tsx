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

const recoveryVisuals = [
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
    detail: "온코 전문의, 약사, 영양사 등의 다학제 전문가가 추천 결과를 검토하고 최종 가이드를 제공합니다."
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
  { label: "건강식", href: "/product2-detail" }
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
                <article className="advantage-card" key={card.number}>
                  <div className="advantage-media">
                    <img src={card.image} alt={card.imageAlt} loading="lazy" decoding="async" />
                    <span className="advantage-number">{card.number}</span>
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
        {recoveryVisuals.map((visual, index) => (
          <section
            className="recovery-visual"
            id={index === recoveryVisuals.length - 1 ? "supplements" : undefined}
            aria-label={visual.label}
            key={visual.src}
          >
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
    </>
  );
}
